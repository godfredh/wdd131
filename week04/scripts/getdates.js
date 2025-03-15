//Select the DOM elements for output
const year = document.querySelector("#currentYear");

const lastMod = document.querySelector("#lastModified");


//use the date object
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

//same but with last modified
let oLastModif = new Date(document.lastModified);

lastMod.innerHTML = `<span class="highlight">${oLastModif}</span>`;