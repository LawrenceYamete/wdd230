const requestURL = "https://lawrenceyamete.github.io/wdd230/project/json/data.json";


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject["temples"];

        let random1 = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
            displayTemples(temples[random1]);


    });

function displayTemples(temples) {
    let spot = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let image = document.createElement("img");
    let h1 = document.createElement("h1");

    h1.innerHTML = `Featured Temple`;
    h1.setAttribute("class", "featured")
    image.setAttribute("class", "featuredImg")
    image.setAttribute("src", "images/medium/iStock-995624510-3000x1500.webp");
    image.setAttribute("data-src", temples.imageurl);
    image.setAttribute(
        "alt",
        `${temples.name}`
    );
    image.setAttribute("loading", "lazyload");

    h2.textContent = `${temples.name}`;
    p.innerHTML = `<strong>Address:</strong> ${temples.address} <br/>  
  <strong>Contact Number:</strong> ${temples.contactNumber} <br/>
  <strong>Temple Locale:</strong> ${temples.history} `;


    if (temples.order == 1) {
        image.setAttribute(
            "alt",
            `${temples.name}. The ${temples.order}st Temple`
        );
    } else if (temples.order == 2) {
        image.setAttribute(
            "alt",
            `${temples.name}. The ${temples.order}nd Temple`);
    } else if (temples.order == 3) {
        image.setAttribute(
            "alt",
            `${temples.name}. The ${temples.order}rd Temple`);
    } else {
        image.setAttribute(
            "alt",
            `${temples.name}. The ${temples.order}th Temple`);
    }

    spot.appendChild(h1);
    spot.appendChild(image);
    spot.appendChild(h2);
    spot.appendChild(p);

    document.querySelector("div.spotlight").appendChild(spot);

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

function displayTablePartners(temples) {

    let body = document.querySelector("tbody")
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let address = document.createElement("td");
    let number = document.createElement("td");
    let history = document.createElement("td");

    body.setAttribute("class", "section")
    name.innerHTML = `${temples.name}`;
    address.innerHTML = `${temples.address}`
    number.innerHTML = `${temples.contactNumber}`
    history.innerHTML = `<p>${temples.history}</p>`

    body.appendChild(row);
    row.appendChild(name);
    row.appendChild(address);
    row.appendChild(number);
    row.appendChild(history);

    document.querySelector("div.tableList").appendChild(body);
}

