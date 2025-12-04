// delivery.js
function randomDelay() {
    return Math.floor(Math.random()*1000)+1000; // 1-2 sec
}

function takeOrder() {
    return new Promise((res, rej) => setTimeout(()=> Math.random()<0.8 ? res("Order taken") : rej("Order failed"), randomDelay()));
}
function prepare() {
    return new Promise((res, rej) => setTimeout(()=> Math.random()<0.8 ? res("Food prepared") : rej("Prepare failed"), randomDelay()));
}
function pack() {
    return new Promise((res, rej) => setTimeout(()=> Math.random()<0.8 ? res("Package ready") : rej("Pack failed"), randomDelay()));
}
function dispatch() {
    return new Promise((res, rej) => setTimeout(()=> Math.random()<0.8 ? res("Out for delivery") : rej("Dispatch failed"), randomDelay()));
}
function deliver() {
    return new Promise((res, rej) => setTimeout(()=> Math.random()<0.8 ? res("Delivery completed!") : rej("Delivery failed"), randomDelay()));
}

async function runPipeline() {
    console.log("Start Pipeline");
    try {
        console.log("Step 1:", await takeOrder());
        console.log("Step 2:", await prepare());
        console.log("Step 3:", await pack());
        console.log("Step 4:", await dispatch());
        console.log(await deliver());
    } catch(err) {
        console.error("Pipeline failed!", err);
    }
}

runPipeline();
