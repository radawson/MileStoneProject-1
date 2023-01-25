//DEFINE NEW VARIABLES snake, mouse, score board, etc

//Classes
class Mouse {
    constructor(name, positionX, positionY, url) {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
        this.icon = new Image();
        this.icon.src = url;
        this.width = 50;
        this.height = 50;
    }
    sayHi() {
        alert(this.name);
    }
    newMouse() {
        alert(this.positionX, positionY)
    }
    updateCoords(newX, newY) {
        this.positionX = newX;
        this.positionY = newY;
    }
}

class Poison {
    constructor(name, positionX, positionY, url) {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
        this.icon = new Image();
        this.icon.src = url;
        this.width = 60;
        this.height = 75;
    }
    sayHi() {
        alert(this.name);
    }
    newPoison() {
        alert(this.positionX, positionY)
    }
    updateCoords(newX, newY) {
        this.positionX = newX;
        this.positionY = newY;
    }
}

class Snake {
    constructor(name, positionX, positionY, url, audio) {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
        this.icon = new Image();
        this.icon.src = url;
        this.audio = audio;
        this.width = 67;
        this.height = 80;
    }
    sayHi() {
        alert(this.name);
    }
    newSnake() {
        alert(this.positionX, positionY)
    }
    updateCoords(newX, newY) {
        this.positionX = newX;
        this.positionY = newY;
    }
}

// Variables
const requiredWins = 3
const names = ["Queso", "Fresco", "Pablo", "Speedy","Sleepy","Dopey","Grumpy","Sneezy","Bashful","Happy","Doc"]

// Canvas elements
const canvas = document.getElementById("snake-snack");
const ctx = canvas.getContext("2d");

// Gameplay
const delay = ms => new Promise(res => setTimeout(res, ms));
const gridheight = 600;
const gridwidth = 600;
const maxTurns = 25;
var turnCount = 0;

// creatures
const mice = [];
// Minimum number of mice to generate 
const mouseCount = Math.floor(Math.random() * 10 + 2);
var mouse;
var mouseTwo;
var poison;
var snake;

//make our grid 10 by 10
let width = 10;

// how to track score
let score = 0;

//how to track mice intake (point accumulation)
let mouseIndex = 0;

//write a function that listens (eventListener) for clicks. Specifically when someone clicks "StartGame"

//window onload
window.addEventListener("load", () => {
    setUpPage(() => renderObjects());

});

// Usage:

function between(x, y) {
    return Math.floor(
        Math.random() * (y - x) + x
    )
}

function collisionDetection(entity1, entity2) {
    if (
        entity1.positionX < entity2.positionX + entity2.width &&
        entity1.positionX + entity1.width > entity2.positionX && //right side of E1 closer than E2 if not they cant touch 
        entity1.positionY < entity2.positionY + entity2.height && //grows from top to bottom. If top of E1 isnt heigher than bottom of E2 they cant touch
        entity1.positionY + entity1.height > entity2.positionY // is E1 lower than E2 if true that they are touching
    ) {
        return true;
    } else {
        return false;
    }
}

function renderObjects() {
    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    ctx.drawImage(poison.icon, poison.positionX, poison.positionY);
    ctx.drawImage(snake.icon, snake.positionX, snake.positionY);
    mice.forEach(mouse => {
        ctx.drawImage(mouse.icon, mouse.positionX, mouse.positionY);
    });
}

function setUpPage() {
    document.getElementById('button1').innerHTML = 'Start Game';
    document.getElementById('score').innerHTML = score;
    for (let i = 0; i < mouseCount; i++) {
        mice.push(new Mouse(names[i], between(50, 550), between(50, 550), "dist/mouse-gray-rightSMALL.png"));
    }
    poison = new Poison("GameOver", between(50, 550), between(50, 550), "dist/snakepoison.png");
    snake = new Snake("SuperLarky", between(50, 550), between(50, 550), "dist/snakegame.png");
}

function endGame(message) {
    alert(message);
    document.getElementById('button1').style.display = 'none';
}

function getInput() {
    document.querySelector('#button1').innerHTML = 'Next Turn';
    document.querySelector('#message').style.display = 'none';
    mice.forEach(mouse => {
        mouse.updateCoords(between(50, 750), between(0, 550));
    });
    poison.updateCoords(between(50, 750), between(0, 550));
    snake.updateCoords(between(50, 750), between(0, 550));
}

function updateObjects() {
    for (let i = 0; i < mice.length; i++) {
        let mouse = mice[i];
        if (collisionDetection(mouse, snake)) {
            score += 1;
            mice.splice(i, 1);
            document.querySelector('#message').style.display = 'block';
            document.querySelector('#mouseName').innerHTML = mouse.name;
        }
        // if mouse hits poison, the mouse is rmeoved
        if (collisionDetection(mouse, poison)) {
            mice.splice(i, 1);
        }
        if (mice.length == 0) {
            endGame("All mice are dead!");
        }
    }

    if (collisionDetection(snake, poison)) {
        endGame("AArgh! Killed by poison")
    }
}

async function mainLoop() {
while (true){
    // pause
    await delay(500);

    // input
    getInput();

    //render
    renderObjects();

    //update
    updateObjects();
    turnCount++;
    if (turnCount == maxTurns) {
        endGame("You have run out of turns.");
    }
    document.getElementById('score').innerHTML = score;
}
}