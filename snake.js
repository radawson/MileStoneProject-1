
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

    constructor(name, positionX, positionY) {
        this.name = name;
        this.positionX = positionX
        this.positionY = positionY
    }


    sayHi() {
        alert(this.name);
    }

    newSnake() {
        alert(this.positionX, positionY)
    }


}

// Usage:
let snake = new Snake("John");
//snake.sayHi()

//let snakeTwo = new Snake("Meroni", 0,10)

//snakeTwo.newSnake()

//let snakeThree = new Snake("Larky", "4,16")
//snakeThree.sayHi()
//snakeThree.newSnake()

let snakeFour = new Snake("SuperLarky", between(0,600),between(0,600))

//snakeFour.newSnake()

//

function between(x, y) {
    return Math.floor(
        Math.random() * (y - x) + x
    )
}

console.log(
    between(0, 600)
)

//attatch image to snake 4 w/ constructor

