import notDuplicate from './notDuplicate.js';
import MainBooks from './mainBooks.js';

const container = document.getElementById('container');
const listOfBooks = new MainBooks();

if (localStorage.book) {
  const local = JSON.parse(localStorage.book);
  listOfBooks.array = local;
}

export default function display() {
  notDuplicate();
  listOfBooks.array.forEach((book) => {
    const cdiv = document.createElement('div');
    const rmBtn = document.createElement('button');
    const read = `
        <article id='book'>
            <p>"${book.title}"</p> by
            <p>${book.author}</p>
        </article>`;

    cdiv.innerHTML = read;
    cdiv.appendChild(rmBtn);
    container.appendChild(cdiv);
    cdiv.classList.add('book-container');

    rmBtn.innerHTML = 'remove';
    rmBtn.addEventListener('click', () => {
      container.removeChild(cdiv);
      return listOfBooks.remove(book.title, book.author);
    });
  });
}

const book = document.getElementById('form');
const bookElement = book.querySelectorAll('input');

bookElement[2].addEventListener('click', (e) => {
  if (bookElement[0].value !== '' && bookElement[1].value !== '') {
    listOfBooks.addBook(bookElement[0].value, bookElement[1].value);
    display();
    bookElement[0].value = '';
    bookElement[1].value = '';
  } else {
    e.preventDefault();
  }
});