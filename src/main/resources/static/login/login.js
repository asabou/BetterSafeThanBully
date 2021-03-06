const BASE_URL = "https://better-safe-than-bully.herokuapp.com/api";
//const BASE_URL = "http://localhost:8080/api"

function displayDivLogProf() {
    document.getElementById("divLogProf").style.visibility = "visible";
    document.getElementById("divLogChild").style.visibility = "hidden";
    document.getElementById("divLogParent").style.visibility = "hidden";
    document.getElementById("registrationChildDiv").style.visibility = "hidden";
    document.getElementById("registrationParentDiv").style.visibility = "hidden";
}

function displayDivLogChild() {
    document.getElementById("divLogProf").style.visibility = "hidden";
    document.getElementById("divLogChild").style.visibility = "visible";
    document.getElementById("divLogParent").style.visibility = "hidden";
    document.getElementById("registrationProfDiv").style.visibility = "hidden";
    document.getElementById("registrationParentDiv").style.visibility = "hidden";
}

function displayDivLogParent() {
    document.getElementById("divLogProf").style.visibility = "hidden";
    document.getElementById("divLogChild").style.visibility = "hidden";
    document.getElementById("divLogParent").style.visibility = "visible";
    document.getElementById("registrationProfDiv").style.visibility = "hidden";
    document.getElementById("registrationChildDiv").style.visibility = "hidden";
}

function displayDivRegistrationProf() {
    document.getElementById("registrationProfDiv").style.visibility = "visible";
    document.getElementById("registrationChildDiv").style.visibility = "hidden";
    document.getElementById("registrationParentDiv").style.visibility = "hidden";
}

function displayDivRegistrationChild() {
    document.getElementById("registrationProfDiv").style.visibility = "hidden";
    document.getElementById("registrationChildDiv").style.visibility = "visible";
    document.getElementById("registrationParentDiv").style.visibility = "hidden";
}

function displayDivRegistrationParent() {
    document.getElementById("registrationProfDiv").style.visibility = "hidden";
    document.getElementById("registrationChildDiv").style.visibility = "hidden";
    document.getElementById("registrationParentDiv").style.visibility = "visible";
}

function openParentTopics() {
    let username = document.getElementById("usernameParent").value;
    let password = document.getElementById("passwordParent").value;
    loginRequest(BASE_URL + "/parent/login/" + username, password);
}

function openPsychologistTopics() {
    let username = document.getElementById("usernamePsychologist").value;
    let password = document.getElementById("passwordPsychologist").value;
    loginRequest(BASE_URL + "/psychologist/login/" + username, password);
}

function openChildTopics() {
    let username = document.getElementById("usernameChild").value;
    let password = document.getElementById("passwordChild").value;
    loginRequest(BASE_URL + "/child/login/" + username, password);
}

function loginRequest(url, password) {
    fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
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
                let username = data.username;
                localStorage.setItem("usernameFromLogin", username);
                window.open("../topic/topic.html", "_self", "", true);
            } else {
                alert("Credentiale invalide!");
            }
        });
}

function registrationActionProf() {
    let url = BASE_URL + "/psychologist/save";
    let body = {}
    body["username"] = document.getElementById("usernamePsychologistCC").value;
    body["password"] = document.getElementById("passwordPsychologistCC").value;
    body["confirmPassword"] = document.getElementById("confirmPasswordPsychologistCC").value;
    body["firstName"] = document.getElementById("firstNamePsychologistCC").value;
    body["lastName"] = document.getElementById("lastNamePsychologistCC").value;
    if (validateRegistrationForm(body, "PSYCHOLOGIST")) {
        doRegistrationRequest(url, body);
        document.getElementById("registrationProfDiv").style.visibility = "hidden";
    }
}

function registrationActionChild() {
    let url = BASE_URL + "/child/save";
    let body = {}
    body["username"] = document.getElementById("usernameChildCC").value;
    body["password"] = document.getElementById("passwordChildCC").value;
    body["confirmPassword"] = document.getElementById("confirmPasswordChildCC").value;
    body["firstName"] = document.getElementById("firstNameChildCC").value;
    body["lastName"] = document.getElementById("lastNameChildCC").value;
    let e = document.getElementById("dropDownOrigin");
    body["origin"] = e.options[e.selectedIndex].text;
    body["birthday"] = document.getElementById("birthdayChildCC").value;
    if (validateRegistrationForm(body, "CHILD")) {
        doRegistrationRequest(url, body);
        document.getElementById("registrationChildDiv").style.visibility = "hidden";
    }
}

function registrationActionParent() {
    let url = BASE_URL + "/parent/save";
    let body = {}
    body["username"] = document.getElementById("usernameParentCC").value;
    body["password"] = document.getElementById("passwordParentCC").value;
    body["confirmPassword"] = document.getElementById("confirmPasswordParentCC").value;
    body["firstName"] = document.getElementById("firstNameParentCC").value;
    body["lastName"] = document.getElementById("lastNameParentCC").value;
    if (validateRegistrationForm(body, "PARENT")) {
        doRegistrationRequest(url, body);
        document.getElementById("registrationParentDiv").style.visibility = "hidden";
    }
}

function validateChild(body) {
    let alertMessage = "";
    if (body["username"] === "") {
        alertMessage += "Utilizator invalid!\n";
    }
    if (body["password"] === "") {
        alertMessage += "Parola invalida!\n";
    }
    if (body["confirmPassword"] === "") {
        alertMessage += "Confirmare parola invalida!\n";
    }
    if (body["confirmPassword"] !== body["password"]) {
        alertMessage += "Parolele nu se potrivesc!\n";
    }
    if (body["firstName"] === "") {
        alertMessage += "Prenume invalid!\n";
    }
    if (body["lastName"] === "") {
        alertMessage += "Nume invalid!\n";
    }
    if (body["origin"] === "") {
        alertMessage += "Origin invalid!\n";
    }
    if (body["birthday"] === "" || body["birthday"] === null) {
        alertMessage += "Zi de nastere invalida!\n";
    }
    if (alertMessage !== "") {
        alert(alertMessage);
        return false;
    }
    return true;
}

function validateParentOrPsychologist(body) {
    let alertMessage = "";
    if (body["username"] === "") {
        alertMessage += "Utilizator invalid!\n";
    }
    if (body["password"] === "") {
        alertMessage += "Parola invalida!\n";
    }
    if (body["confirmPassword"] === "") {
        alertMessage += "Confirmare parola invalida!\n";
    }
    if (body["confirmPassword"] !== body["password"]) {
        alertMessage += "Parolele nu se potrivesc!\n";
    }
    if (body["firstName"] === "") {
        alertMessage += "Prenume invalid!\n";
    }
    if (body["lastName"] === "") {
        alertMessage += "Nume invalid!\n";
    }
    if (alertMessage !== "") {
        alert(alertMessage);
        return false;
    }
    return true;
}

function validateRegistrationForm(body, personType) {
    if (personType === "CHILD") {
        return validateChild(body);
    }
    if (personType === "PARENT" || personType === "PSYCHOLOGIST") {
        return validateParentOrPsychologist(body);
    }
}

function doRegistrationRequest(url, body) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => {
            if (response.ok) {
                alert("Felicitari, inregistrarea dumneavoastra a fost incheiata cu succes! Va rugam sa va autentificati pentru a continua. ");
                return response.json();
            } else {
                alert("Userul deja exista!");
                return Promise.reject("invalid!");
            }
        });
}
