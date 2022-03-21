export default class MainBooks {
  constructor() {
    this.array = [];
  }

  lStorage() {
    const convertToLocalStorage = JSON.stringify(this.array);
    localStorage.setItem('book', convertToLocalStorage);
  }

  addBook(title, author) {
    const newBook1 = {
      title,
      author,
    };

    this.array.push(newBook1);
    this.lStorage();
  }

  remove(title, author) {
    this.array = this.array.filter((book) => book.title !== title || book.author !== author);
    this.lStorage();
  }
}