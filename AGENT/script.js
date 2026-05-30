const agentsData = [

{name:"Tom Schulz", age:24, interests:"Zocken", dept:"Spionage"},
{name:"Lucky Marlen", age:19, interests:"Ozean", dept:"Spionage"},
{name:"Bate Becker", age:20, interests:"Fußball", dept:"Security"},
{name:"Nino Schäfer", age:29, interests:"Kühe", dept:"Security"},
{name:"Johann arrestar", age:22, interests:"Zocken", dept:"Unklar"},
{name:"Thammi Berg", age:24, interests:"Polizei", dept:"Unklar"},
{name:"Max Schreiber", age:24, interests:"Trompete", dept:"Security"},
{name:"Xam Schradin", age:21, interests:"Feuerwehr", dept:"Spionage"}

];

let selectedAgent = null;
const agentsDiv = document.getElementById("agents");

agentsData.forEach((agent) => {
    const div = document.createElement("div");
    div.className = "agent";
    div.innerHTML = `
        <b>${agent.name}</b><br>
        Alter: ${agent.age}<br>
        Interessen: ${agent.interests}<br>
        Abteilung: ${agent.dept}
    `;
    
    div.onclick = () => {
        document.querySelectorAll(".agent").forEach(a => a.classList.remove("selected"));
        div.classList.add("selected");
        selectedAgent = agent;
        document.getElementById("selectedAgent").innerText = "An: " + agent.name;
        document.getElementById("agentInput").value = agent.name;
        checkForm();
    };

    agentsDiv.appendChild(div);
});

const email = document.getElementById("email");
const price = document.getElementById("price");
const message = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

function validEmail(mail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

function checkForm() {
    if (
        selectedAgent &&
        validEmail(email.value) &&
        price.value > 0 &&
        message.value.length > 5
    ) {
        sendBtn.disabled = false;
    } else {
        sendBtn.disabled = true;
    }
}

email.oninput = checkForm;
price.oninput = checkForm;
message.oninput = checkForm;

document.getElementById("form").onsubmit = (e) => {
    if (!validEmail(email.value) || !selectedAgent || price.value <= 0) {
        e.preventDefault();
        alert("Formular nicht korrekt ausgefüllt!");
    }
};
