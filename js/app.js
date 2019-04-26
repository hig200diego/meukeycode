var myKeyCode = document.querySelector("#myKeyCode");
var myLetter = document.querySelector("#myLetter");

var keyPressed = document.addEventListener("keydown", function(event){
    myKeyCode.textContent = event.keyCode;
    myLetter.textContent = String.fromCharCode(event.keyCode);

    if (event.shiftKey) {
        myLetter.textContent = "Shift";
    }

    if (event.ctrlKey) {
        myLetter.textContent = "Ctrl";
    }

    if (event.altKey) {
        myLetter.textContent = "Alt";
    }

    if (event.keyCode == 32) {
        myLetter.textContent = "Barra de espaço";
    }

});


