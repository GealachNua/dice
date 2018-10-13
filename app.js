const diceTriggerEl = document.querySelector('.dice__trigger');
const diceImageEl = document.querySelector('.dice__image');

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// Oude, eigen oplossing waarbij ik de const diceImageEl niet gemaakt had.
// Tevens de veel te grote functie dice() gemaakt. Met een switch functie.
// Volgens het DRY principe is het feit dat ik de document.bla bla regel
// steeds herhaal ook niet goed.

/*

function dice() {
  diceTriggerEl.addEventListener("click", function() {
    switch (getRandomNumber()){
      case 1:
      document.body.querySelector(".dice__image").src="images/dice1.png";
      break;
      case 2:
      document.body.querySelector(".dice__image").src="images/dice2.png";
      break;
      case 3:
      document.body.querySelector(".dice__image").src="images/dice3.png";
      break;
      case 4:
      document.body.querySelector(".dice__image").src="images/dice4.png";
      break;
      case 5:
      document.body.querySelector(".dice__image").src="images/dice5.png";
      break;
      case 6:
      document.body.querySelector(".dice__image").src="images/dice6.png";
      break;
   }
  })
}

*/

function getDice() {
  const myRandomNumber = getRandomNumber();
  diceImageEl.src = 'images/dice' + myRandomNumber + '.png';
}

// optie 1.

function rollDice() {
  diceTriggerEl.addEventListener('click', () => {
    for (let i = 0; i < 8; i += 1) {
      setTimeout(getDice, 100 * i);
    }
  });
}

// optie 2; vind ik minder duidelijk of mooi.


// function rollDiceToo() {
//   diceTriggerEl.addEventListener('click', () => {
//     let counter = 0;
//     const diceCounter = setInterval(() => {
//       getDice();
//       counter++;
//       if (counter === 8) {
//         clearInterval(diceCounter);
//       }
//     }, 100);
//   });
// }

rollDice();
