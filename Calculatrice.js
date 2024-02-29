class Calculatrice {
    constructor() {
        this.afficherEcran = document.querySelector("#afficher");
        this.buttonInput = document.querySelectorAll(".calcul-input");
    }

    // Retourne le résultat de la formule
    calculer(formule) {
        this.afficherEcran.innerHTML = eval(formule);
    }

    // Affiche les informations
    afficherCalcul() {
        for (let i = 0; i < this.buttonInput.length; ++i) {       
            this.buttonInput[i].addEventListener("click", () => {
                if (this.buttonInput[i].innerHTML === "Calculer") {
                    this.calculer(this.afficherEcran.innerHTML);
                }else{
                    this.afficherEcran.innerHTML += this.buttonInput[i].innerHTML;
                }
            });
        }
    }
}
const calculatrice = new Calculatrice;
calculatrice.afficherCalcul();