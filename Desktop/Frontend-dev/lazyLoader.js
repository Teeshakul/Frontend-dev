// lazyLoader.js
function loadProfile() { 
    return new Promise((resolve, reject) => 
        setTimeout(()=> Math.random()<0.8 ? resolve("Profile Loaded") : reject("Profile failed"), 2000)
    ); 
}
function loadPosts() { 
    return new Promise((resolve, reject) => 
        setTimeout(()=> Math.random()<0.8 ? resolve("Posts Loaded") : reject("Posts failed"), 1500)
    ); 
}
function loadMessages() { 
    return new Promise((resolve, reject) => 
        setTimeout(()=> Math.random()<0.8 ? resolve("Messages Loaded") : reject("Messages failed"), 1000)
    ); 
}

const startTime = Date.now();
Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
    .then(results => {
        results.forEach((res, idx) => {
            if(res.status==="fulfilled") console.log(`Module ${idx+1} succeeded:`, res.value);
            else console.log(`Module ${idx+1} failed:`, res.reason);
        });
        console.log("Total time:", Date.now()-startTime, "ms");
    });
