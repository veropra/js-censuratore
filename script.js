/*- Il software riceve in input un lungo testo e una serie di parole da censurare.
- Restituisce il testo con xxx al posto delle parole censurate.
- Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali*/

/*Chiedere all'utente, dichiarando una variabile, di inserire un lungo testo*/
var text = prompt("Inserisci un testo lungo...");

/*Chiedere all'utente, dichiarando una variabile, di inserire delle parole da censurare*/
var censored = prompt ("...ora inserisci delle parole da censurare!").split(" ");

var listCensored = ["mascalzone" , "mentecatto" , "fannullone"];
console.log("Lista di parole vietate: " + listCensored);

/*Creo una funzione che restituisce il testo con "xxx" al posto delle parole censurate*/
function checkExists(array, word) {

  for (i=0; i < array.length; i++) {
    if(array[i] == word) {
      word = "xxx"
      alert ("La parola vietata: " + word + " è presente nella lista");
    }
  }
}
checkExists(listCensored, censored);
