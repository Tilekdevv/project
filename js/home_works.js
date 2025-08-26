// HomeWork
const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

let regExp = /^[\w\d\а-я\А-Я]{6,30}@gmail\.com$/;
gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerHTML = "ok";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerHTML = "error";
    gmailResult.style.color = "red";
  }
};

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0;
let positionY = 0;

const maxMoveX = parentBlock.offsetWidth - childBlock.offsetWidth;
const maxMoveY = parentBlock.offsetHeight - childBlock.offsetHeight;

const move = () => {
  if (positionX < maxMoveX && positionY === 0) {
    positionX++;
  } else if (positionX >= maxMoveX && positionY < maxMoveY) {
    positionY++;
  } else if (positionX > 0 && positionY >= maxMoveY) {
    positionX--;
  } else if (positionX === 0 && positionY > 0) {
    positionY--;
  }
  childBlock.style.left = `${positionX}px`;
  childBlock.style.top = `${positionY}px`;
  requestAnimationFrame(move);
};
move();

const seconds = document.querySelector("#seconds");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
let count = 0;
let interval;
start.onclick = () => {
  if (!interval) {
    interval = setInterval(() => {
      count++;
      seconds.innerHTML = `${count}`;
    }, 1000);
  }
};

const stopCounter = () => {
  clearInterval(interval);
  interval = null;
};
stop.onclick = stopCounter;
reset.onclick = () => {
  stopCounter();
  count = 0;
  seconds.innerHTML = `${count}`;
};
