const container = document.getElementById("container")
function updateText() {
    console.log(container.attributes.id)    
       console.log(container.attributes.id)    
    while(container.firstChild) {
        container.firstChild.remove();
    }
    fetch("https://hjohnross.github.io/Schedule_json_LCB/test.txt")
        .then(response => response.text())
        .then(res => {
            const lines = res.split('\n');
            for(i = 0; i < lines.length; i++) {
                if(i === 0) {
                    container.innerHTML += `<h1>${lines[i]}</h1>`
                } else {
                    container.innerHTML += `<p>${lines[i]}</p>`
                }
            }
        })
        .catch(err => console.log(err))
}
function removeId() {
     if(!container.attributes.id) {
        container.setAttribute("id", "container")
    } else {
        container.removeAttribute("id")
    }
    console.log("test")
}
updateText();
setInterval(updateText, 120000)
setInterval(removeId, 120000)