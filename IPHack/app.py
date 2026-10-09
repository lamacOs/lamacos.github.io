
#!/usr/bin/env python3
"""
iPhone Netzwerkdiagnose
Python 3.10+
Nur Standardbibliothek, keine zusätzlichen Pakete.

Start:
    python app.py

Danach im Browser öffnen:
    http://127.0.0.1:8080

Das Programm bindet standardmäßig nur an localhost.
"""

import html
import ipaddress
import json
import platform
import socket
import subprocess
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse


HOST = "127.0.0.1"
PORT = 8080
MAX_BODY = 4096
MAX_REQUESTS_PER_MINUTE = 20

# Ausschließlich diese beiden TCP-Ports werden geprüft.
ALLOWED_PORTS = (80, 443)

# RFC1918 IPv4-Netze und IPv6 Unique Local Addresses.
ALLOWED_NETWORKS = (
    ipaddress.ip_network("10.0.0.0/8"),
    ipaddress.ip_network("172.16.0.0/12"),
    ipaddress.ip_network("192.168.0.0/16"),
    ipaddress.ip_network("fc00::/7"),
)

request_history = {}


def validate_target(value):
    """Akzeptiert ausschließlich IP-Literale in privaten Netzen."""
    if not isinstance(value, str) or len(value) > 45:
        raise ValueError("Bitte eine gültige IP-Adresse eingeben.")

    try:
        address = ipaddress.ip_address(value.strip())
    except ValueError:
        raise ValueError(
            "Ungültige IP-Adresse. Hostnamen werden nicht akzeptiert."
        )

    if not any(address in network for network in ALLOWED_NETWORKS):
        raise ValueError(
            "Nur private IPv4-Adressen oder lokale IPv6-Adressen "
            "aus fc00::/7 sind zugelassen."
        )

    return address


def check_rate_limit(client_ip):
    """Einfache Begrenzung pro Client."""
    now = time.monotonic()
    history = request_history.setdefault(client_ip, [])
    history[:] = [t for t in history if now - t < 60]

    if len(history) >= MAX_REQUESTS_PER_MINUTE:
        return False

    history.append(now)

    # Alte Client-Einträge entfernen.
    if len(request_history) > 1000:
        for key in list(request_history):
            if key != client_ip and not request_history[key]:
                del request_history[key]

    return True


def reverse_dns(address):
    try:
        hostname, aliases, _ = socket.gethostbyaddr(str(address))
        return {
            "success": True,
            "hostname": hostname,
            "aliases": aliases[:10],
        }
    except (socket.herror, socket.gaierror, OSError):
        return {
            "success": False,
            "hostname": None,
            "message": "Kein Reverse-DNS-Eintrag gefunden.",
        }


def check_ping(address):
    """Versucht genau einen Ping mit kurzem Timeout."""
    system = platform.system().lower()

    if system == "windows":
        command = ["ping", "-n", "1", "-w", "1500", str(address)]
    elif system == "darwin":
        command = ["ping", "-c", "1", "-W", "1500", str(address)]
    else:
        command = ["ping", "-c", "1", "-W", "2", str(address)]

    try:
        result = subprocess.run(
            command,
            capture_output=True,
            text=True,
            timeout=4,
            shell=False,
            check=False,
        )

        return {
            "success": result.returncode == 0,
            "message": (
                "Antwort auf Ping erhalten."
                if result.returncode == 0
                else "Keine Ping-Antwort. Das Gerät kann trotzdem online sein."
            ),
        }

    except FileNotFoundError:
        return {
            "success": False,
            "message": "Ping-Programm ist auf diesem System nicht verfügbar.",
        }
    except subprocess.TimeoutExpired:
        return {
            "success": False,
            "message": "Ping-Zeitüberschreitung.",
        }
    except OSError:
        return {
            "success": False,
            "message": "Ping konnte nicht ausgeführt werden.",
        }


def check_tcp_port(address, port):
    """Prüft nur einen fest vorgegebenen TCP-Port."""
    start = time.monotonic()

    try:
        with socket.socket(
            socket.AF_INET6 if address.version == 6 else socket.AF_INET,
            socket.SOCK_STREAM,
        ) as sock:
            sock.settimeout(1.5)
            result = sock.connect_ex((str(address), port))
            elapsed_ms = round((time.monotonic() - start) * 1000)

        return {
            "port": port,
            "open": result == 0,
            "elapsed_ms": elapsed_ms,
            "message": (
                "TCP-Verbindung möglich."
                if result == 0
                else "Keine TCP-Verbindung möglich."
            ),
        }

    except (OSError, OverflowError, ValueError):
        return {
            "port": port,
            "open": False,
            "elapsed_ms": round((time.monotonic() - start) * 1000),
            "message": "Verbindung fehlgeschlagen.",
        }


