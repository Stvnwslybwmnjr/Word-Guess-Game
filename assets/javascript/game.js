//word list array============

var words = ["zeppelin", "maiden",]

//word selector======================
var word = words[Math.floor(Math.random()* words.length)];
console.log(word)

//Blank Letter Generator
var answerArray =[];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
}