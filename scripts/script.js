
const burgerIcons = document.getElementById('burgerIcons');
const iconBars = document.getElementById('iconBars');
const iconXmark = document.getElementById('iconXmark');
const menuList = document.getElementById('menuList');

burgerIcons.addEventListener('click', () => {
    menuList.classList.toggle('menu-close')
    iconXmark.classList.toggle('hide')
    iconBars.classList.toggle('hide')
})






var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}