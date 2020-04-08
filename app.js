const textarea = document.querySelector('textarea');
const debounced = document.querySelector('#debounced');
const placekitten = document.querySelector('#placekitten');

let timeout;
textarea.addEventListener('input', (e) => {
  debounced.removeAttribute('class');
  placekitten.style.display = 'none';
  
  if (e.data === null) {
    debounced.textContent = 'Type something!';
    clearTimeout(timeout);
    return;
  } else {
    debounced.textContent = '';
    clearTimeout(timeout);
  }
 
  timeout = setTimeout(() => {
    debounced.className = 'animation';
    debounced.textContent = 'You just typed something!';
    getKitten();
  }, 750);
  
});

function getKitten() {
  const width = (Math.floor( Math.random() * 3 ) + 1) * 100;
  const height = (Math.floor( Math.random() * 3 ) + 1) * 100;
  placekitten.style.backgroundImage = `url("http://placekitten.com/${width}/${height}")`;
  placekitten.style.display = 'block';
}