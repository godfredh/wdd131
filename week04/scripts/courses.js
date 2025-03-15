const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
      { sectionNum: 1, 
        roomNum: "STC 353", 
        enrolled: 26, 
        days: "TTh", 
        instructor: "Bro T"
      }, 
      { sectionNum: 2, 
        roomNum: "STC 347", 
        enrolled: 28, 
        days: "TTh", 
        instructor: "Sis A"
      },
  ],
  changeEnrollement: function(sectionNum, add = true) {
    this.sections.forEach(function(section) {
      if (section.sectionNum === sectionNum && section.enrolled > 0) {
        if (add) {
          section.enrolled++;
        }
        else {
          section.enrolled--;
        }
      }
    });
    renderSections(this.sections);
  }
  //The supper equeal is === not == 
  /*
  enrollStudent: function(sectionNum) {
    this.sections.forEach(function(section) {
      if (section.sectionNum === sectionNum) {
        section.enrolled++;
      }
    });
    renderSections(this.sections);
  },
  dropStudent: function(sectionNum) {
    this.sections.forEach(function(section) {
      //ensure that the numbers dont go negative.
      if (section.sectionNum === sectionNum && section.enrolled > 0) {
        section.enrolled--;
        //if (section.enrolled < 0) {
        //  section.enrolled -= 1;
        //} 
      }
    });
    renderSections(this.sections);
  }*/
};


/*aCourse.enrollStudent(1);
aCourse.dropStudent(2);*/

function setCourseInfo(course) {
  //select the elements
  const courseName = document.querySelector("#courseName");
  const courseCode = document.querySelector("#courseCode");
  //assing the values to the HTML object selected
  courseName.textContent = course.name;
  courseCode.textContent = course.code;
}

//CALL THE FUNCTION TO SEE THE RESULTS!
setCourseInfo(aCourse);

//Create the template thats going to store the actual values for both sections(the one on the object)
function sectionTemplate(sections) {
  //remember tr = table row, td = table data, and generaly the actual data on the html goes on the body
  return `<tr>
    <td>${sections.sectionNum}</td>
    <td>${sections.roomNum}</td>
    <td>${sections.enrolled}</td>
    <td>${sections.days}</td>
    <td>${sections.instructor}</td>
    </tr>`;
}

//create a function that maps through every section on the object (2) and call the template function so the data stores correctly.
function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

//event listeners
//enroll button
document.querySelector("#enrollStudent").addEventListener("click", function() {
  //get the VALUE of the document input with the .value
  const number = document.querySelector("#sectionNumber").value;
  //parse the numberfrom a string to an integer (parseInt), by default it is a string.
  const sectionNum = parseInt(number);
  aCourse.changeEnrollement(sectionNum, true);
});

//drop button
document.querySelector("#dropStudent").addEventListener("click", function() {
  const number = document.querySelector("#sectionNumber").value;
  const sectionNum = parseInt(number);
  aCourse.changeEnrollement(sectionNum, false);
});

//call the function with the value of the sections array of the object by using dot-notation
renderSections(aCourse.sections);