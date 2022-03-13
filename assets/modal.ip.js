//Will Trigger When Use Try Customization
var para = document.getElementById('checkAudis');
var custo = document.getElementById('custom');
function checkAudios(){
para.innerHTML = "The Audio that you stored is: "+localStorage.audioSettings;
}
function resetAudio(){
  localStorage.audioSettings = "https://mrdiscord.repl.co/Red%20Sun%20In%20The%20Sky%20-%20The%20Social%20Credit.mp3";
  //custo.style.display = "none";
  //resetTrue.style.display = "block";
  para.innerHTML = "You have Reset your Audio Data Successfully!"
}
function confirmAudio(){
//custo.style.display = "none";
//resetFalse.style.display = "block";
var audioChange = document.getElementById("audioChange");
  localStorage.audioSettings = audioChange.value;
para.innerHTML = "You have Change The URL Of The Audio Successfully!";
}
function audioCustom(){
  custo.style.display = "block";
}
//Will Trigger When Use Try Reset
function resetConfirm(){
    localStorage.clear(true);
    resetModal.style.display = "none";
    //resetTrue.style.display = "block";
    alert("We have Reset your Data Successfully!")
  }
function resetCancel(){
  resetModal.style.display = "none";
  //resetFalse.style.display = "block";
  alert("You have Aborted the Reset!")
  }
  

// Get the modal
var modal = document.getElementById("mdaModal");
var resetModal = document.getElementById("mdaReset");

// Get the button that opens the modal
//var btn = document.getElementById("mdasTriggers");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function modalDisplay() {
  modal.style.display = "block";
}

function modalResetDisplay(){
  resetModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function modalExit() {
  modal.style.display = "none";
}

function modalResetExit(){
  resetModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}