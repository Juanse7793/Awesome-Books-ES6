import { DateTime } from './node_modules/luxon/src/luxon.js';
import display from './modules/display.js';

// Nav Selectors
const GoToBookList = document.querySelector('#book-list');
const GoToAddBook = document.querySelector('#add-book');
const GoToContact = document.querySelector('#contact');

// Section Selectors
const bookListSection = document.querySelector('.all-books-cont');
const addBookSection = document.querySelector('.add-book-cont');
const contactSection = document.querySelector('.contact-cont');

// Show bookList
bookListSection.classList.toggle('show');

// NavBar Eventlisteners
GoToBookList.addEventListener('click', () => {
  bookListSection.classList.add('show');
  addBookSection.classList.remove('show');
  contactSection.classList.remove('show');
});

GoToAddBook.addEventListener('click', () => {
  addBookSection.classList.add('show');
  bookListSection.classList.remove('show');
  contactSection.classList.remove('show');
});

GoToContact.addEventListener('click', () => {
  contactSection.classList.add('show');
  addBookSection.classList.remove('show');
  bookListSection.classList.remove('show');
});

display();

const dt = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('date-time').innerHTML = dt;
