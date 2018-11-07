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
const missed = 0;
const startGame = document.getElementsByClassName('btn__reset');
const phraseBanner = document.querySelectorAll('ul');

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
  for (let i = 0 ; i <= characterArray.length ; i++) {
    const newLi = document.createElement('li');
    newLi.className = 'letter';
    const currentCharacter = characterArray[i];
    newLi.textContent = currentCharacter;
    phraseBanner[0].appendChild(newLi);
  }
};

characterInserter()
