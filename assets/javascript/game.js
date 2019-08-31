//word list array============

var words = ["zeppelin", "maiden",]

//word selector======================
var word = words[Math.floor(Math.random() * words.length)];
console.log(word)

//Blank Letter Generator===============
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
console.log(answerArray)

// Remaining letters==================
var remainingLetters = word.length;
console.log(remainingLetters)
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



document.getElementById("word").innerHTML = answerArray.join(" ");
        // document.getElementById('hello').innerHTML = 'hi';



//=================================GAME=============================

