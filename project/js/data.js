const requestURL = "https://lawrenceyamete.github.io/wdd230/project/data/data.json";


// =======================================================================

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject["temples"];
        temples.forEach(displayTemples);
        temples.forEach(displayTableTemples);
    });


function displayTemples(temples) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let image = document.createElement("img");

    image.setAttribute("src", "images/small/gray-background-7131-96d780fd18d4eaf58a7331d45573204e@1x.webp");
    image.setAttribute("data-src", temples.imageurl);
    image.setAttribute(
        "alt",
        `${temples.name} Partner of Manila Lights`
    );
    image.setAttribute("loading", "lazyload");

    h2.textContent = `${temples.name}`;
    p.innerHTML = `<strong>Address:</strong> ${temples.address} <br/>  
  <strong>Contact Number:</strong> ${temples.contactNumber} <br/>
  <strong>Website:</strong><a href="${temples.website}" target="_blank" >${temples.website}</a> `;


    if (temples.order == 1) {
        image.setAttribute(
            "alt",
            `${temples.name}. The ${temples.order}st partner of Manila Lights`
        );
    } else if (temples.order == 2) {
        image.setAttribute(
            "alt",
            `${temples.name}. The ${temples.order}nd partner of Manila Lights`);
    } else if (temples.order == 3) {
        image.setAttribute(
            "alt",
            `${temples.name}. The ${temples.order}rd partner of Manila Lights`);
    } else {
        image.setAttribute(
            "alt",
            `${temples.name}. The ${temples.order}th partner of Manila Lights`);
    }

    card.appendChild(image);
    card.appendChild(h2);
    card.appendChild(p);

    document.querySelector("div.cards").appendChild(card);

    const imagesToLoad = document.querySelectorAll('img[data-src]');

    const loadImages = (image) => {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = () => {
            image.removeAttribute('data-src');
        };
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((items) => {
            items.forEach((item) => {
                if (item.isIntersecting) {
                    loadImages(item.target);
                    observer.unobserve(item.target);
                }
            });
        });
        imagesToLoad.forEach((img) => {
            observer.observe(img);
        });
    } else {
        imagesToLoad.forEach((img) => {
            loadImages(img);
        });
    }
}

function displayTableTemples(temples) {

    let body = document.querySelector("tbody")
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let address = document.createElement("td");
    let number = document.createElement("td");
    let website = document.createElement("td");

    body.setAttribute("class", "body")
    name.innerHTML = `${temples.name}`;
    address.innerHTML = `${temples.address}`
    number.innerHTML = `${temples.contactNumber}`
    website.innerHTML = `<a href="${temples.website}" target="_blank" >${temples.website}</a>`

    body.appendChild(row);
    row.appendChild(name);
    row.appendChild(address);
    row.appendChild(number);
    row.appendChild(website);

    document.querySelector("table.tableList").appendChild(body);
}