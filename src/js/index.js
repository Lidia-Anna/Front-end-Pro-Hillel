import PrintedBook from './PrintedBook.js';
import Ebook from './Ebook.js';

const ebook1 = new Ebook('New title', 'New author', 2000, 15);
console.log(ebook1.info);
ebook1.fileSize = 8;
console.log(ebook1.fileSize);
const printBook = new PrintedBook('New title', 'New author', 2000, 100);
printBook.pageCount = 10;
console.log(printBook.getDescription());
