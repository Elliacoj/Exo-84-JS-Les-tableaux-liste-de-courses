// Inutile de modifier le code suivant
let articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :

let liste = document.getElementById("listeCourse");
let input = document.createElement("input");
let envoie = document.createElement("button");
let recap = document.createElement("div");

envoie.innerHTML = "Nouveau";
recap.innerHTML = articles;

document.body.append(input);
document.body.append(envoie);
document.body.append(recap)

for(let x = 0; x < articles.length; x++) {
    let li = document.createElement("li");
    let lien = document.createElement("a");
    let texte = document.createElement("p");
    texte.innerHTML = articles[x];
    lien.innerHTML = " Masquer ";
    lien.className = "button";
    texte.style.display = "inline";
    liste.append(li);
    li.append(texte);
    li.append(lien);
}
let masquer = document.getElementsByClassName("button");
let element = document.getElementsByTagName("li");

for(let z = 0; z < articles.length; z++) {
    masquer[z].addEventListener("click", function () {

        if(element[z].getElementsByTagName("p")[0].style.opacity !== "0" ) {
            element[z].getElementsByTagName("p")[0].style.opacity = "0";
            console.log(masquer[z]);
        }
        else {
            element[z].getElementsByTagName("p")[0].style.opacity = "1";
        }
    });
}

envoie.addEventListener("click", function () {
    let li = document.createElement("li");
    let lien = document.createElement("a");
    let texte = document.createElement("p");
    texte.innerHTML = input.value;
    lien.innerHTML = " Masquer";
    texte.style.display = "inline";
    liste.append(li);
    li.append(texte);
    li.append(lien);
    articles.push(texte.innerHTML);
    lien.className = "buttons";
    console.log(articles.length);
    recap.innerHTML = articles;
    li.className = "li";

    let buttons = document.getElementsByClassName("buttons");
    let elements = document.getElementsByClassName("li");
    for(let y = 0; y < articles.length; y++) {
        buttons[y].addEventListener("click", function () {

            if(elements[y].getElementsByTagName("p")[0].style.opacity !== "0" ) {
                elements[y].getElementsByTagName("p")[0].style.opacity = "0";
                console.log(masquer[y]);
            }
            else {
                elements[y].getElementsByTagName("p")[0].style.opacity = "1";
            }
        });
    }
});