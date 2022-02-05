const list = document.querySelector('ul');

const input = document.querySelector('input');

const button = document.querySelector('button');

focusMethod = function getFocus() {
  document.getElementById("favchap").focus();
}

button.addEventListener('click', function(){
    let item = input.value;
    input.value = '';

const item_list = document.createElement('li');
const text_list = document.createElement('span');
const button = document.createElement('button');

item_list.append(text_list);
text_list.textContent = item;
item_list.append(button);
button.textContent = '❌';
list.append(item_list);

button.addEventListener('click', function() {
  list.removeChild(item_list);
});
});