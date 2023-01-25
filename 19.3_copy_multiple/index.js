const textToCopy = "123456"
const h2 = document.querySelector("h2")
h2.innerText = textToCopy

const inputs = document.querySelectorAll("input")
inputs.forEach((el) => {
    el.setAttribute("maxlength", 1)
})

const div_input = document.getElementById("inputs")
div_input.addEventListener("keyup", function (event) {
    if (event.target.nextElementSibling) {
        event.target.nextElementSibling.focus()
    } else {
        event.target.blur()
    }
})

div_input.addEventListener("paste", function (event) {
    event.preventDefault()
    const pasteValue = (event.clipboardData).getData("text")
    // console.log(typeof pasteValue)
    for (let index = 0; index < pasteValue.length; index++) {
        // console.log(index, inputs.length, pasteValue[index]);
        if (index < inputs.length) {
            inputs[index].value = parseInt(pasteValue[index])
        } else {
            console.log("break will happen next");
            break
        }

    }
    event.target.blur()
})

let verifyButton = document.querySelector("button")
let values = ""
verifyButton.addEventListener("click", function (event) {
    inputs.forEach(el => { values += el.value })
    if (values === textToCopy) {
        alert("correct")
        location.reload()
    } else {
        alert("not correct")
        // console.log(div_input.forEach(el => el.value = ""));
        location.reload()
    }
})



