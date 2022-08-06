//Variables declared
let rolls = [0, 0, 0, 0, 0, 0];

//Scoreboard percentage calculator
let scoreboard = function () {
  let total = rolls[0] + rolls[1] + rolls[2] + rolls[3] + rolls[4] + rolls[5];
  let percent = [0, 0, 0, 0, 0, 0];

  if (total > 0) {
    for (let i = 0; i < rolls.length; i++)
      percent[i] = Math.round((rolls[i] / total) * 100);
  }

  for (let i = 0; i < rolls.length; i++) {
    document.querySelector(`#td${i + 1}`).textContent = rolls[i];
    document.querySelector(`#td${i + 1}-percent`).textContent =
      percent[i] + "%";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  //Play game
  document.querySelector("#roll").addEventListener("click", function () {
    let rollNumber = Math.ceil(Math.random() * 6);
    document.querySelector(
      "#message"
    ).textContent = `You Rolled ${rollNumber}!`;
    rolls[rollNumber - 1] += 1;
    document.querySelector(
      "#dice-image"
    ).src = `./assets/images/dice/dice${rollNumber}.png`;
    scoreboard();
  });

  //Reset game
  document.querySelector("#clear").addEventListener("click", function () {
    rolls = [0, 0, 0, 0, 0, 0];
    document.querySelector("#dice-image").src =
      "./assets/images/dice/dice1.png";
    document.querySelector("#message").textContent = "Let's Get Rolling!";
    scoreboard();
  });
});
