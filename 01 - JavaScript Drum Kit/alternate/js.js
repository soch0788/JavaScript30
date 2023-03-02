function keyPressed(e) {
    // console.log(e.key)
    const key = document.querySelector(`div[data-class="${e.key}"]`)
    if(!key) {
        return
    }
    // console.log(key)
    key.currenttime=0
    key.classList.add("alt")
}

function removeTransition(e) {
    console.log(e.propertyName)
    if(e.propertyName == "scale")
    {
        this.classList.remove("alt")
        // console.log(e.classList)
    }
    
}


document.addEventListener('keydown', keyPressed)
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
// console.log(keys)