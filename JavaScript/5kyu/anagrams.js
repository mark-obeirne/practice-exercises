/*
////////////// Where My Anagrams At? (5kyu) //////////////

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

*/

function anagrams(word, words) {
  let matchingAnagrams = [];

  let countedLettersInWord = word.split("").reduce((allLetters, letter) => {
    if (letter in allLetters) {
      allLetters[letter]++;
    } else {
      allLetters[letter] = 1;
    }
    return allLetters;
  }, {});

  for (const entry of words) {
    let countedLettersInEntry = entry.split("").reduce((allLetters, letter) => {
      if (letter in allLetters) {
        allLetters[letter]++;
      } else {
        allLetters[letter] = 1;
      }
      return allLetters;
    }, {});

    const cLIWLength = Object.keys(countedLettersInWord).length;
    const cLIELength = Object.keys(countedLettersInEntry).length;

    if (cLIWLength === cLIELength) {
      if (
        Object.keys(countedLettersInEntry).every(
          (key) => countedLettersInWord[key] === countedLettersInEntry[key]
        )
      ) {
        matchingAnagrams.push(entry);
      }
    }
  }

  return matchingAnagrams;
}

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); // => ['carer', 'racer']

console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); // => []
