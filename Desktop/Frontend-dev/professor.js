

function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(`Hello, I am ${this.name}`);
}

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function() {
    console.log(`Department: ${this.department}`);
}

function Professor(name, department, title) {
    Faculty.call(this, name, department);
    this.title = title;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showTitle = function() {
    console.log(`Title: ${this.title}`);
}

// Demonstration
const prof = new Professor("Tee", "CSE", "Dr.");
prof.greet();             // from Person
prof.showDepartment();    // from Faculty
prof.showTitle();         // from Professor
