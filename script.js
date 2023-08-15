const balloon = document.getElementById("balloon");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
let score = 0;
let timeLeft = 10;
let timerInterval;
let soundPlayed = false;

balloon.addEventListener("click", () => {
  popBalloon();
});

function playSound() {
  // Play your sound here
  var audio = document.getElementById("audio");
  audio.play();
}

function startGame() {
  const soundChance = Math.random() < 0.6; // 60% chance of sound
  const waitTime = Math.random() * 9 * 1000;
  setTimeout(() => {
    if (soundChance) {
      // sound heard
      playSound();
      soundPlayed = true;
    } else {
      // sound not heard
      soundPlayed = false;
    }
  }, waitTime);
}

function popBalloon() {
  if (timeLeft > 0) {
    score -= 10;
  } else {
    if (soundPlayed) {
      score -= 10;
    } else {
      if (0 > timeLeft >= -2) {
        // +20 points when he clicks within 2 sec
        score += 20;
      } else if (-2 > timeLeft >= -5) {
        // +5 points when he clicks b/w 2 and 5 sec
        score += 5;
      }
    }
  }

  updateScore();
  restartTimer();
  startGame();
}

function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

function updateTimer() {
  document.getElementById("timer").innerHTML = "Timer: " + timeLeft;
}

function restartTimer() {
  timeLeft = 10;
  updateTimer();
}

function startTimer() {
  console.log(timeLeft);
  if (timeLeft >= -4) {
    timeLeft--;
    updateTimer();
    // function wont be called again after -4 sec
    setTimeout(startTimer, 1000);
  } else {
    if (soundPlayed) {
      score += 10;
      updateScore();
    }
    restartTimer();
    startGame();
    startTimer();
  }
}

function startBtnClicked() {
  startTimer();
  startGame();
  document.getElementById("start-btn").style.display = "none";
}
