let liStartHere = document.getElementsByClassName("start-here")[0]
liStartHere.innerText = "main title"

let ul = document.querySelectorAll("ul")
let newSubTitle = document.createElement("li")
newSubTitle.innerText = "sub title 4"
ul[1].append(newSubTitle)


// this is one way to do it -- not good
// let li = ul[0].querySelectorAll("li")
// let title3 = li[7]
// title3.remove()

// another way better way
ul[0].children[3].remove()


let title = document.querySelector("title");
title.innerText = "Master of the Dom";

let par = document.querySelector("p");
par.innerText = "Saleh kalouti";