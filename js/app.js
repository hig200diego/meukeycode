var myKeyCode = document.querySelector("#myKeyCode");
var myLetter = document.querySelector("#myLetter");

var keyPressed = document.addEventListener("keydown", function(event){
    myKeyCode.textContent = event.keyCode;
    myLetter.textContent = String.fromCharCode(event.keyCode);
    
    
    switch(event.keyCode) {
        case 32:
        myLetter.textContent = "Barra de espaço";
        break;

        case 13:
        myLetter.textContent = "Enter";
        break;

        case 27:
        myLetter.textContent = "Esc";
        break;

        case 8:
        myLetter.textContent = "Backspace";
        break;

        case 9:
        myLetter.textContent = "Tab";
        break;

        case 8:
        myLetter.textContent = "Alt Gr";
        break;

        case 20:
        myLetter.textContent = "Capslock";
        break;

        default:
        myLetter.textContent = String.fromCharCode(event.keyCode);
    }


    
    if (event.shiftKey) {
        myLetter.textContent = "Shift";
    }

    else if (event.ctrlKey) {
        myLetter.textContent = "Ctrl";
    }

    else if (event.altKey) {
        myLetter.textContent = "Alt";
    }

    /*else if (event.keyCode == 32) {
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
    */

});

