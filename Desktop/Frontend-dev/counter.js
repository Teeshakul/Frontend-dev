let count = 0;

function increment() {
    count++;
    console.log("Count:", count);

    function inner() {
        console.log("Inner Count Access:", count);
    }
    inner();
}

function decrement() {
    count--;
    console.log("Count:", count);

    function inner() {
        console.log("Inner Count Access:", count);
    }
    inner();
}

// Simulated clicks
increment();
increment();
decrement();
