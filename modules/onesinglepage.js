const onePage = () => {
  const list = document.getElementById('list');
  const addNew = document.getElementById('add-new');
  const contact = document.getElementById('contact');
  const firstPage = document.getElementById('list-page');
  const secondPage = document.getElementById('add-page');
  const thirdPage = document.getElementById('contact-page');

  addNew.addEventListener('click', () => {
    secondPage.style.display = 'flex';
    firstPage.style.display = 'none';
    thirdPage.style.display = 'none';
  });

  contact.addEventListener('click', () => {
    thirdPage.style.display = 'flex';
    secondPage.style.display = 'none';
    firstPage.style.display = 'none';
  });

  list.addEventListener('click', () => {
    firstPage.style.display = 'block';
    secondPage.style.display = 'none';
    thirdPage.style.display = 'none';
  });
};

export default onePage();