
//DEFINE NEW VARIABLES snake, mouse, score board, etc
const requiredWins = 3
// const delay = ms => new Promise(res => setTimeout(res, ms));
// const gridheight = "100vh";
// const gridwidth = "100vw";
const maxTurns = 25;


let scoreBoard = document.querySelector(".scoreBoard")
let grid = document.querySelector(".grid");
let flash = document.querySelector(".flash");
let restartGame = document.getElementById(".restartGame");
let newGame = document.getElementById(".newGame");
let turnCount = 0;
// creatures
var mouse;
var mouseTwo;
var poison;
var snake;

// Gameplay



//make our grid 10 by 10
 let width = 10;

// how to track score
//  score = document.getElementById("score");
let score = 0;


// Play game




//how to track mice intake (point accumulation)
let mouseIndex = 0;

//write a function that listens (eventListener) for clicks. Specifically when someone clicks "StartGame"

//window onload
window.addEventListener("load", () => {
    setUpPage(() => renderObjects());

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
        this.url = url;
        this.width = 65;
        this.height = 70;
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



function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'absolute'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}



// if snake collides with mouse
//collision between mouse and snake increases point
// collision between snake and poison game over

//boundary box window.location
//compare with the mouse /poison

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


async function sleep(time) {
return new Promise(resolve => {
setTimeout(resolve, time)
   })
}


function setUpPage() {
    document.querySelector("#score").innerHTML=score;
    mouse = new Mouse("Queso", between(0, 550), between(0, 550), "dist/mouse-gray-rightSMALL.png");
    mouseTwo = new Mouse("Fresco", between(0, 550), between(0, 550), "dist/mouse-brown.png");
    poison = new Poison("GameOver", between(0, 600), between(0, 600), "dist/snakepoison.png");
    snake = new Snake("SuperLarky", between(0, 550), between(0, 550), "dist/snakegame.png");
    mainLoop();
}



//function endGame() {
   // alert("GAME OVER! Exceeded 20 turns");
  //  location.reload();}

//NEED TO MAKE RELOAD SLOWER add await or setInterval

// function sleep(ms) {
//    return new Promise(resolve => setTimeout(resolve,ms));
// }



function mainLoop() {
    let count = 0;
    // input

    //update
    mouse.updateCoords(between(100, 550), between(0, 550));
    mouseTwo.updateCoords(between(100, 550), between(0, 550));
    poison.updateCoords(between(100, 550), between(0, 550));
    snake.updateCoords(between(100, 550), between(0, 550));

    //render
    newImage(mouse.url, mouse.positionX, mouse.positionY);
    // newImage(mouseTwo.url, mouseTwo.positionX, mouseTwo.positionY);
    newImage(snake.url, snake.positionX, snake.positionY);
    newImage(poison.url, poison.positionX, poison.positionY);

    if (collisionDetection(mouse, snake)) {
        score += 1;
        //alert("YUM! Feed me again! +1pt!")
    } else if (collisionDetection(snake, poison)) {
       // alert("AArgh! You died");
       score -= 1;
    } else {
        count++;
    }
    if (count = 10) {
        endGame();
    }
    document.querySelector("#score").innerHTML=score;
}

function endGame(){
    setUpPage.reload;
    return;
}