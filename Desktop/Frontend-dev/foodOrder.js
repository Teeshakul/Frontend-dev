const menu = { pizza: 300, burger:150, pasta:200 };

function calculateBill(orderItems){
    try{
        const prices = orderItems.map(item=>{
            if(!menu[item]) throw new Error(`Invalid item: ${item}`);
            return menu[item];
        });
        const total = prices.reduce((a,b)=>a+b,0);
        console.log("Total Bill:", total);
    }catch(err){
        console.error(err.message);
    }
}

// Demo
calculateBill(["pizza","pasta"]); // valid
calculateBill(["pizza","sushi"]); // invalid
