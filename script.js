let div = document.querySelector("#greeting");
function showGreeting() {
	document.getElementById("greeting").innerHTML += "Привет привет<br>";
	setTimeout(showGreeting, 2000);
}

showGreeting();
