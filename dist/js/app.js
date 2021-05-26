const navBtn = document.querySelector('#navBtn');
const html = document.querySelector('html');

navBtn.addEventListener('click', () => {
  html.classList.toggle('open');
});
