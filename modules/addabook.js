import Display from './display.js';

const addBook = () => {
  document.getElementById('add').addEventListener('click', (e) => {
    e.preventDefault();
    Display.addtolist();
    Display.addtolocal();
  });
};
export default addBook;
