function validateText() {
  var x = document.getElementById("textInput").value;
  if (x == "" || x == null) {
    alert("Field can't be empty");
  }else{
    addDiv();
  }
}

function validateImage() {
  var x = document.getElementById("imgInput").value;
  if (x == "" || x == null) {
    alert("Field can't be empty");
  }else{
    addImage();
  }
}

function addDiv() {
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let time = 0;
if(hours>12){
  hours = hours-12;
}
if(minutes < 10){
  time = hours + ":0" + minutes;
}else{
  time = hours + ":" + minutes;
}
  //create a new P tag, save it in a variable
  let theNewDiv = document.createElement("div");
  let timeDiv = document.createElement("div");
  //add a class to our new div element

  let darkMode = document.getElementById("mode");
  if (darkMode.className === "mode ON"){
      theNewDiv.classList.add("auto-div");
      theNewDiv.classList.add("darkAuto-div");
  } else {
  theNewDiv.classList.add("auto-div");
  }

  timeDiv.classList.add("right");
  //set the text inside the div
  theNewDiv.innerHTML = document.getElementById("textInput").value;
  timeDiv.innerHTML = time;

  //find the right tag to add the div to
  //we used an id of "content-area" for
  //the place where we want to add the chirp
  let theContentArea = document.getElementById("content-area");

  //add the new div to that tag
  theContentArea.appendChild(theNewDiv);
  theContentArea.appendChild(timeDiv);

  //play a sound when a post is made
  let audio = new Audio("alert_chirp.mp3");
  audio.play();
}

function addImage() {
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let time = 0;
if(hours>12){
  hours = hours-12;
}
if(minutes < 10){
  time = hours + ":0" + minutes;
}else{
  time = hours + ":" + minutes;
}
  //create a new P tag, save it in a variable
  let theNewDiv = document.createElement("div");
  let timeDiv = document.createElement("div");
  //add a class to our new div element

  let darkMode = document.getElementById("mode");
  if (darkMode.className === "mode ON"){
      theNewDiv.classList.add("auto-div");
      theNewDiv.classList.add("darkAuto-div");
  } else {
  theNewDiv.classList.add("auto-div");
  }

  timeDiv.classList.add("right");

  //create image tag to put into the div
  theImgTag = "<img alt= '" + document.getElementById("imgInput").value + "'src='" + document.getElementById("imgInput").value + "' width = 100 height = 100>";


  //set the text inside the div
  theNewDiv.innerHTML = theImgTag;
  timeDiv.innerHTML = time;

  //find the right tag to add the div to
  //we used an id of "content-area" for
  //the place where we want to add the twit
  let theContentArea = document.getElementById("content-area");

  //add the new div to that tag
  theContentArea.appendChild(theNewDiv);
  theContentArea.appendChild(timeDiv);

  //play a sound when a post is made
  let audio = new Audio("alert_image.mp3");
  audio.play();

  var input = document.getElementById("textInput"); //Get the input box
  input.addEventListener("keyup", function(event) {  //Check keys
    if (event.keyCode === 13) {  //Check for enter key
      event.preventDefault();
      // document.getElementById("my-button").click(); //Should activate the button, but doesn't.
      addDiv(); //Submit the text
      emptyText();  //Clear the input
    }
  });
  var imginput = document.getElementById("imgInput"); //Get the input box
  imginput.addEventListener("keyup", function(event) {  //Check keys
    if (event.keyCode === 13) { //Check for enter key
      event.preventDefault();
      // document.getElementById("my-button").click();  //Should activate the button, but doesn't.
      addImage();  //Submit the image link
      emptyImg();  //Clear the input
    }
  });


  function emptyText()
  {
    document.getElementById("textInput").value = ""; //Clears input box for text
  }
  function emptyImg()
  {
    document.getElementById("imgInput").value = ""; //Clears input box for image links
  }

}


$( ".change" ).on("click", function() {

  // check for dark mode class
  if( $( ".right-col" ).hasClass( "darkRight-col" )) {
      $( ".right-col" ).removeClass( "darkRight-col" );
      $( ".change" ).text( "OFF" );
  } else {
      $( ".right-col" ).addClass( "darkRight-col" );
      $( ".change" ).text( "ON" );
  }
  if( $( ".left-col" ).hasClass( "darkLeft-col" )) {
      $( ".left-col" ).removeClass( "darkLeft-col" );
      $( ".change" ).text( "OFF" );
  } else {
      $( ".left-col" ).addClass( "darkLeft-col" );
      $( ".change" ).text( "ON" );
  }
  if( $( ".auto-div" ).hasClass( "darkAuto-div" )) {
      $( ".auto-div" ).removeClass( "darkAuto-div" );
      $( ".change" ).text( "OFF" );
  } else {
      $( ".auto-div" ).addClass( "darkAuto-div" );
      $( ".change" ).text( "ON" );
  }

  // check is dark mode is on/off
  if( $( ".mode" ).hasClass( "ON" )) {
      $( ".mode" ).removeClass( "ON" );
      $( ".mode" ).addclass( "OFF" );
  } else {
      $( ".mode" ).removeClass( "ON" );        
      $( ".mode" ).addClass( "ON" );
  }
});
