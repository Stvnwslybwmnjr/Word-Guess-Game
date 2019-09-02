//word list array============
let displayWins = document.getElementById("wins");
let displayWord = document.getElementById("word");
let displayGuesses = document.getElementById("guesses")
let displayRemain = document.getElementById("remain")
var words = ["zeppelin", "maiden",];

//word selector======================
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

//Blank Letter Generator===============
var answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
console.log(answerArray);

// Remaining letters==================
var remainingLetters = word.length;
console.log(remainingLetters);
//======================generating alphabet array============

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
var alphabet = genCharArray('a', 'z'); // ["a", ..., "z"]
console.log(alphabet);


//=================================GAME=============================
let guessed = [];


document.onkeyup = function (event) {
    let guess = event.key.toLowerCase();
    let guess2 = guess;

    // if the guess is in the alphabet
    if (alphabet.indexOf(guess) !== -1) {
        // alert("it worked")

        if (guessed.indexOf(guess2) !== -1) {
            alert(guessed + " already used.")

        }
        else {
            guessed.push(guess2);
            console.log(guessed);
            displayGuesses.innerText = guessed;
            
        }
    }
}