def diagnose(address):
    started = time.monotonic()

    result = {
        "ip": str(address),
        "version": address.version,
        "checked_at": time.strftime("%Y-%m-%d %H:%M:%S"),
        "reverse_dns": reverse_dns(address),
        "ping": check_ping(address),
        "ports": [
            check_tcp_port(address, port)
            for port in ALLOWED_PORTS
        ],
    }

    result["duration_ms"] = round(
        (time.monotonic() - started) * 1000
    )

    result["notice"] = (
        "Ein geschlossener Port oder eine fehlende Ping-Antwort "
        "beweist nicht, dass das iPhone offline ist."
    )

    return result


PAGE = r"""<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<title>iPhone Netzwerkdiagnose</title>
<style>
:root {
  color-scheme: dark;
  --bg: #0b1020;
  --panel: #141c30;
  --line: #283651;
  --text: #edf3ff;
  --muted: #9baac4;
  --accent: #78a9ff;
  --good: #75e0b1;
  --bad: #ffb1b1;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font: 16px/1.55 system-ui, -apple-system, sans-serif;
}
main {
  width: min(900px, 100%);
  margin: 0 auto;
  padding: 32px 18px 64px;
}
header { margin-bottom: 28px; }
.eyebrow {
  color: var(--accent);
  font-size: 12px;
  letter-spacing: .14em;
  text-transform: uppercase;
  font-weight: 800;
}
h1 { font-size: clamp(27px, 5vw, 40px); line-height: 1.15; }
p { color: var(--muted); }
.panel {
  border: 1px solid var(--line);
  background: var(--panel);
  border-radius: 18px;
  padding: 22px;
  margin: 18px 0;
}
label { display: block; font-weight: 650; margin-bottom: 8px; }
input {
  display: block;
  width: 100%;
  background: #0b1223;
  border: 1px solid #3a4a68;
  color: var(--text);
  border-radius: 10px;
  padding: 14px;
  font: inherit;
}
button {
  margin-top: 12px;
  border: 0;
  border-radius: 10px;
  padding: 13px 18px;
  background: var(--accent);
  color: #091329;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
}
button:disabled { opacity: .55; cursor: wait; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 12px;
}
.metric {
  background: #0e1629;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 16px;
  min-width: 0;
}
.metric h3 { margin: 0 0 8px; font-size: 14px; color: var(--muted); }
.value { font-size: 18px; font-weight: 750; overflow-wrap: anywhere; }
.status { font-size: 13px; margin-top: 8px; }
.good { color: var(--good); }
.bad { color: var(--bad); }
.muted { color: var(--muted); }
.notice {
  padding: 12px 14px;
  border-left: 3px solid var(--accent);
  background: #101a30;
  color: var(--muted);
  border-radius: 5px;
}
#message { min-height: 24px; }
footer { color: var(--muted); font-size: 13px; margin-top: 26px; }
code { overflow-wrap: anywhere; }
</style>
</head>
<body>
<main>
<header>
  <div class="eyebrow">Lokales Netzwerk · Diagnose</div>
  <h1>iPhone Netzwerkdiagnose</h1>
  <p>Prüfe grundlegende Netzwerkverbindungen zu einem Gerät
  in deinem eigenen lokalen Netzwerk.</p>
</header>

<section class="panel">
  <form id="form">
    <label for="ip">Private IP-Adresse des iPhones</label>
    <input id="ip" name="ip" type="text"
      placeholder="z. B. 192.168.1.25"
      autocomplete="off" spellcheck="false"
      maxlength="45" required>
    <button id="submit" type="submit">Diagnose starten</button>
    <p id="message" role="status" aria-live="polite"></p>
  </form>
  <div class="notice">
    Die Website prüft ausschließlich die eingegebene private IP-Adresse.
    Sie benötigt keine iPhone-App. iOS muss auf eingehende Verbindungen
    nicht antworten; Ergebnisse können daher eingeschränkt sein.
  </div>
</section>

<section class="panel" aria-labelledby="summary">
  <h2 id="summary">Ergebnisse</h2>
  <div id="results" class="grid">
    <div class="metric">
      <h3>Status</h3>
      <div class="value">Noch nicht geprüft</div>
      <div class="status muted">IP-Adresse eingeben und starten.</div>
    </div>
  </div>
</section>

<footer>
  Es werden keine beliebigen Befehle ausgeführt. Keine Fernsteuerung,
  kein Zugriff auf private Daten und kein Ausschalten des iPhones.
  Die Diagnose läuft auf dem Rechner, auf dem der Server gestartet wurde.
</footer>
</main>

<script>
const form = document.getElementById('form');
const input = document.getElementById('ip');
const button = document.getElementById('submit');
const message = document.getElementById('message');
const results = document.getElementById('results');

function element(tag, cls, text) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = String(text);
  return node;
}

function card(title, value, detail, good) {
  const node = element('div', 'metric');
  node.append(element('h3', '', title));
  node.append(element('div', 'value', value));
  node.append(element(
    'div',
    'status ' + (good === true ? 'good' : good === false ? 'bad' : 'muted'),
    detail
  ));
  return node;
}

function render(data) {
  results.replaceChildren();

  results.append(card(
    'IP-Adresse',
    data.ip,
    'IPv' + data.version,
    true
  ));

  results.append(card(
    'Ping',
    data.ping.success ? 'Antwort erhalten' : 'Keine Antwort',
    data.ping.message,
    data.ping.success
  ));

  results.append(card(
    'Reverse DNS',
    data.reverse_dns.hostname || 'Kein Eintrag',
    data.reverse_dns.message || 'Hostname aufgelöst',
    data.reverse_dns.success
  ));

  for (const port of data.ports) {
    results.append(card(
      'TCP-Port ' + port.port,
      port.open ? 'Erreichbar' : 'Nicht erreichbar',
      port.message + ' Dauer: ' + port.elapsed_ms + ' ms',
      port.open
    ));
  }

  results.append(card(
    'Dauer',
    data.duration_ms + ' ms',
    'Gesamte Diagnosezeit',
    null
  ));

  const note = element('div', 'notice');
  note.style.gridColumn = '1 / -1';
  note.textContent = data.notice;
  results.append(note);
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  button.disabled = true;
  message.textContent = 'Diagnose läuft …';

  try {
    const response = await fetch('/api/diagnose', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip: input.value.trim() })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Diagnose fehlgeschlagen.');
    }

    render(data);
    message.textContent = 'Diagnose abgeschlossen.';
  } catch (error) {
    message.textContent = error.message || 'Verbindungsfehler.';
  } finally {
    button.disabled = false;
  }
});
</script>
</body>
</html>
"""


