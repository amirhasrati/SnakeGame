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
        this.direction = 'right';
        this.element = null;
        this.display = document.querySelector('#gameDisplay');
    }
    drawLimb(x, y) {
        this.posX = x;
        this.posY = y;
        this.element = document.createElement('div');
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.position = 'relative';
        this.element.style.left = `${this.posX}px`;
        this.element.style.top = `${this.posY}px`;
        this.element.style.backgroundColor = 'green';
        this.display.append(this.element);
    }
    moveLimb() {
        if (this.direction === 'left') {
            this.posX -= 50;
            this.element.style.left = `${this.posX}px`;
        } else if (this.direction === 'up') {
            this.posY -= 50;
            this.element.style.top = `${this.posY}px`;
        } else if (this.direction === 'right') {
            this.posX += 50;
            this.element.style.left = `${this.posX}px`;
        } else if (this.direction === 'down') {
            this.posY += 50;
            this.element.style.top = `${this.posY}px`;
        }
    }
}

// Initialize the head of the snake
let head = new Limb();
head.drawLimb(0, 0);

let isRunning = false;
window.setInterval(() => {
    if (isRunning) {
        window.setInterval(moveHead(), 100);
    }
}, 100)


window.addEventListener('keydown', (e) => {
    isRunning = true;
    if (e.key === 'a') {
        head.direction = 'left';
    } else if (e.key === 'w') {
        head.direction = 'up';
    } else if (e.key === 'd') {
        head.direction = 'right';
    } else if (e.key === 's') {
        head.direction = 'down';
    }
})

function moveHead() {
    head.moveLimb();
}


