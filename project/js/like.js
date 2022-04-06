const visitsDisplay = document.querySelector(".visits");
const btn = document.querySelector(".likeBtn");

let numVisits = Number(window.localStorage.getItem("likeBtn-ls"));

function incrementButton() {
    visitsDisplay.textContent = numVisits;
    numVisits++;

    localStorage.setItem("likeBtn-ls", numVisits);

}
visitsDisplay.textContent = numVisits;