// deployment.js
function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.8) resolve("Server A deployed");
            else reject("Server A failed");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < 0.8) resolve("Server B deployed");
            else reject("Server B failed");
        }, 3000);
    });
}

// Promise.all
Promise.all([serverA(), serverB()])
    .then(results => console.log("Deployment completed for all servers:", results))
    .catch(err => console.error("Deployment error:", err));

// Promise.race
Promise.race([serverA(), serverB()])
    .then(fastest => console.log("Fastest response:", fastest))
    .catch(err => console.error("Fastest server failed:", err));
