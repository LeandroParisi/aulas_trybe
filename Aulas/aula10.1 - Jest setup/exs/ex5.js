const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.reduce((acc, current) => {
    const currentSplitedWord = current.split('');
    let currentWordCount = 0;
    currentSplitedWord.forEach(currentLetter => {
      if (currentLetter === 'a' || currentLetter === 'A') {
        currentWordCount += 1;
      }
    })
    return acc + currentWordCount;
  }, 0);
};

console.log(containsA());

module.exports = containsA;