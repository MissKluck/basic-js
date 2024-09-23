console.log('Hello world!');

let lives = 5;
//lives = lives + 1 --> den sier lives er lik seg selv også skl den gå opp et tall
//lives += 1;

lives++; // den vil automatisk legge til en ekstra til den variabelen du har definert, så alle disse tre er forskjellige måter å skrve same ting på

//Operator - forteller javascript hva den skal gjøre
//+ - * /

//Variablene
//const let
//alt som bruker const må ha en console.log knyttet til seg

//datatyper
//number - går kun på enkelttall, ikke decimal
//const string = "tekst her" --> string er ren tekst, så selv om du kan skrive inn nummer der så endrer ikke det på tallene lagt til fra før
const string = 'kodehode wo wo wo';
console.log(string);
//boolean er en sann eller falsk statement; true or false --> om du skal lage en drkmode vil du bruke boolean for du skal bare ha sann eller falsk --> tenk på det som en knapp som du slår av og på
const boolean = true;
console.log(boolean);
//array er en liste, og du må åpne og lukke den i squarebrackets ["mandag"]
const array = ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag'];
console.log(array[2], array[4]);

const textElements = ''; //Cannelcase --> begynner på ordet med liten bokstav også tar stor bokstav på ord nummer to: textElements, C og C++ bruker "dette_er_snake"

document.querySelector('h1'); //henter ut h1 elementet fra html dokumentet, document refererer alltid til html documentet mens querySelector definerer hvilket element du vil hente ut

console.log(lives);
