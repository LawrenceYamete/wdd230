const list = document.querySelector('ul');

const input = document.querySelector('input');

const button = document.querySelector('button');

button.addEventListener('click', function(){
    let item = input.value;
    input.value = '';

const item_list = document.createElement('li');
const text_list = document.createElement('span');
const button = document.createElement('button');

item_list.appendChild(text_list);
text_list.textContent = item;
item_list.appendChild(button);
button.textContent = '❌';
list.appendChild(item_list);

button.addEventListener('click', function() {
  list.removeChild(item_list);
});
});