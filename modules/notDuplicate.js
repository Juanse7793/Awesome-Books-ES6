const container = document.getElementById('container');

const notDuplicate = () => {
  const remove = document.querySelectorAll('div');
  remove.forEach((book) => {
    container.removeChild(book);
  });
};

export default notDuplicate;