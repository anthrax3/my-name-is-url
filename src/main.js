import Urls from 'my-name-is-url';
import escape from 'escape-html';
import strictUriEncode from 'strict-uri-encode';

const input = document.querySelector('.input');
const output = document.querySelector('.output');

// Check for data in url hash
const defaultText = 'Text to parse for urls.com';
const hashText = decodeURIComponent(location.hash.substring(1));
input.value = hashText || defaultText;

// Check text input for urls
function checkInput() {

  // Check input for urls
  const parsedUrls = Urls(escape(input.value)).filter(url => `<span class="url">${url}</span>`);
  output.innerHTML = `${parsedUrls} `;

  // Save current state in url hash
  location.hash = strictUriEncode(input.value);
}

// Run on page load
checkInput();

// Run every time content is changed
input.addEventListener('input', checkInput);
