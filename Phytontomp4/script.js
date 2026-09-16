const pythonCode = document.getElementById("pythonCode");
const runBtn = document.getElementById("runBtn");
const exampleBtn = document.getElementById("exampleBtn");
const clearBtn = document.getElementById("clearBtn");

const status = document.getElementById("status");
const log = document.getElementById("log");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const video = document.getElementById("video");
const download = document.getElementById("download");
const pythonStatus = document.getElementById("pythonStatus");

let pyodide = null;
let ffmpeg = null;
let fetchFile = null;


// ============================================================
// UI
// ============================================================

function setStatus(text) {
    status.textContent = text;
}

function setProgress(value) {

    value = Math.max(
        0,
        Math.min(100, value)
    );

    progressBar.style.width =
        value + "%";

    progressText.textContent =
        Math.round(value) + "%";
}

function writeLog(text) {

    log.textContent +=
        text + "\n";

    log.scrollTop =
        log.scrollHeight;
}

function sleep(ms) {

    return new Promise(
        resolve => setTimeout(
            resolve,
            ms
        )
    );
}


// ============================================================
// PYODIDE
// ============================================================

async function loadPyodideEngine() {

    if (pyodide) {
        return pyodide;
    }

    setStatus(
        "🐍 Python wird geladen..."
    );

    pythonStatus.textContent =
        "Python lädt...";

    writeLog(
        "Lade Pyodide..."
    );

    if (!window.loadPyodide) {

        const script =
            document.createElement(
                "script"
            );

        script.src =
            "https://cdn.jsdelivr.net/pyodide/v0.27.2/full/pyodide.js";

        document.head.appendChild(
            script
        );

        await new Promise(
            (resolve, reject) => {

                script.onload =
                    resolve;

                script.onerror =
                    reject;
            }
        );
    }

    pyodide =
        await window.loadPyodide();

    writeLog(
        "Pyodide geladen."
    );

    setStatus(
        "📦 Pillow wird geladen..."
    );

    await pyodide.loadPackage(
        "micropip"
    );

    await pyodide.runPythonAsync(`
import micropip
await micropip.install("Pillow")
`);

    writeLog(
        "Pillow geladen."
    );

    pythonStatus.textContent =
        "Python bereit";

    return pyodide;
}


// ============================================================
// FFMPEG
// ============================================================

async function loadFFmpeg() {

    if (ffmpeg) {
        return ffmpeg;
    }

    setStatus(
        "🎞️ FFmpeg wird geladen..."
    );

    writeLog(
        "Lade FFmpeg als ES-Modul..."
    );

    /*
     * KEIN window.FFmpegWASM.
     */

    const ffmpegModule =
        await import(
            "https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/+esm"
        );

    const utilModule =
        await import(
            "https://cdn.jsdelivr.net/npm/@ffmpeg/util@0.12.1/+esm"
        );

    if (!ffmpegModule.FFmpeg) {

        throw new Error(
            "FFmpeg-Klasse wurde nicht gefunden."
        );
    }

    ffmpeg =
        new ffmpegModule.FFmpeg();

    fetchFile =
        utilModule.fetchFile;

    const toBlobURL =
        utilModule.toBlobURL;

    ffmpeg.on(
        "log",
        ({ message }) => {

            writeLog(
                "FFmpeg: " +
                message
            );
        }
    );

    const baseURL =
        "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/umd";

    const coreURL =
        await toBlobURL(
            `${baseURL}/ffmpeg-core.js`,
            "text/javascript"
        );

    const wasmURL =
        await toBlobURL(
            `${baseURL}/ffmpeg-core.wasm`,
            "application/wasm"
        );

    await ffmpeg.load({
        coreURL,
        wasmURL
    });

    writeLog(
        "FFmpeg erfolgreich geladen."
    );

    return ffmpeg;
}


// ============================================================
// PYTHON VORBEREITEN
// ============================================================

async function preparePython() {

    await loadPyodideEngine();

    const code =
        pythonCode.value;

    if (!code.trim()) {

        throw new Error(
            "Kein Python-Code vorhanden."
        );
    }

    setStatus(
        "🐍 Python-Code wird gestartet..."
    );

    await pyodide.runPythonAsync(
        code
    );

    const check =
        pyodide.runPython(
            "callable(globals().get('frame'))"
        );

    try {

        if (!check) {

            throw new Error(
                "Es wurde keine frame(t)-Funktion gefunden."
            );
        }

    } finally {

        if (
            check &&
            typeof check.destroy ===
            "function"
        ) {
            check.destroy();
        }
    }

    const settings =
        pyodide.runPython(`
(
    int(globals().get("WIDTH", 640)),
    int(globals().get("HEIGHT", 360)),
    float(globals().get("FPS", 24)),
    float(globals().get("DURATION", 8))
)
`);

    const values =
        settings.toJs();

    if (
        settings &&
        typeof settings.destroy ===
        "function"
    ) {
        settings.destroy();
    }

    return {
        width: values[0],
        height: values[1],
        fps: values[2],
        duration: values[3]
    };
}


