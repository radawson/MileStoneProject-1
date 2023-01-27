
let scoreBoard = document.querySelector(".scoreBoard")
let grid = document.querySelector(".grid");
let flash = document.querySelector(".flash");
// let restartGame = document.getElementById(".restartGame");
let newGame = document.getElementById(".newGame");
let turnCount = 0;


var mouse;
var mouseTwo;
var poison;
var snake;

let width = 10;
let height = 10;

// how to track score    score = document.getElementById("score");
let score = 0;

//write a function that listens (eventListener) for clicks. Specifically when someone clicks "StartGame"

//window onload
window.addEventListener("load", () => {
    setUpPage(() => startGame());

});
//delay event listener

class Snake {

    constructor(name, positionX, positionY, url, audio) {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
        this.url = url;
        this.audio = audio;
        this.width = 67;
        this.height = 80;
    }
    image = HTMLElement;

    sayHi() {
        alert(this.name);
    }

    newSnake() {
        alert(this.positionX, positionY)
    }
    updateCoords(newX, newY) {
        this.image.style.left = newX + 'px' ;
        this.image.style.bottom = newY + 'px';
    }
}

// Usage:


function between(x, y) {
    return Math.floor(
        Math.random() * (y - x) + x
    )
}

//bottom value + width of snake
//attatch image to snake 4 w/ constructor
class Mouse {
    constructor(name, positionX, positionY, url) {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
        this.url = url;
        this.width = 50;
        this.height = 50;
    }
    image = HTMLElement;

    sayHi() {
        alert(this.name);
    }

    newMouse() {
        alert(this.positionX, positionY)
    }
    updateCoords(newX, newY) {
        this.image.style.left = newX + 'px' ;
        this.image.style.bottom = newY + 'px';
    }


}

class Poison {
    constructor(name, positionX, positionY, url) {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
        this.url = url;
        this.width = 65;
        this.height = 70;
    }
    image = HTMLElement;

    sayHi() {
        alert(this.name);
    }

    newPoison() {
        alert(this.positionX, positionY)
    }

    updateCoords(newX, newY) {
        this.image.style.left = newX + 'px' ;
        this.image.style.bottom = newY + 'px';
    }

}

//pulls our images from dist onto the browser

function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'absolute'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

//on load event listener will places characters on xy axis between the points listed below then follow the mainLoop function

function setUpPage() {

    mouse = new Mouse("Queso", between(0, 550), between(0, 550), "dist/mouse-gray-rightSMALL.png");
    mouseTwo = new Mouse("Fresco", between(0, 550), between(0, 550), "dist/mouse-brown.png");
    poison = new Poison("GameOver", between(0, 600), between(0, 600), "dist/snakepoison.png");
    snake = new Snake("SuperLarky", between(0, 550), between(0, 550), "dist/snakegame.png");
    mouse.image = newImage(mouse.url, mouse.positionX, mouse.positionY);
    // newImage(mouseTwo.url, mouseTwo.positionX, mouseTwo.positionY);
    snake.image = newImage(snake.url, snake.positionX, snake.positionY);
    poison.image = newImage(poison.url, poison.positionX, poison.positionY);
    mainLoop();

}

function startGame() {
 //render
    
}

//collision detection btwn point and rectangle
// comparing x and y coords and W H
// if there is a gap there's no collission ( line 156)
// if there is no gap the objects have collided (line 160)
function collisionDetection(entity1, entity2) {
    if (
        entity1.positionX < entity2.positionX + entity2.width &&
        entity1.positionX + entity1.width > entity2.positionX && //right side of E1 closer than E2 if not they cant touch
        entity1.positionY < entity2.positionY + entity2.height && //grows from top to bottom. If top of E1 isnt heigher than bottom of E2 they cant touch
        entity1.positionY + entity1.height > entity2.positionY // is E1 lower than E2 if true that they are touching


    ) {
        return false;
    } else {
        return true;
    }
}


function mainLoop() {
    let count = 0;
    // input

    //update
    mouse.updateCoords(between(100, 550), between(0, 550));
    //mouseTwo.updateCoords(between(100, 550), between(0, 550));
    poison.updateCoords(between(100, 550), between(0, 550));
    snake.updateCoords(between(100, 550), between(0, 550));

   

    if (collisionDetection(mouse, snake)) {
        score += 1;
        //alert("YUM! Feed me again! +1pt!")
    } else if (collisionDetection(snake, poison)) {
        // alert("AArgh! You died");
        score -= 10;
    } else {
        count++;
    }

    document.querySelector("#score").innerHTML = score;
}

function gamePlay() {
    if (score > 10) {
        greeting = "YOU SAVED SIR SNAKE FROM STARVATION! YOU WON";
        startGame();
    }

    else if (maxTurns === 20) {
        greeting = "YOU RAN OUT OF TURNS";
        endGame();
    }

    else {
        greeting = "HOW COULD YOU LET SIR SNAKE STARVE? GAME OVER";
    }


}

// function endGame(){
//     setUpPage.reload;
//     return;
// }

// async function sleep(time) {
// return new Promise(resolve => {
// setTimeout(resolve, time)
//    })}


//function endGame() {
// alert("GAME OVER! Exceeded 20 turns");

//  location.reload();}

// https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage

const numberOfHighScore = 10;
const highScores = "highScores";

const highScoreString = localStorage.getItem(highScores);
const highScore = JSON.parse(highScoreString)??
    [];

const lowestScore = highScores[numberOfHighScore - 1]?.score ?? 0;



function checkHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem(highScores)) ?? [];
    const lowestScore = highScores[numberOfHighScore - 1]?.score ?? 0;

    if (score > lowestScore) {
        saveHighScore(score, highScores); // TODO
        showHighScores(); // TODO
    }
}

function gameOver() {
    // setUpPage.reload();
    checkHighScore(account.score);
}

function saveHighScore(score, highScores) {
    const name = prompt('You got a highscore! Create Account:');
    const newScore = { score, name };

    // 1. Add to list
    highScores.push(newScore);

    // 2. Sort the list
    highScores.sort((a, b) => b.score - a.score);

    // 3. Select new list
    highScores.splice(numberOfHighScore);

    // 4. Save to local storage
    localStorage.setItem(highScores, JSON.stringify(highScores));
};

const highScoreList = document.getElementById(highScores);

// highScoreList.innerHTML = highScores.map((score) =>
//     `<li>${score.score} - ${score.name}`
// );


function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem(highScores)) ?? [];
    const highScoreList = document.getElementById(highScores);

    highScoreList.innerHTML = highScores
        .map((score) => `<li>${score.score} - ${score.name}`)
        .join('');
}
