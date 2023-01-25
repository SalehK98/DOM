const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];


const body = document.body
let div = document.createElement("div")
body.append(div)

const ol = document.createElement("ol")
ol.style.listStyle = "none"
div.append(ol)

users.forEach(el => {
    let li = document.createElement("li")
    li.innerText = el.firstName + " " + el.lastName
    li.setAttribute("data-id", el.id)
    ol.append(li)
})