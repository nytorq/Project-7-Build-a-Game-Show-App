// VARIABLES

const qwerty = document.getElementById('qwerty');
const phrase = ['I am a meat-popsicle.',
                'Apes together strong',
                'I am Groot',
                'I see dead people.',
                'I am one with the Force, the Force is with me.',
                'There is no spoon.',
                'Why so serious?',
                'Witness me!']
const missed = 0;
const startGame = document.getElementsByClassName('btn__reset');

startGame[0].addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});
