<<<<<<< HEAD
function addDiv() {
  //create a new P tag, save it in a variable
  let theNewDiv = document.createElement("div");
  //add a class to our new div element
  theNewDiv.classList.add("auto-div");
  //set the text inside the div
  theNewDiv.innerHTML = document.getElementById("textInput").value;
=======

function addDiv() {
let currentDate = new Date();
let hours = currentDate.getHours();
if(hours>12){
  hours = hours-12;
}
let time = hours + ":" + currentDate.getMinutes();
  //create a new P tag, save it in a variable
  let theNewDiv = document.createElement("div");
  let timeDiv = document.createElement("div");
  //add a class to our new div element
  theNewDiv.classList.add("auto-div");
  timeDiv.classList.add("right");
  //set the text inside the div
  theNewDiv.innerHTML = document.getElementById("textInput").value;
  timeDiv.innerHTML = time;
>>>>>>> 1e5465efaa1c2cf4d2de1fe72c239e6f5e53b19f

  //find the right tag to add the div to
  //we used an id of "content-area" for
  //the place where we want to add the chirp
  let theContentArea = document.getElementById("content-area");

  //add the new div to that tag
  theContentArea.appendChild(theNewDiv);
<<<<<<< HEAD
}

function addImage() {
  //create a new P tag, save it in a variable
  let theNewDiv = document.createElement("div");
  //add a class to our new div element
  theNewDiv.classList.add("auto-div");
=======
  theContentArea.appendChild(timeDiv);
}

function addImage() {
let currentDate = new Date();
let hours = currentDate.getHours();
if(hours>12){
  hours = hours-12;
}
let time = hours + ":" + currentDate.getMinutes();
  //create a new P tag, save it in a variable
  let theNewDiv = document.createElement("div");
  let timeDiv = document.createElement("div");
  //add a class to our new div element
  theNewDiv.classList.add("auto-div");
  timeDiv.classList.add("right");
>>>>>>> 1e5465efaa1c2cf4d2de1fe72c239e6f5e53b19f

  //create image tag to put into the div
  theImgTag = "<img src='" + document.getElementById("imgInput").value + "' width = 100 height = 100>";

  //set the text inside the div
  theNewDiv.innerHTML = theImgTag;
<<<<<<< HEAD
=======
  timeDiv.innerHTML = time;
>>>>>>> 1e5465efaa1c2cf4d2de1fe72c239e6f5e53b19f

  //find the right tag to add the div to
  //we used an id of "content-area" for
  //the place where we want to add the twit
  let theContentArea = document.getElementById("content-area");

  //add the new div to that tag
  theContentArea.appendChild(theNewDiv);
<<<<<<< HEAD
=======
  theContentArea.appendChild(timeDiv);



>>>>>>> 1e5465efaa1c2cf4d2de1fe72c239e6f5e53b19f
}
