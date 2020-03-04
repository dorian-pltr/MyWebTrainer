document.addEventListener("DOMContentLoaded", function (event) { //on attend que le DOM soit chargé pour exécuter notre script
    let lieuEntrainement = document.getElementById("lieuEntrainement");
    let choixMateriel = document.getElementById("choixMateriel");
    var materiel = "vide";

    let frequenceEntrainement = document.getElementById("frequenceEntrainement");
    let choixFrequence = document.getElementById("choixFrequence");
    var frequence = "vide";

    let section = document.getElementById("section");

    /*function monProgramme(materiel, frequence) {   fonction a implanter
        console.log(materiel, frequence);
    }*/

    lieuEntrainement.addEventListener('input', function (event) {
        materiel = event.target.value;
        switch (materiel) {
            case "vide":
                console.log(materiel);
                choixMateriel.innerHTML = "<p>Veuillez choisir votre matériel d'entrainement.<p>";
                choixMateriel.style.color = "orange";
                break;
            case "maison":
                console.log(materiel);
                choixMateriel.innerHTML = "<p>Vous avez choisi de vous entrainer sans matériel.<p>";
                choixMateriel.style.color = "black";
                break;
            case "street":
                console.log(materiel);
                choixMateriel.innerHTML = "<p>Vous avez choisi de vous sur une installation publique.<p>";
                choixMateriel.style.color = "black";
                break;
            case "salle":
                console.log(materiel);
                choixMateriel.innerHTML = "<p>Vous avez choisi de vous entrainer dans une salle de sport.<p>";
                choixMateriel.style.color = "black";
                break;
        }
    });

    frequenceEntrainement.addEventListener('input', function (event) {
        frequence = event.target.value;
        switch (frequence) {
            case "vide":
                console.log(frequence);
                choixFrequence.innerHTML = "<p>Veuillez choisir votre fréquence d'entrainement pour passer à la suite.<p>";
                choixFrequence.style.color = "orange";
                break;
            case "1a3":
                console.log(frequence);
                choixFrequence.innerHTML = "<p>Vous avez choisi de vous entrainer 1 à 3 fois par semaine.<p>";
                choixFrequence.style.color = "black";
                break;
            case "3a5":
                console.log(frequence);
                choixFrequence.innerHTML = "<p>Vous avez choisi de vous entrainer 3 à 5 fois par semaine.<p>";
                choixFrequence.style.color = "black";
                break;
            case "plus5":
                console.log(frequence);
                choixFrequence.innerHTML = "<p>Vous avez choisi de vous entrainer plus de 5 fois par semaine.<p>";
                choixFrequence.style.color = "black";
                break;
        }
    });

});
