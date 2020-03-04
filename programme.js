document.addEventListener("DOMContentLoaded", function (event) { //on attend que le DOM soit chargé pour exécuter notre script
    let lieuEntrainement = document.getElementById("lieuEntrainement");
    let choixMateriel = document.getElementById("choixMateriel");
    let materiel = "vide";

    let frequenceEntrainement = document.getElementById("frequenceEntrainement");
    let choixFrequence = document.getElementById("choixFrequence");
    let frequence = "vide";

    let section = document.getElementById("section");
    let article2Cree = 0;

    lieuEntrainement.addEventListener('input', function (event) {
        materiel = event.target.value;
        switch (materiel) {
            case "vide":
                choixMateriel.innerHTML = "<p>Veuillez choisir votre matériel d'entrainement.<p>";
                choixMateriel.style.color = "orange";
                monProgramme(materiel, frequence);
                break;
            case "sansMateriel":
                choixMateriel.innerHTML = "<p>Vous avez choisi de vous entrainer sans matériel.<p>";
                choixMateriel.style.color = "black";
                monProgramme(materiel, frequence);
                break;
            case "exterieur":
                choixMateriel.innerHTML = "<p>Vous avez choisi de vous sur une entrainer installation sportive extérieure.<p>";
                choixMateriel.style.color = "black";
                monProgramme(materiel, frequence);
                break;
            case "salle":
                choixMateriel.innerHTML = "<p>Vous avez choisi de vous entrainer dans une salle de sport.<p>";
                choixMateriel.style.color = "black";
                monProgramme(materiel, frequence);
                break;
        }
    });

    frequenceEntrainement.addEventListener('input', function (event) {
        frequence = event.target.value;
        switch (frequence) {
            case "vide":
                choixFrequence.innerHTML = "<p>Veuillez choisir votre fréquence d'entrainement pour passer à la suite.<p>";
                choixFrequence.style.color = "orange";
                monProgramme(materiel, frequence);
                break;
            case "1a3":
                choixFrequence.innerHTML = "<p>Vous avez choisi de vous entrainer 1 à 3 fois par semaine.<p>";
                choixFrequence.style.color = "black";
                monProgramme(materiel, frequence);
                break;
            case "3a5":
                choixFrequence.innerHTML = "<p>Vous avez choisi de vous entrainer 3 à 5 fois par semaine.<p>";
                choixFrequence.style.color = "black";
                monProgramme(materiel, frequence);
                break;
            case "plus5":
                choixFrequence.innerHTML = "<p>Vous avez choisi de vous entrainer plus de 5 fois par semaine.<p>";
                choixFrequence.style.color = "black";
                monProgramme(materiel, frequence);
                break;
        }
    });

    function monProgramme(materiel, frequence) {
        console.log(materiel, frequence);
        if (materiel != "vide" && frequence != "vide") {
            if (article2Cree == 0) {
                article2Cree = 1;
                let article2 = document.createElement("article");
                article2.id = "article2";
                section.appendChild(article2);
                article2.innerHTML = "<p id = article2Programme>En cours de développement " + materiel + " " + frequence + "</p>";
            } else if (article2Cree == 1) {
                console.log("suppression");
                article2Programme = document.getElementById("article2Programme");
                article2.removeChild(article2Programme);
                article2.innerHTML = "<p id = article2Programme>En cours de développement " + materiel + " " + frequence + "</p>";
            }
        }
        if (materiel == "vide" || frequence == "vide") {
            if (article2Cree == 0) {
                return;
            } else if (article2Cree == 1) {
                article2Cree = 0;
                section.removeChild(article2);
            }
        }
    }
});