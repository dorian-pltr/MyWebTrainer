document.addEventListener("DOMContentLoaded", function (event) { //on attend que le DOM soit chargé pour exécuter notre script

    //colorer les raccourcis de navigation
    var navigation = document.getElementsByClassName("navigation");
    for (var i = 0; i < 5; i++) {
        navigation[i].style.color = "black";
    }
    for (var i = 5; i < navigation.length; i++) {
        navigation[i].style.color = "orangered";
    }

});