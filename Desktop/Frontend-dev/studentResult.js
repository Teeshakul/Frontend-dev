class Student {
    constructor(name, marks){ this.name=name; this.marks=marks; }
    calculateAverage(){
        const sum = this.marks.reduce((a,b)=>a+b,0);
        return sum/this.marks.length;
    }
    getGrade(){
        const avg = this.calculateAverage();
        if(avg>=90) return "A";
        if(avg>=75) return "B";
        if(avg>=50) return "C";
        return "F";
    }
}

// Demo
const students = [
    new Student("Alice",[90,85,88]),
    new Student("Bob",[70,60,65]),
    new Student("Charlie",[40,45,35])
];

students.forEach(s=>{
    console.log(`${s.name}: Avg=${s.calculateAverage()}, Grade=${s.getGrade()}`);
});
