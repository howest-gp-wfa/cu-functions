"use strict";

window.addEventListener("load", initialize);

//anonieme functie
window.addEventListener("load", function () { 
 alert("HTML ingeladen!"); 
});

function initialize() {

  const btnAnonymous = document.getElementById("anonymous-example");

  btnAnonymous.addEventListener("click", function () {
    alert("Ik ben helemaal geheim!");
    logMessage("Anonieme functie getriggered!");
  });

  // ############################################
  // functies die geen resultaat terugkrijgen
  // ############################################

  //aanroepen van een function
  logInfo();

  //meermaals aanroepen van een function
  for (let i = 0; i < 10; i++) {
    logInfo();
  }

  //argumenten doorgeven aan een functie
  for (let i = 0; i < 10; i++) {
    logMessage(`Aanroep ${i}`);
  }

  logSurface(5, 3);
  logSurface("test", 2);
  logSurface(5);

  // ############################################
  // functies die wel een resultaat terugkrijgen
  // ############################################

  //retour van een enkel resultaat
  const trippledNumber = tripple(3);
  console.log(trippledNumber);

  const trippledString = tripple("hallo!");
  console.warn(trippledString);

  //retour van meerdere resultaten (als object)
  const basketballCourt = getSurface(28, 15);
  if (!basketballCourt.isValid)
    console.log(`Een basketveld heeft een oppervlakte van ${basketballCourt.result} m².`);
  else
    console.warn("Foutief gebruik van functie getSurface(height, width)");

  // ############################################
  // functies uit een aparte bibliotheek (functions.js)
  // ############################################
  sayHello();

  // ############################################
  // functies als variabelen
  // ############################################

  // variabele als functie
  const logSentence = function (sentence) {
    console.log(sentence);
  };

  logSentence("Functie als variabele werkt!");

  // ############################################
  // arrow functions
  // ############################################

  //met arugumenten ("number" ~ 2):
  const double = number => number * 2;
  console.log(double(8));

  //zonder argumenten:
  const logSentences = () => {
    console.log("Een zin in de console");
    console.log("Een 2de zin");
  };

  logSentences();

}

// paramaterloze functie
function logInfo() {
  console.info("Er werd iets gelogged!");
}

//functie met een parameter
function logMessage(message) {
  console.info(message);
}

//functie met meerdere parameters.
//mbv. de arguments property wordt gecheckt of alle parameters meegegeven werden
function logSurface(height, width) {
  if (arguments.length === 2) {

    if (!isNaN(height) && !isNaN(width))
      console.log(`De oppervlakte is ${height} * ${width} = ${height * width}`);

    else
      console.warn('Functie logSurface(width, height) werkt enkel met getallen');

  }

  else
    console.warn("Functie logSurface(width, height) verkeerd gebruikt, er dienen 2 parameters te worden meegegeven met deze functie");

}

function getSurface(height, width) {
  let surface = 0;
  let hasError = true;

  if ((arguments.length !== 2) || (isNaN(height) || (isNaN(width)))) {
    hasError = true;
  }
  else {
    hasError = false;
    surface = height * width;
  }

  // Resultaatobject meegeven
  return {
    result: surface,
    isValid: hasError
  };
}

//waarde retourneren
function tripple(number) {
  if (!isNaN(number)) return 3 * number;
  else return "Foutief gebruik, getal ingeven!";
}