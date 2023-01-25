const body = document.body

// div
const div = document.createElement("div")
body.appendChild(div)

// stylesheet and styles
let element = document.createElement("style"), sheet;
document.head.appendChild(element)
sheet = element.sheet

let styles = ".hide {";
styles += "display:none;"
styles += "}"

sheet.insertRule(styles, 0)

// images 
const lightOff = document.createElement("img")
lightOff.src = "./pic_bulboff.gif"
lightOff.style.position = "absolute"

const lightOn = document.createElement("img")
lightOn.src = "./pic_bulbon.gif"
lightOn.style.position = "absolute"
lightOn.classList.add("hide")

div.append(lightOff, lightOn)

// events
lightOff.onclick = () => {
    lightOff.classList.toggle("hide")
    lightOn.classList.toggle("hide")
}

lightOn.onclick = () => {
    lightOff.classList.toggle("hide")
    lightOn.classList.toggle("hide")
}

// or onclick check img source and change it with if
// or onclick with class toggle change image src