const container = document.getElementById('container');

export default function notDuplicate() {
  const remove = document.querySelectorAll('div');
  remove.forEach((book) => {
    container.removeChild(book);
  });
}