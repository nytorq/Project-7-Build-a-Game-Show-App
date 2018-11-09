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
const startGame = document.getElementsByClassName('btn__reset');
const phraseBanner = document.querySelectorAll('ul');
const keyboardButton = document.querySelectorAll('button');
let currentLetter = '';
let checkLetter = 0;

// FUNCTIONS

function getRandomPhraseArray(array) {
  const min = 0;
  const max = phrase.length;
  return array[Math.floor(Math.random() * (max - min)) + min];
};

startGame[0].addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});


const chosenPhrase = getRandomPhraseArray(phrase);
const characterArray = [...chosenPhrase];

function characterInserter() {
  for (let i = 0 ; i < characterArray.length ; i++) {
    const newLi = document.createElement('li');
    const currentCharacter = characterArray[i];
    if (/\W/.test(currentCharacter)) {
      newLi.className = 'non-letter';
    } else {
      newLi.className = 'letter'
    }
    newLi.textContent = currentCharacter;
    phraseBanner[0].appendChild(newLi);
  }
};

characterInserter();


for (let i = 0 ; i < keyboardButton.length ; i++) {
  keyboardButton[i].addEventListener('click', () => {
    const pressedButton = keyboardButton[i];
    pressedButton.className = 'chosen';
    function checkLetter(chosenButton) {
      const phraseLetters = document.getElementsByClassName('letter');
      for (let i = 0 ; i < phraseLetters.length ; i++) {
        const currentPhraseLetter = phraseLetters[i].textContent;
        const currentButtonLetter = chosenButton.textContent;
        if (currentPhraseLetter === currentButtonLetter) {
          checkLetter += 1;
        }
      };
    };
    checkLetter(pressedButton);
    if (checkLetter > 0) {
      console.log('no match');
      missed += 1;
      console.log(missed);
    }
  })
};
