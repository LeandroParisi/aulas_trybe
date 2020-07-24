let body = document.querySelector("body");
let headingColor = document.querySelector("h1")
let paragraphs = document.querySelectorAll("p");


localStorage.setItem("bgColor", "black");
localStorage.setItem("textColor", "white");
localStorage.setItem("fontSize", "14px");
localStorage.setItem("lineSpacing", "1em");
localStorage.setItem("fontFamily", "sans-serif");


body.style.backgroundColor = localStorage.getItem("bgColor");
headingColor.style.color = localStorage.getItem("textColor");

for (let index = 0; index < paragraphs.length; index += 1){
    paragraphs[index].style.color = localStorage.getItem("textColor");
}

