const products=[
    {id:1,name:"Phone",category:"Electronics",price:500,stock:10},
    {id:2,name:"Laptop",category:"Electronics",price:1000,stock:2},
    {id:3,name:"Shirt",category:"Clothing",price:50,stock:20},
    {id:4,name:"Pants",category:"Clothing",price:60,stock:5}
];

function getLowStockProducts(){ return products.filter(p=>p.stock<5); }
function sortProductsByPrice(){ return [...products].sort((a,b)=>a.price-b.price); }
function calculateTotalInventoryValue(){ return products.reduce((sum,p)=>sum+p.price*p.stock,0); }
function groupByCategory(){
    return products.reduce((acc,p)=>{
        if(!acc[p.category]) acc[p.category]=[];
        acc[p.category].push(p);
        return acc;
    },{});
}

// Demo
console.log("Low Stock:",getLowStockProducts());
console.log("Sorted by Price:",sortProductsByPrice());
console.log("Total Inventory Value:",calculateTotalInventoryValue());
console.log("Grouped by Category:",groupByCategory());
