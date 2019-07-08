//utente sceglie se numero sarà pari o dispari
var input = prompt("scrivi 'pari' oppure 'dispari'");

//funzione per generare un numero random (da 1 a 5).
function generaRandom(){
  return Math.floor(Math.random() * 5 + 1);
}

//generiamo i numeri
var primoNumero = generaRandom();
console.log("il primo numero è " + primoNumero);

var secondoNumero = generaRandom();
console.log("il secondo numero è " + secondoNumero);

var sum = primoNumero + secondoNumero;

//funzione per determinare se numero è vero o falso
function isEven(n){
  if (n % 2 === 0){
    return true;
  } else {
    return false;
  }
}

//determino se utente ha vinto
if (isEven(sum)){
  console.log("la somma dei numeri è pari");
  if (input.includes("pari")){
    console.log("utente ha scelto pari ed ha vinto!");
  } else {
    console.log("utente ha scelto dispari ed ha perso!");
  }
} else {
  console.log("la somma dei numeri è dispari");
  if (input.includes("dispari")){
    console.log("utente ha scelto dispari ed ha vinto!");
  } else {
    console.log("utente ha scelto pari ed ha perso!");
  }
}