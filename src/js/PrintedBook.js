import Book from "./Book.js";

class PrintedBook extends Book {
    _pageCount = 0;
    constructor(title, author, year, pageCount) {
        super(title, author, year);
        this.pageCount = pageCount;
    }

    get info() {
        super.info;
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Pages: ${this._pageCount}`;
    }

    getDescription() {
        super.getDescription();
        return `It has ${this._pageCount} pages.`;
    }

    set pageCount(value) {
        if (value === 0 || value < 0) throw new Error('Value of pages must be > 0');
        this._pageCount = value;
    }

    get pageCount() {
        return this._pageCount;
    }
}
export default PrintedBook;