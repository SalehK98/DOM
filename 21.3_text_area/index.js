// body
const body = document.body
const div = document.createElement("div")

// div
div.style.display = "flex"
div.style.flexDirection = "column"
div.style.width = "50%"

// text area
const label = document.createElement("label")
label.setAttribute("for", "area")
label.innerText = "why are you interested in this position?"

const textArea = document.createElement("textarea")
textArea.setAttribute("name", "area")
textArea.style.height = "200px"
let count = 0

// button
const btn = document.createElement("button")
btn.innerText = "click me"
btn.style.width = "20%"
// btn.disabled = true

// line break
const br = document.createElement("br")
const br2 = document.createElement("br")

// error message
const errMsg = document.createElement("span")
errMsg.style.color = "white"
errMsg.style.width = "40%"
errMsg.style.textAlign = "center"

// count message
const countMsg = document.createElement("span")
countMsg.innerText = `you have reached ${count} characters`

body.appendChild(div)
div.append(label, textArea, countMsg, br, btn, br2)

textArea.oninput = () => {
    count = textArea.value.length
    countMsg.innerText = `you have reached ${count} characters`

    // if (textArea.value.length < 100) {
    //     btn.disabled = true
    //     console.log("forbidden");
    // } else {
    //     btn.disabled = false
    //     console.log("approved");
    // }
}

btn.onclick = () => {
    if (textArea.value.length < 100) {
        console.log("forbidden");
        errMsg.innerText = "you must enter al least 100 characters"
        errMsg.style.backgroundColor = "red"
        div.appendChild(errMsg)
    } else {
        div.appendChild(errMsg)
        errMsg.style.backgroundColor = "green"
        errMsg.innerText = "click approved"
        console.log("approved");
    }
}