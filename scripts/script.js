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
                    container.innerHTML += `<h1>${lines[i]}</h1><ul>`
                } else {
                    container.innerHTML += `<li>${lines[i]}</li>`
                }
            }
            container.innerHTML += "</li>"
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
setInterval(updateText, 10000)
setInterval(removeId, 10000)