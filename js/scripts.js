$(document).ready(function () {
  $("form#word-counter").submit(function (event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
  });
});

// Business Logic
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function (word) {
    if (!Number(word)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const wordArray = text.split(" ");
  let wordCount = [0, 0, 0, 0];
  if (text.trim().length === 0) {
    return 0;
  }
  if (word === "") {
    return 0
  }
  wordArray.forEach(function (element) {
    if (element.includes(word[0].toLowerCase())) {
      wordCount[0]++;
    }
    if (element.includes(word[1].toLowerCase())) {
      wordCount[1]++;
    }
    if (element.includes(word[2].toLowerCase())) {
      wordCount[2]++;
    }
    if (element.includes(word[3].toLowerCase())) {
      wordCount[3]++;
    }
  });
  return wordCount;
}

var array = ["hello", "hi", "no", "whatever"];
var text = "hello hi hi no no hello hello whatever ";
var test = numberOfOccurrencesInText(array, text);

//console.log(test);

function includesRarestLetter(word) {
  if (word.toLowerCase().includes("q")) {
    return true;
  }
  return false;
}

//console.log(includesRarestLetter(word));

//console.log("red! red. red?".includes("red"));

function omitBadwords(text) {

  const textArray = text.split(" ");
  const badWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  const newArray = [];

  textArray.forEach(function (element, index) {
    if (element != badWords[0] && element != badWords[1] && element != badWords[2] && element != badWords[3]) {
      newArray.push(element);
    }
  });

  return newArray
}

const someText = "Hello zoinks and muppeteer";
const test2 = omitBadwords(someText);
console.log(test2);






