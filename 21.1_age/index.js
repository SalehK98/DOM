const input = document.querySelector("input")
const btn = document.querySelector("button")
const h1 = document.querySelector("h1")
btn.onclick = () => {
    let age = input.value
    age > 18 ? h1.innerText = "you can drink" : h1.innerText = "you're too young"

}