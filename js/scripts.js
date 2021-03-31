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

function boldSelectedWord(selectedWord, passage) {
  if (selectedWord.trim().length === 0 || passage.trim().length === 0) {
    return "";
  }
  let boldedWords = "";
  let wordArray = passage.split(" ");
  wordArray.forEach(function (word) {
    if (word.includes(selectedWord)) {
      const startIndex = word.indexOf(selectedWord);
      const endIndex = startIndex + selectedWord.length;
      boldedWords += word.slice(0, startIndex) + "<b>" + word.slice(startIndex, endIndex) + " " + "</b>" + word.slice(endIndex);
    }
    else {
      boldedWords += word + " ";
    }
  });
  return boldedWords;
}

// word = "bluegreen";
// selectedWord = "green";
// startIndex = word.indexOf(selectedWord) //4
// endIndex = startIndex + selectedWord.length - 1;
// boldedWords += word.slice(0,startIndex) + "<b>" + word.slice(startIndex, endIndex) + "</b>" + word.slice(endIndex)






