

class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

// Demonstration
const student2 = new Student("Tee", "CSE");
student2.showName();
student2.showBranch();
