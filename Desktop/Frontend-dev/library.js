class Library {
    constructor() { this.books = []; }
    addBook(book) { this.books.push(book); }
    getAvailableBooks() { return this.books.filter(b=>b.available); }
    searchByAuthor(author) { return this.books.find(b=>b.author===author); }
}

// Demonstration
const lib = new Library();
lib.addBook({title:"JS Basics", author:"John", available:true});
lib.addBook({title:"Python 101", author:"Alice", available:false});
lib.addBook({title:"Data Structures", author:"John", available:true});

console.log("Available Books:", lib.getAvailableBooks());
console.log("Search by John:", lib.searchByAuthor("John"));
