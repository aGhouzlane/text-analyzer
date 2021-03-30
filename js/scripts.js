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
  let wordCount = 0;
  if (text.trim().length === 0) {
    return 0;
  }
  wordArray.forEach(function (element) {
    if (element.includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

const text = "red RED Red";
const word = "red";

console.log(numberOfOccurrencesInText(word, text));


const result = numberOfOccurrencesInText(word, text);

function includesRarestLetter(word) {
  if (word.toLowerCase().includes("q")) {
    return true;
  }
  return false;
}
//console.log(includesRarestLetter(word));

//console.log("red! red. red?".includes("red"));







