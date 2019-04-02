/*jshint esversion: 6 */

// VARIABLES

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.getElementsByClassName('btn__reset');
const phrases = ['I am a meat-popsicle.',
                 'Apes together strong',
                 'I am Groot.',
                 'I see dead people.',
                 'I am one with the Force, the Force is with me.',
                 'There is no spoon.',
                 'Why so serious?',
                 'Witness me!'];
const phraseArray = getRandomPhraseArray(phrases);

// FUNCTIONS

function getRandomPhraseArray(array) {
  const min = 0;
  const max = array.length;
  let randNumber = Math.floor(Math.random() * (max - min)) + min;
  return (array[randNumber].split(''));
  // return array[3]; This allows you to chose a specific item in the phraseArray
}

function addPhraseToDisplay() {
  const phraseBanner = document.getElementById('phraseBanner');
  for (let i = 0 ; i < phraseArray.length ; i++) {
    // console.log('The addPhraseToDisplay for loop is working and "i" is currently set to ' + i + '.');
    let newListItem = document.createElement('li');
    newListItem.textContent = phraseArray[i];
    if (/\W/.test(newListItem.textContent)) {
      newListItem.className = 'non-letter';
    } else {
      newListItem.className = 'letter';
    }
    phraseBanner.appendChild(newListItem);
  }
}

function checkLetter(parameter) {
  if (phraseArray.includes(parameter) || phraseArray.includes(parameter.toUpperCase())) {
    console.log("Found a match with the letter '" + parameter + "'.");
    let letters = document.getElementsByClassName('letter');
    for (let i = 0 ; i < letters.length ; i++) {
      if (letters[i].textContent.toLowerCase() === parameter) {
        letters[i].classList.add('show');
        letterFound = letters[i].textContent.toLowerCase();
        console.log('letterFound is equal to "' + letterFound + '".');
      }
    }
  } else {
    console.log("Did not find a match with the letter '" + parameter + "'.");
    return null;
  }
  checkWin();
}
//
//
// Working on the checkWin function. Have to make the game board convey that you won when '.shown' is equal to the count of '.letter'
//
//
function checkWin() {
  let title = document.getElementsByClassName('title');
  const shownLetters = document.getElementsByClassName('show');
  parsedShownLetterNumber = shownLetters.length;
  // console.log("Shown letters is equal to : " + parsedShownLetterNumber);
  if (missed === 5) {
    overlay.style.display = 'inherit';
    overlay.className = 'lose';
    title[0].innerText = 'You have lost the game.';
    // resetGame();
  } else if (parsedLetterNumber === parsedShownLetterNumber) {
    overlay.style.display = 'inherit';
    overlay.className = 'win';
    title[0].innerText = 'You have won the game!';
    // resetGame();
  }

}

// EVENT LISTENER

startGame[0].addEventListener('click', () => {
  console.log('The Start Game button has been clicked.');
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
  console.log('The chosen phrase is: ' + phraseArray);
  addPhraseToDisplay();
});

qwerty.addEventListener('click', ()=> {
  let target = event.target;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log("The game's keyboard button letter '" + target.textContent + "' was clicked.");
    target.className = 'chosen';
    target.setAttribute('type', 'disabled');
    let pressedLetter =  target.textContent;
    let letterFound = checkLetter(pressedLetter);
    if (letterFound === null) {
      tries[missed].style.opacity = 0.1;
      missed += 1;
    }
  }
  // console.log("The game's keyboard has been clicked. The letter was '" + target.textContent + "' was clicked.");
});
