const requestURL = "https://lawrenceyamete.github.io/wdd230/chamber/data/data.json";


// =======================================================================

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const partners = jsonObject["partners"];
        partners.forEach(displayPartners);
        partners.forEach(displayTablePartners);
    });


function displayPartners(partners) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let image = document.createElement("img");

    image.setAttribute("src", "images/small/gray-background-7131-96d780fd18d4eaf58a7331d45573204e@1x.webp");
    image.setAttribute("data-src", partners.imageurl);
    image.setAttribute(
        "alt",
        `${partners.name} Partner of Manila Lights`
    );
    image.setAttribute("loading", "lazyload");

    h2.textContent = `${partners.name}`;
    p.innerHTML = `<strong>Address:</strong> ${partners.address} <br/>  
  <strong>Contact Number:</strong> ${partners.contactNumber} <br/>
  <strong>Website:</strong><a href="${partners.website}" target="_blank" >${partners.website}</a> `;


    if (partners.order == 1) {
        image.setAttribute(
            "alt",
            `${partners.name}. The ${partners.order}st partner of Manila Lights`
        );
    } else if (partners.order == 2) {
        image.setAttribute(
            "alt",
            `${partners.name}. The ${partners.order}nd partner of Manila Lights`);
    } else if (partners.order == 3) {
        image.setAttribute(
            "alt",
            `${partners.name}. The ${partners.order}rd partner of Manila Lights`);
    } else {
        image.setAttribute(
            "alt",
            `${partners.name}. The ${partners.order}th partner of Manila Lights`);
    }

    card.appendChild(image);
    card.appendChild(h2);
    card.appendChild(p);

    document.querySelector("div.cards").appendChild(card);

    const imagesToLoad = document.querySelectorAll('img[data-src]');
    // const imgOptions = {
    //     threshold: 0, 
    //     rootMargin: "0px 0px 100px 0px"};

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

function displayTablePartners(partners) {

    let body = document.querySelector("tbody")
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let address = document.createElement("td");
    let number = document.createElement("td");
    let website = document.createElement("td");

    body.setAttribute("class", "body")
    name.innerHTML = `${partners.name}`;
    address.innerHTML = `${partners.address}`
    number.innerHTML = `${partners.contactNumber}`
    website.innerHTML = `<a href="${partners.website}" target="_blank" >${partners.website}</a>`

    body.appendChild(row);
    row.appendChild(name);
    row.appendChild(address);
    row.appendChild(number);
    row.appendChild(website);

    document.querySelector("table.tableList").appendChild(body);
}