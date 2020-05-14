document.addEventListener("DOMContentLoaded", () => {
	//on attend que le DOM soit chargé pour exécuter notre script

	//colorer les raccourcis de navigation
	var navigation = document.getElementsByClassName("navigation");
	for (let i = 0; i < 5; i++) {
		navigation[i].style.color = "black";
	}
	for (let i = 5; i < navigation.length; i++) {
		navigation[i].style.color = "rgb(255, 102, 0)";
		navigation[i].style.textShadow = "2px 2px 5px black";
	}
});
