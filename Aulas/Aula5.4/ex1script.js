// localStorage.setItem("textColor", "white");
// localStorage.setItem("fontSize", "14px");
// localStorage.setItem("lineSpacing", "1em");
// localStorage.setItem("fontFamily", "sans-serif");


// body.style.backgroundColor = localStorage.getItem("bgColor");
// headingColor.style.color = localStorage.getItem("textColor");

// for (let index = 0; index < paragraphs.length; index += 1){
//     paragraphs[index].style.color = localStorage.getItem("textColor");
// }
// document.body.style.backgroundColor = localStorage.getItem("bgColor");

let body = document.querySelector("body");
let headingColor = document.querySelector("h1")
let paragraphs = document.querySelectorAll("p");


document.body.style.backgroundColor = localStorage.getItem("bgColor");

let blueBtn = document.querySelector(".blue");

function setBackground(){
    document.body.style.backgroundColor = blueBtn.className;
    localStorage.setItem ("bgColor", blueBtn.className)
}

blueBtn.addEventListener("click", setBackground);

let redBtn = document.querySelector(".red");

function setBackground2(){
    document.body.style.backgroundColor = redBtn.className;
    localStorage.setItem ("bgColor", redBtn.className)
}

redBtn.addEventListener("click", setBackground2);
