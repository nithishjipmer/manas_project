const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
let score = 0;
let timeLeft = 10;
let timerInterval;
let soundPlayed = false;

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

let startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", function () {
  startTimer();
  startGame();
  document.getElementById("start-btn").style.display = "none";
});

// balloon animation
let mainSvg = document.querySelector(".main-svg");
let secondSvg = document.querySelector(".second-svg");
let thirdSvg = document.querySelector(".third-svg");
let fourthSvg = document.querySelector(".fourth-svg");
let content = document.querySelector(".content");
let needle = document.querySelector(".needle");
let audio = new Audio(
  "http://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3"
);
let normalMotion = document.querySelector(".normal-motion");
let slowMotion = document.querySelector(".slow-motion");

normalMotion.addEventListener("click", function () {
  // game logic
  popBalloon();

  normalMotion.style.visibility = "hidden";
  slowMotion.style.visibility = "hidden";
  setTimeout(() => {
    needle.style.left = "70vw";
  }, 50);

  setTimeout(() => {
    needle.style.left = "60vw";
  }, 70);

  setTimeout(() => {
    needle.style.left = "50vw";
  }, 90);

  setTimeout(() => {
    needle.style.left = "45vw";
  }, 110);

  setTimeout(() => {
    audio.play();
    mainSvg.style.visibility = "hidden";
    secondSvg.style.visibility = "visible";
  }, 130);

  setTimeout(() => {
    thirdSvg.style.visibility = "visible";
  }, 150);

  setTimeout(() => {
    content.style.opacity = ".9";
  }, 170);

  setTimeout(() => {
    content.style.opacity = ".8";
  }, 190);

  setTimeout(() => {
    content.style.opacity = ".7";
  }, 210);

  setTimeout(() => {
    content.style.opacity = ".6";
  }, 230);

  setTimeout(() => {
    content.style.opacity = ".4";
  }, 250);

  setTimeout(() => {
    content.style.opacity = ".3";
  }, 270);

  setTimeout(() => {
    content.style.opacity = ".2";
  }, 290);

  setTimeout(() => {
    content.style.opacity = ".1";
  }, 300);

  setTimeout(() => {
    content.style.opacity = "0";
  }, 300);

  setTimeout(() => {
    mainSvg.style.visibility = "visible";
    secondSvg.style.visibility = "hidden";
    thirdSvg.style.visibility = "hidden";
    content.style.opacity = "1";
    needle.style.left = "80vw";
  }, 320);

  setTimeout(() => {
    normalMotion.style.visibility = "visible";
    slowMotion.style.visibility = "visible";
  }, 1650);
});

slowMotion.addEventListener("click", function () {
  normalMotion.style.visibility = "hidden";
  slowMotion.style.visibility = "hidden";
  setTimeout(() => {
    needle.style.left = "70vw";
  }, 100);

  setTimeout(() => {
    needle.style.left = "60vw";
  }, 200);

  setTimeout(() => {
    needle.style.left = "50vw";
  }, 300);

  setTimeout(() => {
    needle.style.left = "45vw";
  }, 400);

  setTimeout(() => {
    audio.play();
    mainSvg.style.visibility = "hidden";
    secondSvg.style.visibility = "visible";
  }, 500);

  setTimeout(() => {
    thirdSvg.style.visibility = "visible";
  }, 600);

  setTimeout(() => {
    content.style.opacity = ".9";
  }, 700);

  setTimeout(() => {
    content.style.opacity = ".8";
  }, 800);

  setTimeout(() => {
    content.style.opacity = ".7";
  }, 900);

  setTimeout(() => {
    content.style.opacity = ".6";
  }, 1000);

  setTimeout(() => {
    content.style.opacity = ".4";
  }, 1100);

  setTimeout(() => {
    content.style.opacity = ".3";
  }, 1200);

  setTimeout(() => {
    content.style.opacity = ".2";
  }, 1300);

  setTimeout(() => {
    content.style.opacity = ".1";
  }, 1400);

  setTimeout(() => {
    content.style.opacity = "0";
  }, 1500);

  setTimeout(() => {
    mainSvg.style.visibility = "visible";
    secondSvg.style.visibility = "hidden";
    thirdSvg.style.visibility = "hidden";
    content.style.opacity = "1";
    needle.style.left = "80vw";
  }, 1600);

  setTimeout(() => {
    normalMotion.style.visibility = "visible";
    slowMotion.style.visibility = "visible";
  }, 1900);
});
