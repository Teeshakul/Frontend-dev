"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const empList = [
    new Employee(1, "Amit", "HR", 30000),
    new Employee(2, "Sara", "IT", 40000),
    new Employee(3, "Kiran", "Sales", 35000),
    new Employee(4, "Vishal", "IT", 45000),
    new Employee(5, "Nitin", "Admin", 28000)
];

const totalPayout = empList.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

console.log("Total Annual Payout:", totalPayout);
