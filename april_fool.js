/*window.onload = function() {loadermodcaller();}; 
function myFunction() {
  idArray = new Array()
  idArray [1] = "First paragraph text"
  idArray [2] = "Second paragraph text"
  idArray [3] = "Third paragraph text"
  idArray [4] = "Fourth paragraph text"
  idArray [5] = "Fifth paragraph text"

  document.getElementById("button").onclick = myFunction;
  randomParagraph = Math.floor(Math.random()*5);
  document.getElementById("comments").innerHTML = idArray[randomParagraph + 1];       
  document.getElementById('welcomeDiv').style.display = "block";
  loadermodcaller();
}
function loadermodcaller() {
  setTimeout( loadermodchecker(), 1000);
}


function loadermodchecker() { 
  if(document.readyState === "complete")
    loadermod();
  else
    loadermodcaller();
}*/

function loadermod() {
  document.getElementById("fabtopper_loader").style.opacity="0";
  document.getElementById("akhtar_left").style.left="-60vw";
  document.getElementById("akhtar_right").style.right="-60vw";
  setTimeout( function(){ document.getElementById("fabtopper_loader").style.zIndex="-1000";}, 1000);
}


function delay () {
    document.getElementById("akhtar_left").style.transitionDelay="0s";
    document.getElementById("akhtar_right").style.transitionDelay="0s";
    document.getElementById("akhtar_left").style.left="0";
    document.getElementById("akhtar_right").style.right="0";
    var x = document.getElementById("fabtopper_loader");
    x.style.zIndex="9999";
    setTimeout( function(){ 
      x.style.opacity="1";
    }, 2000);
}