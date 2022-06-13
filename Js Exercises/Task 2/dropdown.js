function addItem() {
   var text = document.getElementById('newItemText').value;
   var value = document.getElementById('newItemValue').value;

var optionElement = document.createElement('option')
optionElement.textContent = text;
optionElement.value = value;

var menuElement = document.getElementById('menu');
menuElement.appendChild(optionElement);

document.getElementById('newItemText').value = null;
document.getElementById('newItemValue').value = null;

}