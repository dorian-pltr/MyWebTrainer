document.addEventListener("DOMContentLoaded", function (event) {
  // on attend que le DOM soit chargé pour exécuter notre script sinon erreur

  let materielEntrainement = document.getElementById("materielEntrainement");
  let choixMateriel = document.getElementById("choixMateriel");
  let materiel = "vide";

  let frequenceEntrainement = document.getElementById("frequenceEntrainement");
  let choixFrequence = document.getElementById("choixFrequence");
  let frequence = "vide";

  let section = document.getElementById("section");
  let article2Cree = 0;

  materielEntrainement.addEventListener("change", function (event) {
    // choix du materiel d'entrainement
    materiel = event.target.value;
    switch (materiel) {
      case "vide":
        choixMateriel.innerHTML =
          "<p>Veuillez choisir votre matériel d'entrainement.<p>";
        choixMateriel.style.fontStyle = "italic";
        articleFormatProgramme(materiel, frequence);
        break;
      case "sansMateriel":
        choixMateriel.innerHTML =
          "<p>Vous avez choisi de vous entrainer sans matériel.<p>";
        choixMateriel.style.fontStyle = "normal";
        articleFormatProgramme(materiel, frequence);
        break;
      case "exterieur":
        choixMateriel.innerHTML =
          "<p>Vous avez choisi de vous entrainer sur une installation sportive extérieure.<p>";
        choixMateriel.style.fontStyle = "normal";
        articleFormatProgramme(materiel, frequence);
        break;
      case "salle":
        choixMateriel.innerHTML =
          "<p>Vous avez choisi de vous entrainer dans une salle de sport.<p>";
        choixMateriel.style.fontStyle = "normal";
        articleFormatProgramme(materiel, frequence);
        break;
    }
  });

  frequenceEntrainement.addEventListener("change", function (event) {
    // choix de la fréquence d'entrainement
    frequence = event.target.value;
    switch (frequence) {
      case "vide":
        choixFrequence.innerHTML =
          "<p>Veuillez choisir votre fréquence d'entrainement pour passer à la suite.<p>";
        choixFrequence.style.fontStyle = "italic";
        articleFormatProgramme(materiel, frequence);
        break;
      case "1a3":
        choixFrequence.innerHTML =
          "<p>Vous avez choisi de vous entrainer 1 à 3 fois par semaine.<p>";
        choixFrequence.style.fontStyle = "normal";
        articleFormatProgramme(materiel, frequence);
        break;
      case "4a5":
        choixFrequence.innerHTML =
          "<p>Vous avez choisi de vous entrainer 4 à 5 fois par semaine.<p>";
        choixFrequence.style.fontStyle = "normal";
        articleFormatProgramme(materiel, frequence);
        break;
      case "plus5":
        choixFrequence.innerHTML =
          "<p>Vous avez choisi de vous entrainer plus de 5 fois par semaine.<p>";
        choixFrequence.style.fontStyle = "normal";
        articleFormatProgramme(materiel, frequence);
        break;
    }
  });

  function articleFormatProgramme(materiel, frequence) {
    // créer un nouvel article ou le modifie en fonction du choix du matériel & fréquence d'entrainement
    if (materiel != "vide" && frequence != "vide") {
      // création de l'article si choix materiel et programme
      if (article2Cree == 0) {
        article2Cree = 1;
        let article2 = document.createElement("article");
        article2.id = "article2";
        section.appendChild(article2);
        formatProgramme(materiel, frequence);
      } else if (article2Cree == 1) {
        // en cas de changement du matériel ou fréquence suppression du contenu article
        article2Cree = 0;
        section.removeChild(article2);
        articleFormatProgramme(materiel, frequence);
      }
    }
    if ((materiel == "vide" || frequence == "vide") & (article2Cree == 1)) {
      // si  matériel ou fréquence déséléctionné suppression article
      article2Cree = 0;
      section.removeChild(article2);
    }
  }

  function formatProgramme(materiel, frequence) {
    //
    let article2 = document.getElementById("article2");
    let formatsProgramme = {
      fullbody:
        '<div><input type="radio" id="fullbody" name="format" value="fullbody"> <label for="fullbody">Fullbody, j\'entraine tout mon corps à chaque séance.</label></div>',
      halfbody:
        '<div><input type="radio" id="halfbody" name="format" value="halfbody"> <label for="halfbody">Halfbody, je dédié une séance au haut du corps, l\'autre au bas du corps.</label></div>',
      ppl:
        '<div><input type="radio" id="ppl" name="format" value="ppl"> <label for="ppl">PPL, je divise mon entrainement du haut en deux séances et je garde une séance pour le bas du corps.</label></div>',
      split:
        '<div><input type="radio" id="split" name="format" value="split"> <label for="split">Split, je dédie une séance à chaque groupe musculaire.</label></div>',
    };

    article2.innerHTML = "<h4>Choix de mon format d'entrainement</h4>";

    if (materiel == "salle") {
      if (frequence == "1a3") {
        article2.innerHTML +=
          "<p>En vous entrainant 1 à 3 fois par semaine dans une salle de sport, vous avez le choix entre plusieurs formats d'entrainement:</p>" +
          formatsProgramme.fullbody +
          formatsProgramme.halfbody +
          formatsProgramme.ppl;
      } else if (frequence == "4a5") {
        article2.innerHTML +=
          "<p>En vous entrainant 4 à 5 fois par semaine dans une salle de sport, vous avez le choix entre plusieurs formats d'entrainement:</p>" +
          formatsProgramme.halfbody +
          formatsProgramme.ppl +
          formatsProgramme.split;
      } else if (frequence == "plus5") {
        article2.innerHTML +=
          "<p>En vous entrainant plus de 5 fois par semaine dans une salle de sport, vous avez le choix entre plusieurs formats d'entrainement:</p>" +
          formatsProgramme.ppl +
          formatsProgramme.split;
      }
    } else {
      article2.innerHTML =
        "<p>A développer " + materiel + " " + frequence + "</p>";
    }
  }
});
