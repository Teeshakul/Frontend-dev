class Employee {
    constructor(name, dept){ this.name=name; this.department=dept; }
    work(){ console.log(`${this.name} works in ${this.department}`); }
}

class Manager extends Employee {
    work(){ console.log(`${this.name} manages ${this.department}`); }
}

// Demo
const e=new Employee("Alice","IT");
const m=new Manager("Bob","HR");
e.work(); m.work(); // runtime polymorphism
