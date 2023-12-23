const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu");

menuIcon.addEventListener("click", () =>{
    menuList.classList.toggle("menu");
});

const productContainers = document.querySelectorAll('.people-container');
const nxtBtn = document.querySelectorAll('.button2');
const preBtn = document.querySelectorAll('.button1');

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        requestAnimationFrame(() => {
            item.scrollLeft += containerWidth;
        });
    });

    preBtn[i].addEventListener('click', () => {
        requestAnimationFrame(() => {
            item.scrollLeft -= containerWidth;
        });
    });
});

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