// ============================================================
// PYTHON-FRAME
// ============================================================

async function createFrame(t) {

    const time =
        Number(
            t.toFixed(5)
        );

    await pyodide.runPythonAsync(`
img = frame(${time})
img.save("/tmp/current_frame.png")
`);

    const data =
        pyodide.FS.readFile(
            "/tmp/current_frame.png"
        );

    return new Uint8Array(
        data
    );
}


// ============================================================
// MUSIK + VOCAL
// ============================================================

function createMusicWav(
    duration,
    sampleRate = 44100
) {

    const samples =
        Math.floor(
            duration * sampleRate
        );

    const channels = 2;

    const audio =
        new Int16Array(
            samples * channels
        );

    // --------------------------------------------------------
    // Frequenzen
    // --------------------------------------------------------

    const N = {
        C3: 130.81,
        D3: 146.83,
        E3: 164.81,
        F3: 174.61,
        G3: 196.00,
        A3: 220.00,
        B3: 246.94,

        C4: 261.63,
        D4: 293.66,
        E4: 329.63,
        F4: 349.23,
        G4: 392.00,
        A4: 440.00,
        B4: 493.88,

        C5: 523.25,
        D5: 587.33,
        E5: 659.25,
        G5: 783.99,
        A5: 880.00
    };

    // --------------------------------------------------------
    // Akkorde
    // --------------------------------------------------------

    const chords = [

        [N.C3, N.E3, N.G3],

        [N.A3, N.C4, N.E4],

        [N.F3, N.A3, N.C4],

        [N.G3, N.B3, N.D4]
    ];

    // --------------------------------------------------------
    // Lead-Melodie
    // --------------------------------------------------------

    const melody = [

        N.C4,
        N.E4,
        N.G4,
        N.E4,

        N.A4,
        N.G4,
        N.E4,
        N.C4,

        N.F4,
        N.A4,
        N.G4,
        N.E4,

        N.D4,
        N.G4,
        N.A4,
        N.G4,

        N.C5,
        N.A4,
        N.G4,
        N.E4,

        N.F4,
        N.G4,
        N.A4,
        N.C5
    ];

    const beat =
        0.5;

    // --------------------------------------------------------
    // Phasen für Stereo
    // --------------------------------------------------------

    for (
        let i = 0;
        i < samples;
        i++
    ) {

        const t =
            i / sampleRate;

        let sample = 0;

        // ----------------------------------------------------
        // AKKORDE
        // ----------------------------------------------------

        const chordIndex =
            Math.floor(t / 2)
            % chords.length;

        const chord =
            chords[chordIndex];

        for (
            const frequency of chord
        ) {

            sample +=
                Math.sin(
                    2 *
                    Math.PI *
                    frequency *
                    t
                ) * 0.045;
        }

        // ----------------------------------------------------
        // BASS
        // ----------------------------------------------------

        sample +=
            Math.sin(
                2 *
                Math.PI *
                (chord[0] / 2) *
                t
            ) * 0.11;

        // ----------------------------------------------------
        // VOCAL-ARTIGE LEAD-STIMME
        // ----------------------------------------------------

        const noteIndex =
            Math.floor(t / beat)
            % melody.length;

        const frequency =
            melody[noteIndex];

        const noteTime =
            t % beat;

        let envelope =
            Math.min(
                1,
                noteTime * 12
            );

        envelope *=
            Math.max(
                0,
                1 -
                noteTime / beat
            );

        /*
         * Mischung mehrerer Harmonischer.
         * Dadurch klingt die Lead-Spur eher
         * wie eine synthetische Stimme als
         * wie ein einfacher Sinuston.
         */

        const fundamental =
            Math.sin(
                2 *
                Math.PI *
                frequency *
                t
            );

        const harmonic2 =
            Math.sin(
                2 *
                Math.PI *
                frequency *
                2 *
                t
            );

        const harmonic3 =
            Math.sin(
                2 *
                Math.PI *
                frequency *
                3 *
                t
            );

        const harmonic4 =
            Math.sin(
                2 *
                Math.PI *
                frequency *
                4 *
                t
            );

        const vocal =
            (
                fundamental * 0.16 +
                harmonic2 * 0.055 +
                harmonic3 * 0.025 +
                harmonic4 * 0.012
            ) * envelope;

        sample += vocal;

        // ----------------------------------------------------
        // KICK
        // ----------------------------------------------------

        const beatTime =
            t % beat;

        if (
            beatTime < 0.13
        ) {

            const kickEnvelope =
                Math.exp(
                    -beatTime * 32
                );

            const kickFreq =
                90 *
                Math.exp(
                    -beatTime * 10
                );

            sample +=
                Math.sin(
                    2 *
                    Math.PI *
                    kickFreq *
                    t
                ) *
                kickEnvelope *
                0.30;
        }

        // ----------------------------------------------------
        // SNARE
        // ----------------------------------------------------

        const half =
            t % 1;

        if (
            half > 0.48 &&
            half < 0.55
        ) {

            const noise =
                Math.random() * 2 - 1;

            sample +=
                noise * 0.07;
        }

        // ----------------------------------------------------
        // HI-HAT
        // ----------------------------------------------------

        const hat =
            t % 0.25;

        if (
            hat < 0.025
        ) {

            const noise =
                Math.random() * 2 - 1;

            sample +=
                noise * 0.035;
        }

        // ----------------------------------------------------
        // SUBTILES STEREO
        // ----------------------------------------------------

        let left =
            sample;

        let right =
            sample;

        left *=
            1 +
            Math.sin(t * 0.7) *
            0.04;

        right *=
            1 -
            Math.sin(t * 0.7) *
            0.04;

        // ----------------------------------------------------
        // Fade In / Out
        // ----------------------------------------------------

        let fade = 1;

        if (t < 0.8) {

            fade =
                t / 0.8;
        }

        if (
            t >
            duration - 1
        ) {

            fade =
                Math.max(
                    0,
                    (
                        duration - t
                    ) / 1
                );
        }

        left *= fade;
        right *= fade;

        // ----------------------------------------------------
        // Limiter
        // ----------------------------------------------------

        left =
            Math.max(
                -1,
                Math.min(
                    1,
                    left
                )
            );

        right =
            Math.max(
                -1,
                Math.min(
                    1,
                    right
                )
            );

        audio[i * 2] =
            Math.round(
                left * 32767
            );

        audio[i * 2 + 1] =
            Math.round(
                right * 32767
            );
    }

    // ========================================================
    // WAV HEADER
    // ========================================================

    const buffer =
        new ArrayBuffer(
            44 +
            audio.length * 2
        );

    const view =
        new DataView(buffer);

    function stringAt(
        offset,
        text
    ) {

        for (
            let i = 0;
            i < text.length;
            i++
        ) {

            view.setUint8(
                offset + i,
                text.charCodeAt(i)
            );
        }
    }

    stringAt(
        0,
        "RIFF"
    );

    view.setUint32(
        4,
        36 + audio.length * 2,
        true
    );

    stringAt(
        8,
        "WAVE"
    );

    stringAt(
        12,
        "fmt "
    );

    view.setUint32(
        16,
        16,
        true
    );

    view.setUint16(
        20,
        1,
        true
    );

    view.setUint16(
        22,
        2,
        true
    );

    view.setUint32(
        24,
        sampleRate,
        true
    );

    view.setUint32(
        28,
        sampleRate * 4,
        true
    );

    view.setUint16(
        32,
        4,
        true
    );

    view.setUint16(
        34,
        16,
        true
    );

    stringAt(
        36,
        "data"
    );

    view.setUint32(
        40,
        audio.length * 2,
        true
    );

    for (
        let i = 0;
        i < audio.length;
        i++
    ) {

        view.setInt16(
            44 + i * 2,
            audio[i],
            true
        );
    }

    return new Uint8Array(
        buffer
    );
}


