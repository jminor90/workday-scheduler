// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const $containerFluid = $('.container-fluid')
const currentDate = dayjs().format('MMMM D YYYY')
const $currentDate = $('#currentDay')


//prints Current Date
$currentDate.append(currentDate)
console.log(currentDate)

const currentTime = dayjs().hour()

let workDay = [
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
]

for (i=0; i < workDay.length; i++) {
  //Define
  let hourListDiv = $('<div>'); 
  let hourListChild = $('<div>');
  let hourListTextArea = $('<textarea>')
  let hourListSaveBtn = $('<button>')
  let saveBtnIcon = $('<i>')

  //Classes and Text Content
  //hourListDiv.text(workDay[i])
  hourListDiv.addClass('row time-block past')
  hourListDiv.attr('id', workDay[i])

  if (workDay[i] == currentTime) {
    hourListDiv.addClass('row time-block present')
  } else if (workDay[i] > currentTime ) {
    hourListDiv.addClass('row time-block future')
  } else if (workDay[i] < currentTime) {
    hourListDiv.addClass('row time-block past')
  }



  hourListChild.text(workDay[i])
  hourListChild.addClass('col-2 col-md-1 hour text-center py-3')

  hourListTextArea.addClass('col-8 col-md-10 description')

  hourListSaveBtn.addClass('btn saveBtn col-2 col-md-1')

  saveBtnIcon.addClass('fas fa-save')



  //Where to Display on the page
  $containerFluid.append(hourListDiv)
  hourListDiv.append(hourListChild)
  hourListDiv.append(hourListTextArea)
  hourListDiv.append(hourListSaveBtn)
  hourListSaveBtn.append(saveBtnIcon)

  console.log(workDay[i])
}



$(document).ready (function () {

  $('.fa-save').on("click", function(){

    console.log("fa-sav clicked")

    let userInput = $('<textarea>').siblings('.description').val();

    console.log(userInput)

  })
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  console.log("document.ready is ready")
});


console.log(currentTime)


