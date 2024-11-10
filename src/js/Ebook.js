import Book from "./Book.js";
class Ebook extends Book {
    _fileSize = 0;
    constructor(title, author, year, fileSize) {
        super(title, author, year);
        this.fileSize = fileSize;
    }

    get info() {
        super.info;
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, File Size: ${this._fileSize}MB`;
    }

    getDescription() {
        super.getDescription();
        return `File size is ${this._fileSize} MB.`;
    }

    set fileSize(value) {
        if (value < 0) throw new Error('Size of file is < 0');
        this._fileSize = value;
    }

    get fileSize() {
        return this._fileSize;
    }
}
export default Ebook;