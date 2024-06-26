(function () {
  let FPS = 10;
  const SIZE = 40;
  let score = 0;
  let interval;
  let isPaused = false;
  let board;
  let snake;
  let food;
  const scoreBoard = document.createElement("div");
  scoreBoard.setAttribute("id", "score");
  document.body.appendChild(scoreBoard);

  function init() {
    if (board) {
      board.element.remove();
    }
    document.getElementById("score").innerText = "Score: " + score;
    document.getElementById("mensagem").innerText = "";

    board = new Board(SIZE);
    snake = new Snake([
      [4, 4],
      [4, 5],
      [4, 6],
    ]);
    food = new Food();
    food.generate();
    score = 0;

    document.getElementById("score").innerText = "Score: " + score;
    interval = setInterval(run, 1000 / FPS);
  }

  let isInitializing = false;
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        snake.changeDirection(0);
        break;
      case "ArrowRight":
        snake.changeDirection(1);
        break;
      case "ArrowDown":
        snake.changeDirection(2);
        break;
      case "ArrowLeft":
        snake.changeDirection(3);
        break;
      case "p":
        togglePause();
        break;
      case "S":
        if (!interval && !isInitializing) {
          isInitializing = true;
          init();
          isInitializing = false;
        }
        break;
      default:
        break;
    }
  });

  function togglePause() {
    if (isPaused) {
      interval = setInterval(run, 1000 / FPS);
      isPaused = false;
    } else {
      clearInterval(interval);
      interval = null;
      isPaused = true;
    }
  }

  class Board {
    constructor(size) {
      this.element = document.createElement("table");
      this.element.setAttribute("id", "board");
      this.color = "#ccc";
      document.body.appendChild(this.element);
      for (let i = 0; i < size; i++) {
        const row = document.createElement("tr");
        this.element.appendChild(row);
        for (let j = 0; j < size; j++) {
          const field = document.createElement("td");
          row.appendChild(field);
        }
      }
    }
  }

  class Snake {
    constructor(body) {
      this.body = body;
      this.color = "#222";
      this.direction = 1;
      this.body.forEach(
        (field) =>
          (document.querySelector(
            `#board tr:nth-child(${field[0]}) td:nth-child(${field[1]})`
          ).style.backgroundColor = this.color)
      );
    }

    walk() {
      const head = this.body[this.body.length - 1];
      let newHead;
      switch (this.direction) {
        case 0:
          newHead = [head[0] - 1, head[1]];
          break;
        case 1:
          newHead = [head[0], head[1] + 1];
          break;
        case 2:
          newHead = [head[0] + 1, head[1]];
          break;
        case 3:
          newHead = [head[0], head[1] - 1];
          break;
        default:
          break;
      }
      if (this.isCollision(newHead)) {
        document.getElementById("mensagem").innerText = "Fim de Jogo!!!";
        gameOver();
        return;
      }
      this.body.push(newHead);
      if (newHead[0] === food.position[0] && newHead[1] === food.position[1]) {
        score += food.type === "red" ? 2 : 1;
        document.getElementById("score").innerText = "Score: " + score;
        food.generate();
      } else {
        const oldTail = this.body.shift();
        document.querySelector(
          `#board tr:nth-child(${oldTail[0]}) td:nth-child(${oldTail[1]})`
        ).style.backgroundColor = board.color;
      }
      document.querySelector(
        `#board tr:nth-child(${newHead[0]}) td:nth-child(${newHead[1]})`
      ).style.backgroundColor = this.color;
    }

    changeDirection(direction) {
      const oppositeDirections = { 0: 2, 1: 3, 2: 0, 3: 1 };
      if (this.direction !== oppositeDirections[direction]) {
        this.direction = direction;
      }
    }

    isCollision(position) {
      if (
        position[0] < 1 ||
        position[0] > SIZE ||
        position[1] < 1 ||
        position[1] > SIZE
      ) {
        return true;
      }
      for (let i = 0; i < this.body.length; i++) {
        if (
          this.body[i][0] === position[0] &&
          this.body[i][1] === position[1]
        ) {
          return true;
        }
      }
      return false;
    }
  }

  class Food {
    constructor() {
      this.color = { black: "#000", red: "#f00" };
      this.position = [];
      this.type = "black";
    }

    generate() {
      let x = Math.floor(Math.random() * SIZE) + 1;
      let y = Math.floor(Math.random() * SIZE) + 1;
      this.position = [x, y];
      this.type = Math.random() < 0.67 ? "black" : "red";
      document.querySelector(
        `#board tr:nth-child(${x}) td:nth-child(${y})`
      ).style.backgroundColor = this.color[this.type];
    }
  }

  function gameOver() {
    clearInterval(interval);
    interval = null;
    alert("Game Over! Press 'S' to start a new game.");
  }

  function run() {
    snake.walk();
    FPS += 1 / 60;
  }

  window.onload = function () {
    init();
  };
})();
