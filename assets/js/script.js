//Variables declared
let heads = 0;
let tails = 0;
let headPercent = 0;
let tailPercent = 0;
let total = heads + tails;

document.addEventListener("DOMContentLoaded", function () {
  //Play game
  document.querySelector("#flip").addEventListener("click", function () {
    let randomChance = Math.random();

    if (randomChance < 0.495) {
      //You fipped tails
      document.querySelector("#penny-image").src =
        "./assets/images/penny-tails.jpg";
      document.querySelector("#message").textContent = "You Flipped Tails";
      tails++;
      total++;
      tailPercent = Math.round((tails / total) * 100);
      document.querySelector("#tails").textContent = tails;
      document.querySelector("#tails-percent").textContent = tailPercent + "%";
      if (heads > 0) {
        headPercent = Math.round((heads / total) * 100);
      }
      document.querySelector("#heads").textContent = heads;
      document.querySelector("#heads-percent").textContent = headPercent + "%";
    } else {
      //You flipped heads
      document.querySelector("#penny-image").src =
        "./assets/images/penny-heads.jpg";
      document.querySelector("#message").textContent = "You Flipped Heads";
      heads++;
      total++;
      headPercent = Math.round((heads / total) * 100);
      document.querySelector("#heads").textContent = heads;
      document.querySelector("#heads-percent").textContent = headPercent + "%";
      if (tails > 0) {
        tailPercent = Math.round((tails / total) * 100);
      }
      document.querySelector("#tails").textContent = tails;
      document.querySelector("#tails-percent").textContent = tailPercent + "%";
    }

    //Reset game
    document.querySelector("#clear").addEventListener("click", function () {
      heads = 0;
      tails = 0;
      headPercent = 0;
      tailPercent = 0;
      total = heads + tails;
      document.querySelector("#tails").textContent = 0;
      document.querySelector("#tails-percent").textContent = 0 + "%";
      document.querySelector("#heads").textContent = 0;
      document.querySelector("#heads-percent").textContent = 0 + "%";
      document.querySelector("#penny-image").src =
        "./assets/images/penny-heads.jpg";
      document.querySelector("#message").textContent = "Let's Get Flipping!";
    });
  });
});
