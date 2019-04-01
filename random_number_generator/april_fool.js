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
var quote=['The number is as random as the time you spent here',
  'The number represents your standards - 404 Not found',
  'The randomness of the number is just like your disappointment - Constant',
  'Wow! you just generated a random number , Your loved ones would be so proud of you',
  'This app is less disappointing than the time you spent here' ]
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
      setTimeout( function(){ 
        x.style.opacity="0";
        document.getElementById('button').style.display='none';
        document.getElementById('welcomeDiv').style.display='block';
        document.getElementById('quote').style.display='block';
        document.getElementById('randomNo').style.display='block';
        document.getElementById('quote').innerHTML=quote[Math.floor(Math.random()*5)];
        setTimeout( function(){ 
          x.style.zIndex="-1000";
          document.getElementById("akhtar_left").style.left="-60vw";
          document.getElementById("akhtar_right").style.right="-60vw ";
            setTimeout( function(){ 
              x.style.zIndex="-1000";
              document.getElementById('welcomeDiv').style.opacity='1';
              setTimeout( function(){ 
                x.style.zIndex="-1000";
                document.getElementById('randomNo').style.opacity='1';
                setTimeout( function(){ 
                  x.style.zIndex="-1000";
                  document.getElementById('quote').style.opacity='1';
                }, 1100);
              }, 1100);
            }, 1100);       
          }, 1500);
      }, 5500);
    }, 1000);
}