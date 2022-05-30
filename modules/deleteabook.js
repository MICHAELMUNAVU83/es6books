import Display from './display.js';

const deleteBooke = () => {
  document.getElementById('book-list').addEventListener('click', (e) => {
    e.preventDefault();
    Display.delBook(e);
    Display.removelocal(e);
  });
};
export default deleteBooke();
