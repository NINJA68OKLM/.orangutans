// Script pour le mode sombre :
var a = document.querySelectorAll("a");
document.querySelector(".a.invisible>.flex3.flexcenter").style.stroke="black";
// Déroulement du menu portable et tablette :
document.querySelector(".absolute").addEventListener("click", deroul);
function deroul(){
    document.querySelector(".a").classList.toggle("invisible");
}
// Nuit portable et tablette :
document.querySelector(".a>.flex3.flexcenter").children[0].addEventListener("click", sombree);
function sombree(){
    document.querySelector(".a>.flex3.flexcenter").children[0].classList.add("invisible");
    document.querySelector(".a>.flex3.flexcenter").children[1].classList.remove("invisible");
    document.querySelector(".a>.flex3.flexcenter").children[1].style.display= "initial";
    document.querySelector(".a>.flex3.flexcenter").children[0].style.stroke= "white";
    document.querySelector("body").classList.add("sombre");
    document.querySelector("header").classList.add("sombre2");
    a.forEach(e => {
        e.style.color= "white";
    });
    document.querySelector(".a").children[0].classList.add("invisible");
    document.querySelector(".a").children[7].style.stroke="white";
    document.querySelector(".absolute").style.stroke="white";
    document.querySelector(".flex1.flex2>.flexcenter").innerHTML= "<img src='img/Logo_light_mb.png'>";
}
// Nuit PC :
document.querySelector(".a").children[0].addEventListener("click", sombre);
function sombre(){
    document.querySelector("body").classList.add("sombre");
    document.querySelector("header").classList.add("sombre2");
    a.forEach(e => {
        e.style.color= "white";
    });
    document.querySelector(".a").children[1].classList.remove("invisible");
    document.querySelector(".a").children[0].classList.add("invisible");
    document.querySelector(".a").children[7].style.stroke="white";
    document.querySelector(".a").children[1].style.display= "initial";
    document.querySelector(".flex1.flex2>.flexcenter").innerHTML= "<img src='img/Logo_light_pc.png'>";
    document.querySelector(".fixed").style.border= "3px solid white";
    document.querySelector(".fixed").style.background= "black";
    document.querySelector(".fixed>a>svg").style.stroke= "white";
}
// Jour pc :
document.querySelector(".a").children[1].addEventListener("click", clair);
function clair(){
    document.querySelector("body").classList.remove("sombre");
    document.querySelector("header").classList.remove("sombre2");
    a.forEach(e => {
        e.style.color= "black";
    });
    document.querySelector(".a").children[0].classList.remove("invisible");
    document.querySelector(".a").children[1].classList.add("invisible");
    document.querySelector(".a").children[1].style.display= "none";
    document.querySelector(".a").children[7].style.stroke="black";
    document.querySelector(".flex1.flex2>.flexcenter").innerHTML= "<img src='img/Logo_dark_pc.png'>";
    document.querySelector(".fixed").style.border= "3px solid black";
    document.querySelector(".fixed").style.background= "white";
    document.querySelector(".fixed>a>svg").style.stroke= "black";
}
// Jour portable et tablette :
document.querySelector(".a>.flex3.flexcenter").children[1].addEventListener("click", claire);
function claire(){
    document.querySelector(".a>.flex3.flexcenter").children[0].classList.remove("invisible");
    document.querySelector(".a>.flex3.flexcenter").children[1].classList.add("invisible");
    document.querySelector(".a>.flex3.flexcenter").children[1].style.display= "none";
    document.querySelector(".a>.flex3.flexcenter").children[0].style.stroke= "black";
    document.querySelector("body").classList.remove("sombre");
    document.querySelector("header").classList.remove("sombre2");
    a.forEach(e => {
        e.style.color= "black";
    });
    document.querySelector(".a").children[0].classList.remove("invisible");
    document.querySelector(".a").children[1].classList.add("invisible");
    document.querySelector(".a").children[7].style.stroke="black";
    document.querySelector(".absolute").style.stroke="black";
    document.querySelector(".flex1.flex2>.flexcenter").innerHTML= "<img src='img/Logo_dark_mb.png'>";
}

// Script pour la barre de recherche :
document.querySelector(".a.invisible").children[7].addEventListener("click", search);
function search(){
    document.querySelector("input").classList.toggle("invisible");
}

// Script pour les fltres photos :
var photo = document.querySelectorAll(".photofiltre>img");
photo.forEach(e => {
    // Lorsque la souris survole le filtre est enlevé :
    e.addEventListener("mouseover", defiltre);
    function defiltre(){
        this.parentNode.classList.remove("photofiltre")
    }
    // Lorsque la souris survole le filtre est ajouté :
    e.addEventListener("mouseout", filtre);
    function filtre(){
        this.parentNode.classList.add("photofiltre")
    }
});

// Script pour le scroll :

var scroll = document.querySelectorAll(".fixed, .fixed>a, .fixed>a>svg");
var fleche = document.querySelector(".fixed>a>svg");
document.querySelector("#qui-sommes-nous").addEventListener("mouseenter", scroll);
function scroll(){
    scroll.forEach(e => {
        if (document.querySelector(".fixed").style.width= "40px")
        {
            e.style.display= "initial";
        }
    });
}

// Script pour le bas de page :

document.querySelector(".flexcenter.bds").style.background= "black";
document.querySelector(".flexcenter.bds").style.color= "white";