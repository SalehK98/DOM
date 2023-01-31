const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numChoose = () => { return Math.floor(Math.random() * 26) }
let myLetter = letters[numChoose()]
let letterGuessed = false
console.log(myLetter);

console.log(letterGuessed)
document.addEventListener("keydown", function (event) {
    // console.log(event.code, event.keyCode, event.key);
    // console.log(letters.includes(event.key));
    if (!letterGuessed) {
        if (letters.includes(event.key)) {
            document.getElementById("letters").innerText += event.key + ","
            console.log(event.key === myLetter);
            if (event.key === myLetter) {
                document.getElementById("playAgain").style.display = "flex"
                document.getElementById("msg").style.color = "lime"
                document.getElementById("msg").innerText = "Right letter!"
                letterGuessed = true
            } else {
                document.getElementById("msg").style.color = "red"
                document.getElementById("msg").innerText = "Nope, Wrong letter"
            }
        }
    }
});

document.querySelector("button").addEventListener("click", () => {
    letterGuessed = false
    myLetter = letters[numChoose()]
    console.log(myLetter);
    document.getElementById("playAgain").style.display = "none"
    document.getElementById("msg").style.color = "black"
    document.getElementById("msg").innerText = "Guess a key"
    document.getElementById("letters").innerText = ""

})