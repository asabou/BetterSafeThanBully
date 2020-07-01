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

function openConversations() {
	//let xhr = new XMLHttpRequest();
	//xhr.open('GET', 'https://better-safe-than-bully.herokuapp.com/api/child/login/alexandru.sabou');
	//xhr.open('GET', 'http://localhost:8080/api/child/login/alexandru.sabou')
	//xhr.setRequestHeader("Access-Control-Allow-Origin","GET");
	//xhr.send();
	//console.log(xhr.response);
	//window.open("/conversation/conversation.html", "_self","", true);
	fetch('https://better-safe-than-bully.herokuapp.com/api/child/login/alexandru.sabou', {
		method: 'GET',
		mode: 'no-cors',
		headers: {
			'Access-Control-Allow-Origin' : 'GET,POST,PUT,DELETE'
		}
	})
		// .then(response=>response.json())
		.then(json => {
			console.log(json);
		});
}

function makeRequest(url, method, body, headers) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://better-safe-than-bully.herokuapp.com/api/child/login/alexandru.sabou');
	let response = xhr.send();
}
