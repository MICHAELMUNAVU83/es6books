import Display from './modules/display.js';
import addBook from './modules/addabook.js';
import deleteBooke from './modules/deleteabook.js';
import onePage from './modules/onesinglepage.js';
import displayDate from './modules/date.js';

displayDate();
setInterval(displayDate, 1000);

addBook();
deleteBooke();
onePage();

window.addEventListener('load', () => {
  Display.preservelocal();
});
