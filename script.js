var dieContainers = document.querySelectorAll(".die");
var rollButton = document.querySelector("#roll");

var images = {
      1: 'assets/1_dot.png',
      2: 'assets/2_dots.png',
      3: 'assets/3_dots.png',
      4: 'assets/4_dots.png',
      5: 'assets/5_dots.png',
      6: 'assets/6_dots.png'
}

class Die {
  constructor(val, dieContainer) {
    this.dieContainer = dieContainer;
    this.roll();
    this.locked = false;
  }
  
  roll() {
    this.currentVal = Math.floor(Math.random() * 6) + 1;
    this.showDie();
  }
  
  showDie() {
    this.dieContainer.src = images[this.currentVal];
  }
}

// Create array of five new die objects initialized to random values
let dice = [];
for (let i = 0; i < 5; i++) {
  dice.push(
    new Die(
      Math.floor(Math.random() * 6) + 1,
      dieContainers[i]
  ));
}
console.log(dice);

rollButton.addEventListener("click", function() {
  dice.forEach( (die) => {
    die.roll();
    console.log(die);
  });
});

dice.forEach( (die) => {
  die.dieContainer.addEventListener("click", function() {
    die.dieContainer.classList.toggle("locked");
  });
});