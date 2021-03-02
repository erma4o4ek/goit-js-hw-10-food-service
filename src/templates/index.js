import menuElement from './menu.json';
import menuTemplate from './templates/template.hbs';
import './changeTheme';
import './styles.css';
const markup = menuTemplate(menuElement);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);