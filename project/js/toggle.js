function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("open");
    document.getElementById("togglemenu").classList.toggle("open");
    document.getElementById("primarynav").style.transition = "2s";
}

const x = document.getElementById('togglemenu');
x.onclick = toggleMenu;