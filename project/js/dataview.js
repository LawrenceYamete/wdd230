const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");


gridButton.addEventListener("click", function() {
    document.querySelector(".cards").style.display = "grid";
    document.querySelector(".tableCards").style.display = "none";
    gridButton.classList.add('active');
    listButton.classList.remove('active');
})

listButton.addEventListener("click", function() {
    document.querySelector(".tableCards").style.display = "block";
    document.querySelector(".cards").style.display = "none";
    listButton.classList.add('active');
    gridButton.classList.remove('active');
})