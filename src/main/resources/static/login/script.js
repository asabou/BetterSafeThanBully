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
	window.open("/conversation/conversation.html", "_self","", true);
}

