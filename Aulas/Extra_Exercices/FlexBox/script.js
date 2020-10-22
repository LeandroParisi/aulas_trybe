const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenuItems(type) {
  const items = document.querySelectorAll('.item');

  if (type) {
    for (let item of items) {
      item.classList.add("active");
    }
  } else {
    for (let item of items) {
      item.classList.remove("active");
    }
  }
}

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");

    toggleMenuItems(false);

    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>"
  } else {
    menu.classList.add("active");

    toggleMenuItems(true);

    // adds the close (x) icon
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
}
}

toggle.addEventListener("click", toggleMenu);