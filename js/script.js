function init(){
  function buttonClicked(){
    var input = document.getElementById('entryinput').value;
    var output = document.getElementById('textoutput');
    output.innerHTML = input;
    alert("Ben Pazner: " + input);
  }	
  document.getElementById("entrybutton").addEventListener("click", buttonClicked);
}
window.addEventListener('load', init);