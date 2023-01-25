const body = document.body
const div = document.createElement("div")
const h1 = document.createElement("h1")
const upBtn = document.createElement("button")
const downBtn = document.createElement("button")
let size = 28

h1.innerText = " This is a resizable text"
upBtn.innerText = "+"
downBtn.innerText = "-"

body.appendChild(div)
div.append(h1, upBtn, downBtn)

upBtn.onclick = () => {
    if (6 <= size <= 100) {
        size += 2
        h1.style.fontSize = `${size}px`

        console.log(size);
    }
}
downBtn.onclick = () => {
    if (6 <= size <= 100) {
        size -= 2
        h1.style.fontSize = `${size}px`
        console.log(size);

    }
}
