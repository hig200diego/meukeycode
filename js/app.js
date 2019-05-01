var myKeyCode = document.querySelector("#myKeyCode");
var myLetter = document.querySelector("#myLetter");

var keyPressed = document.addEventListener("keydown", function(event){
    myKeyCode.textContent = event.keyCode;
    myLetter.textContent = String.fromCharCode(event.keyCode);

    
    if (event.shiftKey) {
        myLetter.textContent = "Shift";
    }

    else if (event.ctrlKey) {
        myLetter.textContent = "Ctrl";
    }

    else if (event.altKey) {
        myLetter.textContent = "Alt";
    }

    else if (event.keyCode == 32) {
        myLetter.textContent = "Barra de espaço";
    }

    else if (event.keyCode == 13) {
        myLetter.textContent = "Enter";
    }

    else if (event.keyCode == 27) {
        myLetter.textContent = "Esc";
    }

    else if (event.keyCode == 8) {
        myLetter.textContent = "Backspace";
    }

    else if (event.keyCode == 9) {
        myLetter.textContent = "Tab";
    }

    else if (event.keyCode == 20) {
        myLetter.textContent = "Capslock";
    } 

});

