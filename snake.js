
//DEFINE NEW VARIABLES snake, mouse, score board, etc
const requiredWins = 3

let scoreBoard = document.querySelector(".scoreBoard")
let grid = document.querySelector(".grid");
let flash = document.querySelector("flash");
let restartGame = document.getElementById("restartGame");
let newGame = document.getElementById("newGame");


//make our grid 10 by 10
let width = 10;

// how to track score
let score = 0;

//how to track mice intake (point accumulation)
let mouseIndex = 0;


//write a function that listens (eventListener) for clicks. Specifically when someone clicks "StartGame"

//window onload
window.addEventListener("load", () => {
    console.log("page is fully loaded");
});


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


}


// Usage:
let snake = new Snake("SuperLarky", between(100, 550), between(100, 550), "dist/snakegame.png");

function between(x, y) {
    return Math.floor(
        Math.random() * (y - x) + x
    )
}


//bottom value + width of snake 
//attatch image to snake 4 w/ constructor

class Mouse {
    constructor(name, positionX, positionY, url,) {
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


}

let mouse = new Mouse("Queso", between(100, 550), between(100, 550), "dist/mouse-gray-rightSMALL.png")



let mouseTwo = new Mouse("Fresco", between(100, 550), between(100, 550), "dist/mouse-gray-rightSMALL.png")


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


}
let poison = new Poison("GameOver", between(100, 550), between(100, 550), "dist/snakepoison.png")


function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'absolute'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

newImage(mouse.url, mouse.positionX, mouse.positionY);
newImage(snake.url, snake.positionX, snake.positionY);
newImage(poison.url, poison.positionX, poison.positionY)

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
        return true;
    } else {
        return false;
    }
}
