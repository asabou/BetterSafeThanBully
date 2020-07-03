function openLoginPage() {
    window.open("./login/login.html", "_self", "", true);
}

function displayDivLogProf() {
    document.getElementById("divLogProf").style.visibility="visible";
    document.getElementById("divLogChild").style.visibility= "hidden";
    document.getElementById("divLogParent").style.visibility= "hidden";
}

function displayDivLogChild() {
    document.getElementById("divLogProf").style.visibility= "hidden";
    document.getElementById("divLogChild").style.visibility="visible";
    document.getElementById("divLogParent").style.visibility= "hidden";
}

function displayDivLogParent() {
    document.getElementById("divLogProf").style.visibility= "hidden";
    document.getElementById("divLogChild").style.visibility= "hidden";
    document.getElementById("divLogParent").style.visibility="visible";
}

function loginRequest(url, password) {
    fetch(url, {
        method: 'GET',
        headers: {
            'Access-Cotrol-Allow-Origin' : '*',
            'Content-type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                alert("Credentiale invalide!");
                return Promise.reject("not found");
            }
        })
        .then(data => {
            if (data.password === password) {
                USERNAME = data.username;
                window.open("../conversation/conversation.html", "_self","", true);
            } else {
                alert("Credentiale invalide!");
            }
        });
}

const BASE_URL = "https://better-safe-than-bully.herokuapp.com/api";
let USERNAME = "";

function openChildConversations() {
    let username = document.getElementById("usernameChild").value;
    let password = document.getElementById("passwordChild").value;
    loginRequest(BASE_URL+"/child/login/"+username, password);
}

function openParentConversations() {
    let username = document.getElementById("usernameParent").value;
    let password = document.getElementById("passwordParent").value;
    loginRequest(BASE_URL+"/parent/login/"+username, password);
}

function openPsychologistConversations() {
    let username = document.getElementById("usernamePsychologist").value;
    let password = document.getElementById("passwordPsychologist").value;
    loginRequest(BASE_URL+"/psychologist/login/"+username, password);
}