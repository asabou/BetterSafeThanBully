const BASE_URL = "https://better-safe-than-bully.herokuapp.com/api";
//const BASE_URL = "http://localhost:8080/api"

function openTopicsPage() {
    getTopicsForUser(localStorage.getItem("usernameFromLogin"));
    document.getElementById("divForm").style.visibility = "hidden";
}

function getTopicsForUser(username) {
    const url = BASE_URL + "/topic/get-by-username/" + username;
    fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        }
    })
        .then(data => data.json())
        .then(data => {
            let table = document.getElementById("topics");
            data.forEach(row => {
                const topicTitle = row.title;
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.textContent = topicTitle;
                tr.appendChild(td);
                tr.onclick = function() {
                    getMessages(this);
                }
                tr.id = topicTitle;
                table.appendChild(tr);
            });
        });
}

function getMessages(x) {
    let title = x.textContent;
    localStorage.setItem("selectedTopicTitle", title);
    title = title.replace(/" "/g, "$$");
    const url = BASE_URL + "/message/get-by-topic-title/" + title;
    fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        }
    })
        .then(data => data.json())
        .then(data => {
            document.getElementById("divForm").style.visibility = "visible";
            let table = document.getElementById("messages");
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }
            let i = 0;
            data.forEach(row => {
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                //getFullNameForSender(row.usernameSender);
                //td.textContent = localStorage.getItem("fullNameForSender") + " : " + row.content + "\n";
                td.textContent = row.usernameSender + " : " + row.content + "\n";
                if (i === 0) {
                    localStorage.setItem("usernameFromTopic", row.usernameReceiver);
                }
                i++;
                tr.appendChild(td);
                table.appendChild(tr);
            });
        });
}

function getFullNameForSender(sender) {
    const url = BASE_URL + "/message/get-full-name-for-sender/" + sender;
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
                alert("get full name");
            }
        })
        .then(data => {
            console.log(data);
            localStorage.setItem("fullNameForSender", data.firstName + " " + data.lastName);
        });
}

function typeMessage() {
    let a = document.getElementById("message");
    a.innerHTML = "";
}

function openCreateTopicPage() {
    window.open("../create-topic/create-topic.html", "_self", "", true);
}

function sendMessageRequest() {
    const url = BASE_URL + "/message/send";
    let bodyMessage = {};
    let bodyTopic = {};
    bodyTopic["title"] = localStorage.getItem("selectedTopicTitle");
    bodyTopic["username"] = localStorage.getItem("usernameFromLogin");
    bodyMessage["usernameSender"] = localStorage.getItem("usernameFromLogin");
    bodyMessage["usernameReceiver"] = localStorage.getItem("usernameFromTopic");
    bodyMessage["content"] = document.getElementById("message").value;
    bodyMessage["topic"] = bodyTopic;

    const urlMessage = BASE_URL + "/message/send";
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

function sendMessage() {
    sendMessageRequest();
    let a = document.getElementById("message");
    a.value = " Introduceti un nou mesaj ";
    window.reload();
}