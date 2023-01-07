const $containerFluid = $('.container-fluid')
const currentDate = dayjs().format('MMMM D YYYY')
const $currentDate = $('#currentDay')


//prints Current Date
$currentDate.append(currentDate)

const currentTime = dayjs().hour()

//I wonder if this can be made with a loop too..
let workDay = [
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

  //Classes Text Content Attributes
  hourListDiv.addClass('row time-block past')
  hourListTextArea.attr('id', 'hour-'+ workDay[i])
  hourListTextArea.addClass('textInput')

  if (workDay[i] == currentTime) {
    hourListDiv.addClass('row time-block present')
  } else if (workDay[i] > currentTime ) {
    hourListDiv.addClass('row time-block future')
  } else if (workDay[i] < currentTime) {
    hourListDiv.addClass('row time-block past')
  }

  hourListChild.addClass('col-2 col-md-1 hour text-center py-3')
  hourListTextArea.addClass('col-8 col-md-10 description')
  hourListSaveBtn.addClass('btn saveBtn col-2 col-md-1')
  saveBtnIcon.addClass('fas fa-save')
  
  hourListChild.text(workDay[i]+":00")

  //Converts 24 hour clock to 12 hour
  if (workDay[i] < 12 ) {
    hourListChild.text(workDay[i]+":00 am")
  } else if (workDay[i] >= 13) {
    let convertTime = (workDay[i]-12);
    hourListChild.text(convertTime+":00 pm")
  } else if (workDay[i] >= 12 ) {
    hourListChild.text(workDay[i]+":00 pm")
  } 

  //Where to Display on the page
  $containerFluid.append(hourListDiv)
  hourListDiv.append(hourListChild)
  hourListDiv.append(hourListTextArea)
  hourListDiv.append(hourListSaveBtn)
  hourListSaveBtn.append(saveBtnIcon)

}


$(document).ready (function () {

  $('.saveBtn').on("click", function(e){
    let userInput = $(this).siblings(".textInput").val();
    let timeBlock = $(this).siblings(".textInput").attr("id");

    localStorage.setItem(timeBlock, userInput);
  });
  

 //I wonder if this can be put in a loop (Solved- but leaving this here temporarily)
/*
  $("#hour-9").text(localStorage.getItem("hour-9"))
  $("#hour-10").text(localStorage.getItem("hour-10"))
  $("#hour-11").text(localStorage.getItem("hour-11"))
  $("#hour-12").text(localStorage.getItem("hour-12"))
  $("#hour-13").text(localStorage.getItem("hour-13"))
  $("#hour-14").text(localStorage.getItem("hour-14"))
  $("#hour-15").text(localStorage.getItem("hour-15"))
  $("#hour-16").text(localStorage.getItem("hour-16"))
  $("#hour-17").text(localStorage.getItem("hour-17"))

*/
//Loop pulls from local storage.
for (i=9; i<=17; i++) {
  $("#hour-"+i).text(localStorage.getItem("hour-"+i))
}
});





