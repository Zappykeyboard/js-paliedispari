//determina se una parola è palindroma
function isPalindrome(word) {
    var reversed = word.split("").reverse().join("");
    if (word === reversed) {
      return "L'input è un palindromo!";
    } else {
      return "L'input non è un palindromo"
    }
}

var input = prompt("Inserisci una parola o frase");

console.log(isPalindrome(input));