var container = document.querySelector(".die");
var rollButton = document.querySelector("#roll");

var faces = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six'
}

class Die {
  constructor(val) {
    this.roll(); 
    
    this.lastVal = null;
    this.lastFace = null;
    this.locked = false;
  }
  
  roll() {
    this.currentVal = Math.floor(Math.random() * 6) + 1;
    this.currentFace = faces[this.currentVal];
    this.showDie();
  }
  
  rollAgain() {
    this.lastVal = this.currentVal;
    this.lastFace = this.currentFace;
    
    this.roll();
  }
  
  showDie() {
    if (this.lastFace) {
      container.classList.replace(this.lastFace, this.currentFace);
    } else {
      container.classList.add(this.currentFace);
    }
  }
}

// let dice = [];
// for (let i = 0; i < 5; i++) {
//   dice.push(new Die(Math.floor(Math.random() * 6) + 1));
// }

var die = new Die();
console.log(die);

rollButton.addEventListener("click", function() {
  die.rollAgain();
  console.log(die);
});

