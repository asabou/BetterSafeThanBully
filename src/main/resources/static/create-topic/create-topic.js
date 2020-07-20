const BASE_URL = "https://better-safe-than-bully.herokuapp.com/api";
//const BASE_URL = "http://localhost:8080/api";

function generateTables() {
    generateChildsProfileTable();
    generateParentsProfileTable();
    generatePsychologistsProfileTable();
}

function generatePsychologistsProfileTable() {
    const url = BASE_URL + "/psychologist/all";
    fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        }
    })
        .then(data => data.json())
        .then(data => {
            let table = document.getElementById("profilesPsychologists");
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }
            data.forEach(row => {
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                td1.textContent = row.firstName + " " + row.lastName;
                tr.appendChild(td1);
                tr.onclick = function() {
                    localStorage.setItem("usernameForTopic", row.username);
                    document.getElementById("personTopic").value = row.firstName + " " + row.lastName;
                }
                table.appendChild(tr);
            });
        });
}

function generateParentsProfileTable() {
    const url = BASE_URL + "/parent/all";
    fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        }
    })
        .then(data => data.json())
        .then(data => {
            let table = document.getElementById("profilesParents");
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }
            data.forEach(row => {
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                td1.textContent = row.firstName + " " + row.lastName;
                tr.appendChild(td1);
                tr.onclick = function() {
                    localStorage.setItem("usernameForTopic", row.username);
                    document.getElementById("personTopic").value = row.firstName + " " + row.lastName;
                }
                table.appendChild(tr);
            });
        });
}

function generateChildsProfileTable() {
    const url = BASE_URL + "/child/all";
    fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        }
    })
        .then(data => data.json())
        .then(data => {
            let table = document.getElementById("profilesChilds");
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }
            data.forEach(row => {
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                td1.textContent = row.firstName + " " + row.lastName;
                td2.textContent = row.origin;
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.onclick = function() {
                    localStorage.setItem("usernameForTopic", row.username);
                    document.getElementById("personTopic").value = row.firstName + " " + row.lastName;
                }
                table.appendChild(tr);
            });
        });
}

function validateConversationForm() {
    let stringError = "";
    if (document.getElementById("personTopic").value === "") {
        stringError += "Alege o persoana!\n";
    }
    if (document.getElementById("title").value === "") {
        stringError += "Completeaza un topic!\n";
    }
    if (document.getElementById("message").value === "" || document.getElementById("message").value === "Introduceti mesajul") {
        stringError += "Scrie un mesaj!\n";
    }
    return stringError;
}

function addTopicRequest() {
    let body = {};
    body["title"] = document.getElementById("title").value;
    body["username"] = localStorage.getItem("usernameFromLogin");
    const url = BASE_URL + "/topic/create";
    fetch(url,{
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
    });
}

function getTopicByTitle(title) {
    title = title.replace(/" "/g, "$$");
    const url = BASE_URL + "/topic/get-by-title/" + title;
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
            }
        })
        .then(data => {
            console.log(data);
        });
}

function addMessageRequest() {
    let body = {};
    body["usernameSender"] = localStorage.getItem("usernameFromLogin");
    body["usernameReceiver"] = localStorage.getItem("usernameForTopic");
    body["content"] = document.getElementById("message").value;
    body["topic"] = {
        "title": document.getElementById("title").value,
        "username": localStorage.getItem("usernameFromLogin")
    };
    const url = BASE_URL + "/message/send";
    fetch(url,{
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(data => {});
}

function validateTopicForm() {
    let stringError = "";
    if (document.getElementById("personTopic").value === "") {
        stringError += "Alege o persoana!\n";
    }
    if (document.getElementById("title").value === "") {
        stringError += "Completeaza un topic!\n";
    }
    if (document.getElementById("message").value === "" || document.getElementById("message").value === "Introduceti mesajul") {
        stringError += "Scrie un mesaj!\n";
    }
    return stringError;
}

function addTopicWithMessageRequest() {
    let bodyMessage = {};
    let bodyTopic = {};
    bodyTopic["title"] = document.getElementById("title").value;
    bodyTopic["username"] = localStorage.getItem("usernameFromLogin");
    bodyMessage["usernameSender"] = localStorage.getItem("usernameFromLogin");
    bodyMessage["usernameReceiver"] = localStorage.getItem("usernameForTopic");
    bodyMessage["content"] = document.getElementById("message").value;
    bodyMessage["topic"] = bodyTopic;

    const urlMessage = BASE_URL + "/message/create-and-send";
    fetch(urlMessage, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(bodyMessage)
    })
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                return Promise.reject("message save failed");
            }
        });
    
}

function createTopic() {
    let stringError = validateTopicForm();
    if (stringError !== "") {
        alert(stringError);
    } else {
        addTopicWithMessageRequest();
        moveToTopicPage();
    }
}

function moveToTopicPage() {
    window.open("../topic/topic.html", "_self", "", true);
    window.reload();
}

function introductionMessage() {
    let a = document.getElementById("message");
    a.innerHTML = "";
}