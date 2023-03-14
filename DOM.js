var welcomebox = 1
beginbox.addEventListener("click", ()=>{
    setTimeout(() => {
        keycodeTitle.style.backgroundColor="red", keycodeTitle.style.transform="translateX(50px)";
    }, "50");
    setTimeout(() => {
        keycodeTitle.style.backgroundColor="blue"
    }, "70");
    setTimeout(() => {
        keycodeTitle.style.backgroundColor="green", keycodeTitle.style.transform="translateX(-50px)";
    }, "100");
    setTimeout(() => {
        keycodeTitle.style.backgroundColor="black"
    }, "150");
    setTimeout(() => {
        keycodeTitle.remove()
    }, "300");
    setTimeout(() => {
        displayBoxAnimated.style.display = "block"
    }, "600");
    setTimeout(() => {
        displayBox.style.display = "block"
        displayBoxAnimated.style.display = "none";
    }, "1600");
    setTimeout(() => {
        displayBoxText.style.display = "block"    
        welcomebox = 2    
    }, "3000");
    setTimeout(() => {
        if(displayBoxText.style.display = "block"){
            flashy1.style.display = "none";
            displayBoxText2.style.display = "block"
            flashy2.style.display = "inline"
        }       
        else{
            welcomebox = 2
        }
    }, "10000");
        
    });


document.addEventListener('keydown', (event) => {
    if(welcomebox == 2){
        displayBox.style.display = "none"
        keynamebox.style.display = "block"
        keypressed.style.display = "block"
        keywhichvalue.style.display = "block"
        keycode.style.display = "block"
        var name = event.key;
        var code = event.code;
        var whichvalue = event.keyCode;
        // Alert the key name and key code on keydown
        keypressed.textContent = `[${name}]`
        keycode.textContent = `[${code}]`
        keywhichvalue.textContent = "Deprecated :("
        setTimeout(() => {
            keypressed.style.color="red", keypressed.style.transform="translateX(10px)";
            keycode.style.color="red", keycode.style.transform="translateX(10px)";
            keywhichvalue.style.color="red", keywhichvalue.style.transform="translateX(10px)";
        }, "50");
        setTimeout(() => {
            keypressed.style.color="blue";
            keycode.style.color="blue";
            keywhichvalue.style.color="blue";
        }, "70");
        setTimeout(() => {
            keypressed.style.color="green", keypressed.style.transform="translateX(-10px)";
            keycode.style.color="green", keycode.style.transform="translateX(-10px)";
            keywhichvalue.style.color="green", keywhichvalue.style.transform="translateX(-10px)";
        }, "100");
        setTimeout(() => {
            keypressed.style.color="white", keypressed.style.transform="translateX(0px)";
            keycode.style.color="white", keycode.style.transform="translateX(0px)";
            keywhichvalue.style.color="white", keywhichvalue.style.transform="translateX(0px)";
        }, "150");
    }
}, true);
