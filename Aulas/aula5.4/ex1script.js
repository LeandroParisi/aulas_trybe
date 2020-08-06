// let body = document.querySelector("body");
// let headingColor = document.querySelector("h1")
// let paragraphs = document.querySelectorAll("p");


// document.body.style.backgroundColor = localStorage.getItem("bgColor");

// let blueBtn = document.querySelector(".blue");

// function setBackground(){
//     document.body.style.backgroundColor = blueBtn.className;
//     localStorage.setItem ("bgColor", blueBtn.className)
// }

// blueBtn.addEventListener("click", setBackground);

// let redBtn = document.querySelector(".red");

// function setBackground2(){
//     document.body.style.backgroundColor = redBtn.className;
//     localStorage.setItem ("bgColor", redBtn.className)
// }

// redBtn.addEventListener("click", setBackground2);

let bgColorSelect = document.querySelector(".background-color");

bgColorSelect.addEventListener("click", function(event){
    console.log(event.target);
    let body = document.querySelector("body");

    let className = event.target.className;

    body.style.backgroundColor = className;
});