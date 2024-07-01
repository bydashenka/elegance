import '../scss/login.css';
import header from '../component/header.js';
import log from '../component/log.js';
import footer from '../component/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#header').innerHTML = header();
  document.querySelector('#log').innerHTML = log();
  document.querySelector('#footer').innerHTML = footer();
});