// ============================================================
// MP4 ERSTELLEN
// ============================================================

async function createMP4(
    settings
) {

    await loadFFmpeg();

    const fps =
        settings.fps;

    const duration =
        settings.duration;

    const totalFrames =
        Math.ceil(
            fps * duration
        );

    writeLog(
        `Auflösung: ${settings.width}x${settings.height}`
    );

    writeLog(
        `FPS: ${fps}`
    );

    writeLog(
        `Dauer: ${duration}s`
    );

    writeLog(
        `Frames: ${totalFrames}`
    );

    // --------------------------------------------------------
    // Alte Dateien
    // --------------------------------------------------------

    for (
        const file of [
            "output.mp4",
            "silent.mp4",
            "music.wav"
        ]
    ) {

        try {
            await ffmpeg.deleteFile(
                file
            );
        } catch {}
    }

    // --------------------------------------------------------
    // FRAMES
    // --------------------------------------------------------

    for (
        let i = 0;
        i < totalFrames;
        i++
    ) {

        const t =
            i / fps;

        const png =
            await createFrame(t);

        const filename =
            `frame${String(i).padStart(5, "0")}.png`;

        await ffmpeg.writeFile(
            filename,
            png
        );

        const progress =
            (i / totalFrames) * 65;

        setProgress(
            progress
        );

        if (
            i === 0 ||
            i % fps === 0
        ) {

            setStatus(
                `🎨 Animation: Frame ${i + 1}/${totalFrames}`
            );
        }

        if (
            i % 4 === 0
        ) {
            await sleep(0);
        }
    }

    // --------------------------------------------------------
    // VIDEO
    // --------------------------------------------------------

    setProgress(68);

    setStatus(
        "🎬 Video wird codiert..."
    );

    await ffmpeg.exec([
        "-framerate",
        String(fps),

        "-i",
        "frame%05d.png",

        "-c:v",
        "libx264",

        "-preset",
        "ultrafast",

        "-crf",
        "23",

        "-pix_fmt",
        "yuv420p",

        "-movflags",
        "+faststart",

        "silent.mp4"
    ]);

    writeLog(
        "Video fertig."
    );

    // --------------------------------------------------------
    // AUDIO
    // --------------------------------------------------------

    setProgress(78);

    setStatus(
        "🎵 Musik und Vocal-Spur werden erzeugt..."
    );

    const wav =
        createMusicWav(
            duration
        );

    await ffmpeg.writeFile(
        "music.wav",
        wav
    );

    writeLog(
        "🎵 Musikspur erstellt."
    );

    writeLog(
        "🎤 Vocal-artige Lead-Melodie erstellt."
    );

    // --------------------------------------------------------
    // MUXING
    // --------------------------------------------------------

    setProgress(85);

    setStatus(
        "🎧 Video + Musik werden zusammengefügt..."
    );

    await ffmpeg.exec([
        "-i",
        "silent.mp4",

        "-i",
        "music.wav",

        "-map",
        "0:v:0",

        "-map",
        "1:a:0",

        "-c:v",
        "copy",

        "-c:a",
        "aac",

        "-b:a",
        "192k",

        "-shortest",

        "-movflags",
        "+faststart",

        "output.mp4"
    ]);

    // --------------------------------------------------------
    // AUSGABE
    // --------------------------------------------------------

    setProgress(96);

    setStatus(
        "📦 MP4 wird vorbereitet..."
    );

    const output =
        await ffmpeg.readFile(
            "output.mp4"
        );

    const blob =
        new Blob(
            [output.buffer],
            {
                type: "video/mp4"
            }
        );

    const url =
        URL.createObjectURL(
            blob
        );

    if (
        video.dataset.url
    ) {

        URL.revokeObjectURL(
            video.dataset.url
        );
    }

    video.dataset.url =
        url;

    video.src =
        url;

    video.load();

    download.href =
        url;

    download.download =
        "neon_horizons.mp4";

    download.style.display =
        "block";

    setProgress(100);

    setStatus(
        "✅ Fertig! Musikvideo mit Ton erstellt."
    );

    writeLog(
        `Dateigröße: ${(blob.size / 1024 / 1024).toFixed(2)} MB`
    );

    writeLog(
        "🎬 H.264 Video"
    );

    writeLog(
        "🎵 AAC Audio"
    );
}


