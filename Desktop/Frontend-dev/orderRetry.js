// orderRetry.js
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            Math.random()<0.5 ? resolve("Order Success") : reject("Order Failed");
        }, 1000);
    });
}

async function processOrder() {
    for(let i=1;i<=3;i++){
        try {
            const result = await submitOrder();
            console.log(`Attempt ${i}: Success`);
            return;
        } catch(err) {
            console.log(`Attempt ${i}: Failed`);
        }
    }
    throw new Error("Order could not be processed");
}

processOrder().catch(err => console.error(err.message));
