// Bildschirm wechseln
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

/* ================= COVER ================= */

const coverUpload = document.getElementById("coverUpload");
const coverConvertBtn = document.getElementById("coverConvert");
const coverDownloadBtn = document.getElementById("coverDownload");
const coverCanvas = document.getElementById("coverCanvas");
const coverCtx = coverCanvas.getContext("2d");
let coverImage = null;

coverUpload.addEventListener("change", function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        coverImage = new Image();
        coverImage.onload = function() {
            coverConvertBtn.disabled = false;
        };
        coverImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

coverConvertBtn.addEventListener("click", function() {
    if (!coverImage) return;

    const size = Math.min(coverImage.width, coverImage.height);
    const startX = (coverImage.width - size) / 2;
    const startY = (coverImage.height - size) / 2;

    coverCtx.clearRect(0, 0, 3000, 3000);
    coverCtx.drawImage(
        coverImage,
        startX, startY,
        size, size,
        0, 0,
        3000, 3000
    );

    coverDownloadBtn.disabled = false;
});

coverDownloadBtn.addEventListener("click", function() {
    const link = document.createElement("a");
    link.download = "RouteNote_Cover_3000x3000.jpg";
    link.href = coverCanvas.toDataURL("image/jpeg", 0.95);
    link.click();
});

/* ================= AUDIO ================= */

const audioUpload = document.getElementById("audioUpload");
const audioConvertBtn = document.getElementById("audioConvert");
const audioDownloadBtn = document.getElementById("audioDownload");

let audioBuffer;
let mp3Blob;

audioUpload.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const arrayBuffer = await file.arrayBuffer();
    const audioContext = new AudioContext({ sampleRate: 44100 });
    audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    audioConvertBtn.disabled = false;
    alert("Audio geladen ✔");
});

audioConvertBtn.addEventListener("click", () => {
    if (!audioBuffer) return;

    const left = audioBuffer.getChannelData(0);
    const right = audioBuffer.numberOfChannels > 1 ? audioBuffer.getChannelData(1) : left;

    const mp3encoder = new lamejs.Mp3Encoder(2, 44100, 320);
    const blockSize = 1152;
    const mp3Data = [];

    for (let i = 0; i < left.length; i += blockSize) {
        const leftChunk = left.subarray(i, i + blockSize);
        const rightChunk = right.subarray(i, i + blockSize);
        const mp3buf = mp3encoder.encodeBuffer(
            floatTo16BitPCM(leftChunk),
            floatTo16BitPCM(rightChunk)
        );
        if (mp3buf.length > 0) mp3Data.push(mp3buf);
    }

    const endBuf = mp3encoder.flush();
    if (endBuf.length > 0) mp3Data.push(endBuf);

    mp3Blob = new Blob(mp3Data, { type: "audio/mp3" });
    audioDownloadBtn.disabled = false;
    alert("Conversion fertig ✔");
});

audioDownloadBtn.addEventListener("click", () => {
    if (!mp3Blob) return;
    const url = URL.createObjectURL(mp3Blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "RouteNote_Master_44.1kHz_Stereo_320kbps.mp3";
    link.click();
});

function floatTo16BitPCM(input) {
    const output = new Int16Array(input.length);
    for (let i = 0; i < input.length; i++) {
        output[i] = Math.max(-1, Math.min(1, input[i])) * 0x7FFF;
    }
    return output;
}
