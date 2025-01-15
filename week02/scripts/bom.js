// Select the necessary DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add a click event listener to the Add Chapter button
button.addEventListener('click', function () {
  // Ensure the input field is not blank
  if (input.value.trim() !== '') {
    // Create and populate the list item
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';

    // Append the delete button to the list item and the list item to the list
    li.append(deleteButton);
    list.append(li);

    // Add an event listener to the delete button to remove the list item
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // Clear the input field and set focus back to it
    input.value = '';
    input.focus();
  } else {
    // If input is blank, focus on the input field
    input.focus();
  }
});
