/*
Riquet Tommy
Meere Rémi
Mosbah Chiheb-Eddine
Cyrille Pénin
*/

let vie = 5;
let mot = [];
let hiddenMot = [];
let choix = "a";
let fini = false;
let okMot = false ;
let okChoix = false;
let vieMessage ="";

//demande à l'utilisateur d'entrer une chaine jusqu'a ce qu'il le fait
while(okMot===false) {
	mot = prompt("Quelle est le mot que vous voulez faire deviner ?");
	if( mot !== ""  &&mot !== undefined && typeof(mot)== "string"){
	    okMot = true;
    }else
    {
        console.log("Erreur");
    }
}

//Création du mot caché
for(let j=0 ;j<mot.length;j++){
    hiddenMot[j] = '_';
}

//Jeu
while(choix!=="fin" || fini === true ){

    vieMessage ="";
    //affichage des vies
    for(let l=0;l<vie;l++){
        vieMessage += "♡ ";
    }
    console.log(vieMessage);

    okChoix=false;

    while(okChoix === false){
        choix = prompt("Quelle est votre choix ?");
    if(choix === "fin"){
            break;}
    else if(choix.length>1){
            console.log("Erreur, veuillez entrer qu'une seule lettre");
        }
    else {
            okChoix = true;
        }
    }

    console.clear();

  TestVariable(choix);

  console.log(hiddenMot);

  if(hiddenMot.join('')===mot) {
      Victoire();
      break;
  }
  if(vie === 0)
  {
      Defaite();
      break ;
  }

}

//Test , si le choix est une lettre du mot
function TestVariable(choix) {
    let compt = 0;
    let lettreTrouve = false;

    for (let i = 0; i < mot.length; i++) {

        if (choix === mot[i]) {
            compt++;
            lettreTrouve = true;
            hiddenMot[i] = mot[i];
        }
    }

    if (lettreTrouve === false) {
        vie--;
    } else {
        if (compt > 1) {
            console.log("Vous avez trouvé " + compt + " lettres");
        } else {
            console.log("Vous avez trouvé " + compt + " lettre");
        }
    }
}
//Victoire
function Victoire(){
    console.log("Vous avez gagné , le mot était "+ mot);
    fini = true ;
}

//Defaite
function Defaite(){
    console.log("Vous avez perdu , le mot était "+ mot);
    fini = true;
}