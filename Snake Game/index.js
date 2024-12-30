const gameContainer = document.querySelector(".gamebox");
const scoreElement = document.getElementById("score");

const columns = 20;
const rows = 20;

let snakeBody = [{ x: 17, y: 14 }];
let snakeDirection = "left";
let foodX, foodY;
let score = 0;

const updateFoodPosition = () => {
  foodX = Math.floor(Math.random() * (columns - 2)) + 2;
  foodY = Math.floor(Math.random() * (rows - 2)) + 2;
};

function generateElement(name, className) {
  const newElement = document.createElement("li");
  newElement.classList.add(className);
  gameContainer.appendChild(newElement);
  return newElement;
}

function SnakeHandler() {
  document.querySelectorAll(".snake").forEach((s) => s.remove());

  snakeBody.forEach((position) => {
    const snakeElement = generateElement("li", "snake");
    snakeElement.style.gridColumn = position.x;
    snakeElement.style.gridRow = position.y;
  });
}

function updateFoodDisplay() {
  const FoodElement = document.querySelector(".food");
  if (FoodElement) {
    FoodElement.style.gridColumn = foodX;
    FoodElement.style.gridRow = foodY;
  } else {
    const FoodElement = generateElement("li", "food");
    FoodElement.style.gridColumn = foodX;
    FoodElement.style.gridRow = foodY;
  }
}

const IntervalID = setInterval(() => {
  const SnakeHead = { ...snakeBody[0] };

  if (
    SnakeHead.x < 1 ||
    SnakeHead.x > columns ||
    SnakeHead.y < 1 ||
    SnakeHead.y > rows ||
    snakeBody.some((segment, index) => index !== 0 && segment.x === SnakeHead.x && segment.y === SnakeHead.y)
  ) {
    alert("Game Over!");
    clearInterval(IntervalID);
    return;
  }

  snakeBody.unshift(SnakeHead);

  switch (snakeDirection) {
    case "left":
      SnakeHead.x--;
      break;
    case "right":
      SnakeHead.x++;
      break;
    case "up":
      SnakeHead.y--;
      break;
    case "down":
      SnakeHead.y++;
      break;
  }

  if (SnakeHead.x === foodX && SnakeHead.y === foodY) {
    updateFoodPosition();
    score++;
    scoreElement.textContent = score;
  } else {
    snakeBody.pop();
  }

  SnakeHandler();
  updateFoodDisplay();
}, 200);

document.body.addEventListener("keydown", (e) => {
  let pressedKey = e.key;

  switch (pressedKey) {
    case "ArrowUp":
      if (snakeDirection !== "down") snakeDirection = "up";
      break;
    case "ArrowDown":
      if (snakeDirection !== "up") snakeDirection = "down";
      break;
    case "ArrowLeft":
      if (snakeDirection !== "right") snakeDirection = "left";
      break;
    case "ArrowRight":
      if (snakeDirection !== "left") snakeDirection = "right";
      break;
  }
});

updateFoodPosition();
