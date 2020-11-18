"use strict";

window.addEventListener("load", Initieer);

//anonieme functie
//window.addEventListener("load", function () { alert("HTML ingeladen!"); });

function Initieer() {

  let button = document.getElementById("exampleButton");

  button.addEventListener("click", function () {
    alert("Ik ben helemaal geheim!");
  });




  // ############################################
  // functies die geen resultaat terugkrijgen
  // ############################################

  //aanroepen van een function
  DoeIets();

  //meermaals aanroepen van een function
  for (let i = 0; i < 10; i++) {
    DoeIets();
  }

  //argumenten doorgeven aan een functie
  for (let i = 0; i < 10; i++) {
    DoeNogIets(`Aanroep ${i}`);
  }

  Oppervlak(5, 3);
  Oppervlak('test', 2);
  Oppervlak(5);

  // ############################################
  // functies die wel een resultaat terugkrijgen
  // ############################################
  
  //retour van een enkel resultaat
  let getal = Trippel(3);
  console.log(getal);
  
  let getal2 = Trippel("hallo!");
  console.warn(getal2);
  
  //retour van meerdere resultaten (als object)
  let berekendeoppervlakte = Oppervlak2(2, 3);
  if (!berekendeoppervlakte.foutingave)
  console.log(`Berekende oppervlakte is ${berekendeoppervlakte.vlakte}`);
  else
  console.warn('Foutief gebruik van functie Oppervlak(h,b)');
  
  // ############################################
  // functies als variabelen
  // ############################################


  // variabele als functie
  const FunctieAlsVariabele = function(iets){
    console.log(iets);
  } 
  FunctieAlsVariabele("Functie als variabele werkt!");

  // ############################################
  // arrow functions
  // ############################################
  
  //met arugumenten ('a' ~ 2):
  const double = a => a * 2;

  const Verdubbel = a => (a*2);
  console.log(Verdubbel(8));

  //zonder argumenten:
  const ConsoleZin = () => {
    console.log('Een zin in de console'); 
    console.log('Een 2de zin');
  };
  ConsoleZin();

}

// paramaterloze functie
function DoeIets() {
  console.info("Er is iets gebeurd!");
}

//functie met een parameter
function DoeNogIets(zin) {
  console.info(zin);
}

//functie met meerdere parameters.
//mbv. de arguments property wordt gecheckt of alle parameters meegegeven werden
function Oppervlak(hoogte, breedte) {
  if (arguments.length == 2) {

    if (!isNaN(hoogte) && !isNaN(breedte))
      console.log(`De oppervlakte is ${hoogte} * ${breedte} = ${hoogte * breedte}`);

    else
      console.warn('Functie Oppervlak(h,b) werkt enkel met getallen');

  }

  else
    console.warn("Functie Oppervlak(h,b) verkeerd gebruikt, er dienen 2 parameters te worden meegegeven met deze functie");

}

function Oppervlak2(hoogte, breedte) {
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



