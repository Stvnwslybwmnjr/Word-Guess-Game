// Id selectors======================
let displayWins = document.getElementById("wins");
let displayWord = document.getElementById("word");
let displayGuesses = document.getElementById("guesses")
let displayRemain = document.getElementById("remain")

// Global Variables========================
let turns 
let word
let answerArray
let remainingLetters
let guessed = [];
let wins = 0;
let loses = 0;

//word list array============
let words = ["zeppelin", "maiden",];

// Reset Game=================================
reset();

function reset() {
    //word selector======================
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);

    // guesses and wins============
    turns = word.length + 6;
//    turns = 3;
    console.log("turns left" + turns);
    displayRemain.innerText = turns;
    
    // Remaining letters==================
    remainingLetters = word.length;
    console.log("remaining Letters" + remainingLetters);
    
    guessed = [];
    displayGuesses.innerText = guessed;
    //Blank Letter Generator===============
     answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    console.log(answerArray);
    displayWord.innerHTML = answerArray.join(" ");
}

//======================generating alphabet array============this came from "stack overflow"

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
            // alert("still working")
            guessed.push(guess2);
            console.log(guessed);
            displayGuesses.innerText = guessed;
            turns--;
            winOrLose();
        }
        displayRemain.innerText = turns;
        function winOrLose() {
            // if (turns > 0) {
            // alert("this works")
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess2) {
                    answerArray[i] = guess2;
                    remainingLetters--;
                    console.log("RL " + remainingLetters);
                    //remaining letters
                    displayWord.innerHTML = answerArray.join(" ");
                    if (remainingLetters < 1) {
                        alert("YOU WIN! the word was " + word);
                        wins++;
                        console.log(wins)
                        reset();
                        // Can't WIN ON THE LAST TURN!!!
                    }
                }
            }           
            if (turns == 0) {
                alert("Out of guesses, Game Over! The word was " + word);
                loses++;
                console.log(loses);
                reset();
            }
        }
    }
}
//time out functions