function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("open");
    document.getElementById("togglemenu").classList.toggle("open");
}

const x = document.getElementById('togglemenu');
x.onclick = toggleMenu;