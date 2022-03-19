document.querySelector('#lastmod').innerHTML = `<strong>Last Modified</strong> ${document.lastModified}`;

const year = document.querySelector("#year")
year.innerHTML = new Date().getFullYear();


// document.querySelector('#dateaside').innerHTML = <em>${document.fulldateUK}</em>

const datefieldUK = document.querySelector(".date");

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;