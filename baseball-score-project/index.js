let currentScoreHome = 0;
let currentScoreGuest = 0;

let homeGameScore = document.getElementById("home-score");
let guestGameScore = document.getElementById("guest-score");

function resetScore() {
  currentScoreHome = 0;
  currentScoreGuest = 0;
  homeGameScore.textContent = currentScoreHome;
  guestGameScore.textContent = currentScoreGuest;
}

function homePlus1() {
  currentScoreHome += 1;
  homeGameScore.textContent = currentScoreHome;
}

function homePlus2() {
  currentScoreHome += 2;
  homeGameScore.textContent = currentScoreHome;
}

function homePlus3() {
  currentScoreHome += 3;
  homeGameScore.textContent = currentScoreHome;
}

function guestPlus1() {
  currentScoreGuest += 1;
  guestGameScore.textContent = currentScoreGuest;
}

function guestPlus2() {
  currentScoreGuest += 2;
  guestGameScore.textContent = currentScoreGuest;
}

function guestPlus3() {
  currentScoreGuest += 3;
  guestGameScore.textContent = currentScoreGuest;
}
