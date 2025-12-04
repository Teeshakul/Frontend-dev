const data=[
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(dataset){ 
        if(!dataset || !dataset.length) throw new Error("Dataset empty");
        this.dataset = dataset; 
    }
    getActiveUsers(){ return this.dataset.filter(d=>d.steps>7000); }
    getAverageCalories(){ return this.dataset.reduce((sum,d)=>sum+d.calories,0)/this.dataset.length; }
    getUserSummary(){ return this.dataset.map(d=>`${d.user}: ${d.steps} steps, ${d.calories} calories`); }
}

// Demo
const fa = new FitnessAnalytics(data);
console.log("Active Users:",fa.getActiveUsers());
console.log("Avg Calories:",fa.getAverageCalories());
console.log("User Summary:",fa.getUserSummary());
