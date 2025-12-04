"use strict";

// console.log(score); // undefined (var hoisted)
// announce(); // "Game started"

var score = 50;
function announce() { console.log("Game started"); }

let status = "ready";

function startGame() {
    console.log(status); // works because let is initialized before call
}

startGame();

// Arrow version (not hoisted)
const startGame2 = () => console.log(status);
startGame2();
