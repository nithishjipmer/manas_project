const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const paths = document.querySelectorAll(".color-change");
const balloonColorVariations = ["#d83940", "#c5f71e", "#f79d1e", "#cc0bde"];
const POP_TEXT = "POP!";
const POP_DURATION = 1000;
const OVERLAY_DURATION = 2000;
let score = 0;
let timeLeft = 10;
let timerInterval;
let soundPlayed = false;

function playSound() {
  var audio = document.getElementById("audio");
  audio.play();
}

function changeColor() {
  const randomIndex = Math.floor(Math.random() * balloonColorVariations.length);
  const newFillColor = balloonColorVariations[randomIndex];
  paths.forEach((path) => {
    path.setAttribute("fill", newFillColor);
  });
}

function createPopText() {
  const popElement = document.createElement("div");
  popElement.textContent = POP_TEXT;
  popElement.classList.add("pop-text");

  // Generate random position
  const xPos = Math.random() * window.innerWidth * 0.8;
  const yPos = Math.random() * window.innerHeight * 0.8;

  // Apply position
  popElement.style.left = xPos + "px";
  popElement.style.top = yPos + "px";

  // Add to the document
  document.body.appendChild(popElement);

  // Remove after duration
  setTimeout(() => {
    document.body.removeChild(popElement);
  }, POP_DURATION);
}

function showStimulus() {
  const stimulusVariations = [playSound, createPopText, changeColor];
  const randomIndex = Math.floor(Math.random() * stimulusVariations.length);
  const stimulusToShow = stimulusVariations[randomIndex];
  stimulusToShow();
}

function showOverlay(text, duration) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const overlayText = document.createElement("div");
  overlayText.classList.add("overlay-text");
  overlayText.textContent = text;

  overlay.appendChild(overlayText);
  document.body.appendChild(overlay);

  setTimeout(() => {
    document.body.removeChild(overlay);
  }, duration);
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

function changeBalloonPosition() {
  max = 70;
  min = 40;
  const xCoordinate = Math.floor(Math.random() * (max - min + 1)) + min;
  allSvgs = document.querySelectorAll(".svg");
  for (let i = 0; i < allSvgs.length; i++) {
    allSvgs[i].style.transform = `translate(-${xCoordinate}%, -0%)`;
  }
}

function startGame() {
  // changeBalloonPosition();
  const stimulusChance = Math.random() < 0.6; // 60% chance of sound
  const waitTime = 10 * 1000; // stimulus played after 10 seconds
  setTimeout(() => {
    if (stimulusChance) {
      // stimulus heard
      showStimulus();
      soundPlayed = true;
    } else {
      // stimulus not heard
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

  // I want to show a overlay screen with get ready text
  setTimeout(() => showOverlay("Next Round...", OVERLAY_DURATION), 300);
  setTimeout(() => {
    updateScore();
    restartTimer();
    startGame();
  }, OVERLAY_DURATION);
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

    // I want to show a overlay screen with get ready text
    showOverlay("Next Round...", OVERLAY_DURATION);
    setTimeout(() => {
      restartTimer();
      startGame();
      startTimer();
    }, OVERLAY_DURATION);
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
let audio = new Audio(
  "http://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3"
);
let balloon = document.querySelector(".main-svg");
let popTrigger = document.querySelector(".click-to-pop");

popTrigger.addEventListener("click", function () {
  // game logic
  popBalloon();

  balloon.style.visibility = "hidden";

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
  }, 320);

  setTimeout(() => {
    balloon.style.visibility = "visible";
  }, 0);
});
