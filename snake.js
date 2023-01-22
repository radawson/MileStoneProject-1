
//DEFINE NEW VARIABLES snake, mouse, score board, etc


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

// how fast should the game go? Snake move? 
let speed = 0.5;


//write a function that listens (eventListener) for clicks. Specifically when someone clicks "StartGame"

//window onload
window.addEventListener("load", () => {
    console.log("page is fully loaded");
});


class Snake {

    constructor(name, positionX, positionY, url) {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
        this.url = url;
    }


    sayHi() {
        alert(this.name);
    }

    newSnake() {
        alert(this.positionX, positionY)
    }


}


// Usage:
let snake = new Snake("SuperLarky", between(100,550),between(100,550), "dist/snakegame.png");

function between(x, y) {
    return Math.floor(
        Math.random() * (y - x) + x
    )
}

console.log(
    between(0, 100)
)

//attatch image to snake 4 w/ constructor

class Mouse {
    constructor(name, positionX, positionY, url) {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
        this.url = url;
    }

    sayHi() {
        alert(this.name);
    }

    newMouse() {
        alert(this.positionX, positionY)
    }

    
}

let mouse = new Mouse("Queso", between(100,550),between(100,550), "dist/mouse-gray-rightSMALL.png")



let mouseTwo = new Mouse("Fresco",between(100,550),between(100,550), "dist/mouse-gray-rightSMALL.png")

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
newImage(mouseTwo.url, mouseTwo.positionX, mouseTwo.positionY);
newImage(snake.url, snake.positionX, snake.positionY);

// if snake collides with mouse 
