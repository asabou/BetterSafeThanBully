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
        .then(response => response.json())
        .then(response => {
            if (response.includes("not found")) {
                alert("Credentiale incorecte!");
            }   else {
                let user = response;
                if(password === user.password) {
                    USERNAME = user.username;
                    window.open("/conversation/conversation.html", "_self","", true);
                } else {
                    alert("Credentiale incorecte!");
                }
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

