/* Canvas */
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

document.body.addEventListener('keydown', keydown);

function keydown(e) {
    if (e.key === 'ArrowUp') {
        if (game.snake.directionY === 1) return;
        game.snake.directionX = 0;
        game.snake.directionY = -1;
    } else if (e.key === 'ArrowDown') {
        if (game.snake.directionY === -1) return;
        game.snake.directionX = 0;
        game.snake.directionY = 1;
    } else if (e.key === 'ArrowLeft') {
        if (game.snake.directionX === 1) return;
        game.snake.directionX = -1;
        game.snake.directionY = 0;
    } else if (e.key === 'ArrowRight') {
        if (game.snake.directionX === -1) return;
        game.snake.directionX = 1;
        game.snake.directionY = 0;
    }
}

/* Display class */
class Game {
    constructor() {
        this.fps = 10;
        this.gridCount = 20;
        this.gridSize = 22;
        this.snake = new Snake;
        this.apple = new Apple;
    }
    clearDisplay() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    }
    drawSnake() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.snake.headX * this.gridCount, this.snake.headY * this.gridCount, this.gridSize, this.gridSize);
    }
    drawApple() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.apple.x * this.gridCount, this.apple.y * this.gridCount, this.gridSize, this.gridSize);
    }
}

/* Snake class */
class Snake {
    constructor() {
        this.headX = 10;
        this.headY = 10;
        this.directionX = 0;
        this.directionY = 0;
    }
    move() {
        this.headX += this.directionX;
        this.headY += this.directionY;
    }
}

class Apple {
    constructor() {
        this.x = 10;
        this.y = 10;
    }
    checkCollision(headX, headY, gridCount) {
        if (this.x === headX && this.y === headY) {
            this.x = Math.floor(Math.random() * gridCount);
            this.y = Math.floor(Math.random() * gridCount);
        }
    }
}

function main() {
    game.clearDisplay();
    game.drawSnake();
    game.apple.checkCollision(game.snake.headX, game.snake.headY, game.gridCount);
    game.drawApple();
    game.snake.move();
    setTimeout(main, 1000 / game.fps);
}

/* Create the game object */
const game = new Game;
/* Run the game */
main();
