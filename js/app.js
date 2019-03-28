/*jshint esversion: 6 */

// VARIABLES

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.getElementsByClassName('btn__reset');
const phrases = ['Bob', 'Richard', 'Bill'];
const phraseArray = getRandomPhraseArray(phrases);

// EVENT LISTENERS

startGame[0].addEventListener('click', () => {
  console.log('The Start Game button has been clicked.');
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
  console.log('The chosen phrase is: ' + phraseArray);
  addPhraseToDisplay();
});

// REVIEW CHECKLETTER FUNCTION IN TT. YOU MAY HAVE GOT SOMETHING WRONG THERE.

function checkLetter(parameter) {
  if (phraseArray.includes(parameter) || phraseArray.includes(parameter.toUpperCase())) {
    console.log("Found a match with the letter '" + parameter + "'.");
    let letters = document.getElementsByClassName('letter');
    do {
      for (let i = 0 ; i < letters.length ; i++) {
        console.log('The for loop has run ' + i + ' times');
        if (letters[i].textContent.toLowerCase() === parameter) {
          letters[i].className = 'show';
          let condition = true;
        } else {
          // console.log('condition is set to ' + condition + '.');
          condition = false;
        }
      }
    } while (condition);
  } else {
    console.log("Did not find a match with the letter '" + parameter + "'.");
    return null;
  }
}

qwerty.addEventListener('click', ()=> {
  let target = event.target;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log("The game's keyboard button letter '" + target.textContent + "' was clicked.");
    target.className = 'chosen';
    target.setAttribute('type', 'disabled');
    let letterFound =  target.textContent;
    checkLetter(letterFound);
  }
  // console.log("The game's keyboard has been clicked. The letter was '" + target.textContent + "' was clicked.");
});

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
