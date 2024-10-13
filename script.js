let div = document.querySelector("#greeting");
function showGreeting() {
	document.getElementById("greeting").innerHTML += "Привет222 привет<br>";
	setTimeout(showGreeting, 2000);
}

showGreeting();
//slepok old
function logconsole() {
	console.log("12345678910");
}
