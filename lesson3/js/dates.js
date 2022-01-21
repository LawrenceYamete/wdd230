document.querySelector('#lastmod').innerHTML = `<strong>Last Modified</strong> ${document.lastModified}`;

const year = document.querySelector("#year")
year.innerHTML = new Date().getFullYear();