// ============================================================
// START
// ============================================================

async function run() {

    runBtn.disabled =
        true;

    exampleBtn.disabled =
        true;

    clearBtn.disabled =
        true;

    download.style.display =
        "none";

    setProgress(0);

    log.textContent =
        "";

    try {

        const settings =
            await preparePython();

        await createMP4(
            settings
        );

    } catch (error) {

        console.error(
            error
        );

        setStatus(
            "❌ Fehler"
        );

        writeLog("");
        writeLog(
            "❌ FEHLER:"
        );

        writeLog(
            error.stack ||
            String(error)
        );

        setProgress(0);

    } finally {

        runBtn.disabled =
            false;

        exampleBtn.disabled =
            false;

        clearBtn.disabled =
            false;
    }
}


// ============================================================
// BUTTONS
// ============================================================

runBtn.addEventListener(
    "click",
    run
);

clearBtn.addEventListener(
    "click",
    () => {

        pythonCode.value =
            "";

        video.removeAttribute(
            "src"
        );

        video.load();

        download.style.display =
            "none";

        setProgress(0);

        log.textContent =
            "";

        setStatus(
            "Bereit."
        );
    }
);


// ============================================================
// BEISPIEL
// ============================================================

exampleBtn.addEventListener(
    "click",
    () => {

        setStatus(
            "Das Neon-Horizons-Projekt ist bereits geladen."
        );

        pythonStatus.textContent =
            "Song bereit";
    }
);
