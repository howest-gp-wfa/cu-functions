'use strict';

window.addEventListener("load", initialize);

//anonieme functie
//window.addEventListener("load", function () { alert("HTML ingeladen!"); });

function initialize() {

  const button = document.getElementById("example");

  button.addEventListener("click", function () {
    alert("Ik ben helemaal geheim!");
  });




  // ############################################
  // functies die geen resultaat terugkrijgen
  // ############################################

  //aanroepen van een function
  doeIets();

  //meermaals aanroepen van een function
  for (let i = 0; i < 10; i++) {
    doeIets();
  }

  //argumenten doorgeven aan een functie
  for (let i = 0; i < 10; i++) {
    doeNogIets(`Aanroep ${i}`);
  }

  oppervlak(5, 3);
  oppervlak('test', 2);
  oppervlak(5);

  // ############################################
  // functies die wel een resultaat terugkrijgen
  // ############################################
  
  //retour van een enkel resultaat
  const getal = Trippel(3);
  console.log(getal);
  
  const getal2 = Trippel("hallo!");
  console.warn(getal2);
  
  //retour van meerdere resultaten (als object)
  const berekendeoppervlakte = oppervlak2(2, 3);
  if (!berekendeoppervlakte.foutingave)
  console.log(`Berekende oppervlakte is ${berekendeoppervlakte.vlakte}`);
  else
  console.warn('Foutief gebruik van functie oppervlak(h,b)');
  
  // ############################################
  // functies als variabelen
  // ############################################


  // variabele als functie
  const functieAlsVariabele = function(iets) {
    console.log(iets);
  } 
  functieAlsVariabele("Functie als variabele werkt!");

  // ############################################
  // arrow functions
  // ############################################
  
  //met arugumenten ('a' ~ 2):
  const double = a => a * 2;

  const verdubbel = a => (a *2);
  console.log(verdubbel(8));

  //zonder argumenten:
  const ConsoleZin = () => {
    console.log('Een zin in de console'); 
    console.log('Een 2de zin');
  };
  ConsoleZin();

}

// paramaterloze functie
function doeIets() {
  console.info("Er is iets gebeurd!");
}

//functie met een parameter
function doeNogIets(zin) {
  console.info(zin);
}

//functie met meerdere parameters.
//mbv. de arguments property wordt gecheckt of alle parameters meegegeven werden
function oppervlak(hoogte, breedte) {
  if (arguments.length == 2) {

    if (!isNaN(hoogte) && !isNaN(breedte))
      console.log(`De oppervlakte is ${hoogte} * ${breedte} = ${hoogte * breedte}`);

    else
      console.warn('Functie oppervlak(h,b) werkt enkel met getallen');

  }

  else
    console.warn("Functie oppervlak(h,b) verkeerd gebruikt, er dienen 2 parameters te worden meegegeven met deze functie");

}

function oppervlak2(hoogte, breedte) {
  let oppervlak = 0;
  let fout = true;
  if ((arguments.length != 2) || (isNaN(hoogte) || (isNaN(breedte)))) {
    fout = true;
  }
  else {
    fout = false;
    oppervlak = hoogte * breedte;
  }

  // Resultaatobject meegeven
  return {
    'vlakte': oppervlak,
    'foutingave': fout
  };
}

//waarde retourneren
function Trippel(getal) {
  if (!isNaN(getal)) return 3 * getal;
  else return 'Foutief gebruik, getal ingeven!';
}