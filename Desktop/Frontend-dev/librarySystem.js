"use strict";

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        this.isIssued = true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

const books = [
    new Book("Harry Potter", "J.K. Rowling", "101"),
    new Book("Atomic Habits", "James Clear", "102"),
    new Book("Ikigai", "Hector Garcia", "103")
];

console.log("Available Books:");
console.log(books.filter(b => !b.isIssued));

function issueByISBN(isbn) {
    const book = books.find(b => b.isbn === isbn);
    if (book) book.issueBook();
}

issueByISBN("102");
console.log("After issuing ISBN 102:", books);