class Handler(BaseHTTPRequestHandler):
    server_version = "LocalDiagnostic/1.0"

    def send_json(self, status, data):
        payload = json.dumps(data, ensure_ascii=False).encode("utf-8")

        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Content-Security-Policy",
                         "default-src 'self'; script-src 'self' 'unsafe-inline'; "
                         "style-src 'self' 'unsafe-inline'; connect-src 'self'; "
                         "base-uri 'none'; frame-ancestors 'none'")
        self.end_headers()
        self.wfile.write(payload)

    def do_GET(self):
        if urlparse(self.path).path != "/":
            self.send_error(404)
            return

        payload = PAGE.encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Content-Security-Policy",
                         "default-src 'self'; script-src 'self' 'unsafe-inline'; "
                         "style-src 'self' 'unsafe-inline'; connect-src 'self'; "
                         "base-uri 'none'; frame-ancestors 'none'")
        self.end_headers()
        self.wfile.write(payload)

    def do_POST(self):
        if urlparse(self.path).path != "/api/diagnose":
            self.send_json(404, {"error": "Endpunkt nicht gefunden."})
            return

        if not check_rate_limit(self.client_address[0]):
            self.send_json(429, {
                "error": "Zu viele Anfragen. Bitte eine Minute warten."
            })
            return

        content_type = self.headers.get("Content-Type", "")
        if not content_type.startswith("application/json"):
            self.send_json(415, {"error": "JSON wird erwartet."})
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            length = 0

        if length < 1 or length > MAX_BODY:
            self.send_json(413, {"error": "Ungültige Anfragegröße."})
            return

        try:
            raw = self.rfile.read(length)
            data = json.loads(raw.decode("utf-8"))

            if not isinstance(data, dict):
                raise ValueError("Ungültiges Anfrageformat.")

            address = validate_target(data.get("ip"))
            result = diagnose(address)
            self.send_json(200, result)

        except (ValueError, UnicodeDecodeError, json.JSONDecodeError) as exc:
            self.send_json(400, {"error": str(exc)})
        except Exception:
            self.send_json(500, {
                "error": "Interner Fehler bei der Diagnose."
            })

    def log_message(self, fmt, *args):
        # Keine eingegebenen IP-Adressen in Standardlogs schreiben.
        print("HTTP-Anfrage:", args[1] if len(args) > 1 else "")


def main():
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    print("iPhone Netzwerkdiagnose gestartet.")
    print(f"Öffne http://{HOST}:{PORT} im Browser.")
    print("Server beenden mit Strg+C.")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer wird beendet.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
