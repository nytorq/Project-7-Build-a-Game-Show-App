// VARIABLES

const qwerty = document.getElementById('qwerty');
const phrase = ['I am a meat-popsicle.',
                'Apes together strong',
                'I am Groot.',
                'I see dead people.',
                'I am one with the Force, the Force is with me.',
                'There is no spoon.',
                'Why so serious?',
                'Witness me!']
let missed = 0;
let match = 0;
const startGame = document.getElementsByClassName('btn__reset');
const phraseBanner = document.querySelectorAll('ul');
const keyboardButton = document.querySelectorAll('button');
const tries = document.getElementsByClassName('tries');
const overlay = document.getElementById('overlay');
let parsedLetterNumber = '';
let parsedShownLetterNumber = '';
let currentLetter = '';
let heartsLost = 0;
let letterFound = '';

// FUNCTIONS

function getRandomPhraseArray(array) {
  // const min = 0;
  // const max = phrase.length;
  // return array[Math.floor(Math.random() * (max - min)) + min];
  return array[2];
};

startGame[0].addEventListener('click', () => {
  overlay.style.display = 'none';
});


const chosenPhrase = getRandomPhraseArray(phrase);
const characterArray = [...chosenPhrase];

function addPhraseToDisplay() {
  for (let i = 0 ; i < characterArray.length ; i++) {
    const newLi = document.createElement('li');
    const currentCharacter = characterArray[i];
    if (/\W/.test(currentCharacter)) {
      newLi.className = 'non-letter';
    } else {
      newLi.className = 'letter';
    }
    newLi.textContent = currentCharacter;
    phraseBanner[0].appendChild(newLi);
    const letterArray = document.getElementsByClassName('letter');
    parsedLetterNumber = letterArray.length;
  }
}

addPhraseToDisplay();


for (let i = 0 ; i < keyboardButton.length ; i++) {
  keyboardButton[i].addEventListener('click', () => {
    const pressedButton = keyboardButton[i];
    pressedButton.className = 'chosen';
    function checkLetter(chosenButton) {
      const phraseLetters = document.getElementsByClassName('letter');
      for (let i = 0 ; i < phraseLetters.length ; i++) {
        const currentPhraseLetter = phraseLetters[i].textContent;
        const smallCurrentPhraseLetter = currentPhraseLetter.toLowerCase();
        const currentButtonLetter = chosenButton.textContent;
        if (smallCurrentPhraseLetter === currentButtonLetter) {
          phraseLetters[i].className = 'show';
          letterFound = currentButtonLetter;
          const shownLetters = document.getElementsByClassName('show');
          parsedShownLetterNumber = shownLetters.length
        } else {
            letterFound = null
          }
      };
    };
    checkLetter(pressedButton);
    if (letterFound === null) {
      tries[missed].style.display = 'none';
      missed += 1;
    }
    function checkWin() {
      if (missed === 5) {
        overlay.style.display = 'inherit';
        overlay.className = 'lose';
        let title = document.getElementsByClassName('title');
        title[0].innerText = 'You have lost the game.';
      } else if (parsedLetterNumber === parsedShownLetterNumber) {
        overlay.style.display = 'inherit';
        overlay.className = 'win';
        title[0].innerText = 'You have won the game!';
      }
    }
    checkWin();
  });

};
