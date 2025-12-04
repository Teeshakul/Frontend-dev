// pipeline.js

// Nested callbacks (callback hell)
function design(cb){ setTimeout(()=> {console.log("Design done"); cb();}, 1000); }
function build(cb){ setTimeout(()=> {console.log("Build done"); cb();}, 1000); }
function test(cb){ setTimeout(()=> {console.log("Test done"); cb();}, 1000); }
function deploy(cb){ setTimeout(()=> {console.log("Deploy done"); cb();}, 1000); }
function celebrate(){ setTimeout(()=> {console.log("Celebrate!");}, 1000); }

// Callback hell demonstration
design(()=> {
    build(()=> {
        test(()=> {
            deploy(()=> {
                celebrate();
            });
        });
    });
});

// Async/Await version (cleaner)
function delayLog(step) {
    return new Promise(resolve => setTimeout(()=> { console.log(step); resolve(); }, 1000));
}

async function runPipeline() {
    await delayLog("Design done");
    await delayLog("Build done");
    await delayLog("Test done");
    await delayLog("Deploy done");
    await delayLog("Celebrate!");
}
runPipeline();

// Comment: async/await improves readability by flattening nested callbacks
