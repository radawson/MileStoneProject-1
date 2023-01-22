
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
let snake = new Snake("John");
//snake.sayHi()

//let snakeTwo = new Snake("Meroni", 0,10)

//snakeTwo.newSnake()

//let snakeThree = new Snake("Larky", "4,16")
//snakeThree.sayHi()
//snakeThree.newSnake()

let snakeFour = new Snake("SuperLarky", 300, between(0, 600), 'dist/fullsnake.png')

//snakeFour.newSnake()

//

function between(x, y) {
    return Math.floor(
        Math.random() * (y - x) + x
    )
}

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

    getPosition() {
        alert(this.positionX, this.positionY)
    }
    /*
        loadImages(variableName) {
    
            mouseB = new Image() 
                brownmouse.src = variableName;
            
            mouseG = new Image() 
                graymouse.src = "dist/mouse-gray-right.png";
    
            
        }*/
}

let mouse = new Mouse("Queso", between(0, 600), between(0, 600), "dist/gray-mouse.png")


let mouseTwo = new Mouse("Fresco", between(0, 600), between(0, 600), "dist/gray-mouse.png")


//  let img = new Image ();
//  let div = document.getElementById("snakehead");

// img.onload = function() {
// alert("image is loaded")
//  };
//  img.src = "dist/snakehead.png"

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
newImage(snakeFour.url, snakeFour.positionX, snakeFour.positionY)