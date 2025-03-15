const steps = ["one", "two", "three"];
const listTemplate = function(step) {
  return `<li>${step}</li>`;
};
const stepsHtml = steps.map(listTemplate);
//document.querySelector("#myList").innerHTML = stepsHtml.join("");

const letters = ["A", "B", "A"];

const getGpa = function(letter) {
    let points = 0;
    if (letter === "A") {
        points = 4;
    }
    else if (letter === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = letters.map(getGpa);
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;
console.log(gpa);

const numbers = [12, 34, 21, 54];

const luckyNumber = 21;

let luckyIndex = numbers.indexOf(luckyNumber);
console.log(luckyIndex);