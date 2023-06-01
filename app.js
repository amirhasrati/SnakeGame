/* SELECTIONS */
const mainContainer = document.querySelector('#main');

/* GAME DISPLAY */
const displayWidth = 500;
const displayHeight = 500;
const displayColor = '#6c584c';

function drawDisplay(width, height) {
    const gameDisplay = document.createElement('div');
    gameDisplay.style.width = `${displayWidth}px`;
    gameDisplay.style.height = `${displayHeight}px`;
    gameDisplay.style.backgroundColor = '#6c584c'
    gameDisplay.style.margin = 'auto';
    gameDisplay.style.position = 'relative';
    gameDisplay.id = 'gameDisplay';
    main.append(gameDisplay);
}

drawDisplay(displayWidth, displayHeight);

/* SNAKE LIMBS CLASS */
class Limb {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.posX = 0;
        this.posY = 0;
        this.direction = null;
        this.element = null;
        this.display = document.querySelector('#gameDisplay');
    }
    drawLimb(x, y) {
        this.posX = x;
        this.posY = y;
        this.element = document.createElement('div');
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.borderRadius = '25%';
        this.element.style.position = 'relative';
        this.element.style.left = `${this.posX}px`;
        this.element.style.top = `${this.posY}px`;
        this.element.style.backgroundColor = 'green';
        this.display.append(this.element);
    }
    moveLimb() {
        if (this.direction === 'left') {
            this.posX -= 50;
            if (this.posX < 0) {
                this.posX = 0;
                isRunning = false;
            }
            this.element.style.left = `${this.posX}px`;
        } else if (this.direction === 'up') {
            this.posY -= 50;
            if (this.posY < 0) {
                this.posY = 0;
                isRunning = false;
            }
            this.element.style.top = `${this.posY}px`;
        } else if (this.direction === 'right') {
            this.posX += 50;
            if (this.posX > 450) {
                this.posX = 450;
                isRunning = false;
            }
            this.element.style.left = `${this.posX}px`;
        } else if (this.direction === 'down') {
            this.posY += 50;
            if (this.posY > 450) {
                this.posY = 450;
                isRunning = false;
            }
            this.element.style.top = `${this.posY}px`;
        }
    }
}

/* SNAKE CLASS */
class Snake {
    constructor() {
        this.head = new Limb();
        this.tail = this.head;
        this.limbs = [this.head];
        this.turnPoints = [];
        this.length = 1;
    }
    turn(direction) {
        const turnPoint = {
            direction: direction,
            posX: this.head.posX,
            poxY: this.head.posY
        }
        this.turnPoints.push(turnPoint);
    }
}

// Create a snake
let snake = new Snake();
snake.head.drawLimb(0, 0);

let isRunning = false;
window.setInterval(() => {
    if (isRunning) {
        window.setInterval(() => {
            for (let limb of snake.limbs) {

            }
        }, 100);
    }
}, 100)


window.addEventListener('keydown', (e) => {
    isRunning = true;
    if (e.key === 'a') {
        snake.turn('left');
    } else if (e.key === 'w') {
        snake.turn('up');
    } else if (e.key === 'd') {
        snake.turn('right');
    } else if (e.key === 's') {
        snake.turn('down');
    }
})