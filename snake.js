
//let canvas;


let head;
let mouse;
let ball;

let dots;
let mouse_x;
let mouse_y;

//snake can only move left
let leftDirection = true;
let rightDirection = false;
let upDirection = false;
let downDirection = false;
let inGame = true;

const dot_size = 20; // size of mouse and snake body length
const all_dots = 1800; // max amount of dots that can generate in grid
const max_random = 58; // calculation to position the mouse at random
const delay = 150;  // speed of game


// according to stackoverflow.com to detect ARROW KEY presses use the following keycodes:
const left_key = 37;
const right_key = 39;
const up_key = 38;
const down_key = 40;

//putting snake joint coordinates in an array
let x = snakeJoints(all_dots);
let y = snakeJoints(all_dots);
