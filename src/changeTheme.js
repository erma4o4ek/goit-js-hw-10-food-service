const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

currentTheme();

inputRef.addEventListener('change', switchTheme )

function currentTheme () {
const savedTheme = localStorage.getItem('Theme');
if(savedTheme === 'dark-theme') {
  bodyRef.classList.add('dark-theme');
  inputRef.checked = true;
}
}


function switchTheme (e) { 
  if(e.target.checked) {
      bodyRef.classList.add('dark-theme');
      bodyRef.classList.remove('light-theme');
      localStorage.setItem('Theme', Theme.DARK);
      return;
  }
  bodyRef.classList.add('light-theme');
  bodyRef.classList.remove('dark-theme');
  localStorage.setItem('Theme', Theme.LIGHT);
}