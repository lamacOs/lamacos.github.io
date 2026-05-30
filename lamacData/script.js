// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAuyl1WG1IPuczEtmm8y-Zwgfw8k5uGpoQ",
  authDomain: "lamacdata.firebaseapp.com",
  projectId: "lamacdata",
  storageBucket: "lamacdata.firebasestorage.app",
  messagingSenderId: "50694143774",
  appId: "1:50694143774:web:31dac3e83f86f78677930f"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const contentEl = document.getElementById('content');
const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const saveBtn = document.getElementById('saveBtn');
const errorMsg = document.getElementById('errorMsg');

const passwordCorrect = "lamacos1276€/(,‘ö£]%)";

addBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  clearModal();
});

saveBtn.addEventListener('click', () => {
  const password = document.getElementById('password').value;
  const title = document.getElementById('title').value;
  const section = document.getElementById('section').value;
  const text = document.getElementById('contentText').value;

  if(password !== passwordCorrect) {
    errorMsg.textContent = "Falsches Passwort!";
    return;
  }

  if(!title || !text) {
    errorMsg.textContent = "Titel und Inhalt sind erforderlich!";
    return;
  }

  const newEntry = { title, text, section };
  const newKey = db.ref().child("entries").push().key;

  db.ref('entries/' + newKey).set(newEntry, err => {
    if(err) {
      errorMsg.textContent = "Fehler beim Speichern!";
    } else {
      modal.classList.add('hidden');
      clearModal();
      loadEntries();
    }
  });
});

function clearModal() {
  document.getElementById('password').value = '';
  document.getElementById('title').value = '';
  document.getElementById('contentText').value = '';
  errorMsg.textContent = '';
}

// Laden der Einträge
function loadEntries() {
  db.ref('entries').once('value').then(snapshot => {
    const data = snapshot.val();
    if(!data) {
      contentEl.innerHTML = "<p>Keine Einträge.</p>";
      return;
    }

    contentEl.innerHTML = '';
    Object.values(data).forEach(entry => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${entry.title}</h3><p><strong>${entry.section}</strong></p><p>${entry.text}</p>`;
      contentEl.appendChild(div);
    });
  });
}

// Beim Start laden
loadEntries();
