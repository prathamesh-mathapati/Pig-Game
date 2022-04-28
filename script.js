"use strict";

const score0el = document.querySelector("#score--0");
const player0el = document.querySelector(".player--0");
const player1el = document.querySelector(".player--1");

const score1 = document.getElementById("score--1");
const current0el = document.getElementById("current--0");
const currrent1el = document.getElementById("current--1");
const diceel = document.querySelector(".dice");
const btnnew = document.querySelector(".btn--new");
const btnroll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");

let score, correntscore, activeplayer, playing;
const init = () => {
  score0el.textContent = 0;
  score1.textContent = 0;

  score = [0, 0];
  correntscore = 0;
  activeplayer = 0;
  playing = true;

  current0el.textContent = 0;
  currrent1el.textContent = 0;
  diceel.classList.add("hidden");
  player0el.classList.remove("player--winner");
  player1el.classList.remove("player--winner");
  player0el.classList.add("player--active");
  player1el.classList.remove("player--active");
};
init();

const switchplayer = () => {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  correntscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0el.classList.toggle("player--active");
  player1el.classList.toggle("player--active");
};

btnroll.addEventListener("click", () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceel.classList.remove("hidden");
    diceel.src = `dice-${dice}.png`;

    if (dice !== 1) {
      correntscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        correntscore;
      // current0el.textContent = correntscore;
    } else {
      switchplayer();
    }
  }
});

btnhold.addEventListener("click", () => {
  if (playing) {
    score[activeplayer] += correntscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];

    if (score[activeplayer] >= 20) {
      playing = false;
      diceel.classList.add("hidden");

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
    } else {
      switchplayer();
    }
  }
});

btnnew.addEventListener("click", init);
