const time = document.getElementById("time");
const hit = document.getElementById("hit");
const score = document.getElementById("score");
const bubbleContainer = document.getElementById("main");

hit.textContent = Math.floor(Math.random() * 10);

function bubbleMakerFunc() {
  for (let i = 0; i < 174; i++) {
    const rn = Math.floor(Math.random() * 10);
bubbleContainer.innerHTML +=`<h3 class="bubble">${rn}</h3>`
  }
}

const updateBubbleNumbers = () => {
    const bubbles = document.querySelectorAll('.bubble')
    bubbles.forEach(function (bubble) {
        bubble.textContent = Math.floor(Math.random() * 10);
    })
}
bubbleContainer.addEventListener("click", (e) => {

    if (e.target.textContent === hit.textContent) {
      scoreCount += 10;
      score.textContent = scoreCount;
      hit.textContent = Math.floor(Math.random() * 10);
      updateBubbleNumbers();
    } else {
      hit.textContent = Math.floor(Math.random() * 10);
    }
});

let timeCount = 60;
let scoreCount = 0;

const timer = setInterval(() => {
  if (timeCount === 0) {
    clearInterval(timer);
    bubbleContainer.innerHTML = `<h1>Game Over Score :${score.innerText} </h1>`;
  } else {
    timeCount--;
  }
  time.textContent = timeCount;
}, 1000);

bubbleMakerFunc();
