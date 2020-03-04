document.addEventListener("DOMContentLoaded", function (event) { //on attend que le DOM soit chargé pour exécuter notre script
    var elt = document.getElementsByClassName("navigation");
    elt[0].style.color = "black";
    elt[1].style.color = "black";
    for (var i = 2; i < elt.length; i++) {
        elt[i].style.color = "orangered";
    }
});