const body = document.body
const btn = document.querySelector("button")
const input = document.querySelector("input")
const smileyDiv = document.getElementById("second")
const errMsg = document.querySelector("span")
errMsg.style.backgroundColor = "red"
errMsg.style.color = "white"
errMsg.style.visibility = "hidden"

btn.onclick = () => {
    let count = input.value
    if (Number.isInteger(parseInt(count))) {
        errMsg.style.visibility = "hidden"
        smileyDiv.innerHTML = ""
        for (let index = 0; index < count; index++) {
            const smiley = document.createElement("img")
            smiley.src = "./download.jpg"
            smileyDiv.appendChild(smiley)
        }
        // console.log("number");
    } else {
        errMsg.style.visibility = "visible"

        // console.log("not a number");
    }
}