

const user = {
    name: "Tee",
    showName: () => {
        console.log(this.name); // undefined because arrow function does not bind 'this'
    }
};

user.showName();

// Fixed version using normal function
const userFixed = {
    name: "Tee",
    showName() {
        console.log(this.name); // 'this' refers to userFixed object
    }
};

userFixed.showName();
