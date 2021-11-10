function addDiv() {
  //create a new P tag, save it in a variable
  let theNewDiv = document.createElement("div");
  //add a class to our new div element
  theNewDiv.classList.add("auto-div");
  //set the text inside the div
  theNewDiv.innerHTML = document.getElementById("textInput").value;

  //find the right tag to add the div to
  //we used an id of "content-area" for
  //the place where we want to add the chirp
  let theContentArea = document.getElementById("content-area");

  //add the new div to that tag
  theContentArea.appendChild(theNewDiv);
}

function addImage() {
  //create a new P tag, save it in a variable
  let theNewDiv = document.createElement("div");
  //add a class to our new div element
  theNewDiv.classList.add("auto-div");

  //create image tag to put into the div
  theImgTag = "<img src='" + document.getElementById("imgInput").value + "' width = 50% height = 50%>";

  //set the text inside the div
  theNewDiv.innerHTML = theImgTag;

  //find the right tag to add the div to
  //we used an id of "content-area" for
  //the place where we want to add the twit
  let theContentArea = document.getElementById("content-area");

  //add the new div to that tag
  theContentArea.appendChild(theNewDiv);


}
