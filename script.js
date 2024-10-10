let div = document.querySelector("#greeting");
function showGreeting() {
	document.getElementById("greeting").innerHTML += "Привет<br>";
	setTimeout(showGreeting, 2000);
}

showGreeting();
