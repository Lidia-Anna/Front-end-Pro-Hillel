class Book {
    _year = null;
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get info() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this._year}.`;
    }

    getDescription() {
        return `This is a book titled ${this.title} by ${this.author}.`;
    }

    set year(value) {
        if (typeof value !== 'number') throw new Error('Year is not a number');
        this._year = value;
    }

    get year() {
        return this._year;
    }
}
export default Book;