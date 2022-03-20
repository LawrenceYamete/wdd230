const requestURL = "https://lawrenceyamete.github.io/wdd230/chamber/data/data.json";


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const partners = jsonObject["partners"];

        let goldSpot = document.querySelector('.spotlight1');
        let silverSpot = document.querySelector('.spotlight2');
        let bronzeSpot = document.querySelector('.spotlight3');
        let dayOfWeek = new Date().getDay();
        let array = [];


        if (dayOfWeek == 0) {
            goldSpot = partners.find(
                (directory) => directory.memberLevel == 'gold1'
            );
            silverSpot = partners.find(
                (directory) => directory.memberLevel == 'silver1'
            );
            bronzeSpot = partners.find(
                (directory) => directory.memberLevel == 'bronze1'
            );
        } else if (dayOfWeek == 1) {
            goldSpot = partners.find(
                (directory) => directory.memberLevel == 'gold2'
            );
            silverSpot = partners.find(
                (directory) => directory.memberLevel == 'silver2'
            );
            bronzeSpot = partners.find(
                (directory) => directory.memberLevel == 'bronze2'
            );
        } else if (dayOfWeek == 2) {
            goldSpot = partners.find(
                (directory) => directory.memberLevel == 'gold3'
            );
            silverSpot = partners.find(
                (directory) => directory.memberLevel == 'silver3'
            );
            bronzeSpot = partners.find(
                (directory) => directory.memberLevel == 'bronze3'
            );
        } else if (dayOfWeek == 3) {
            goldSpot = partners.find(
                (directory) => directory.memberLevel == 'gold4'
            );
            silverSpot = partners.find(
                (directory) => directory.memberLevel == 'silver4'
            );
            bronzeSpot = partners.find(
                (directory) => directory.memberLevel == 'bronze4'
            );
        } else if (dayOfWeek == 4) {
            goldSpot = partners.find(
                (directory) => directory.memberLevel == 'gold1'
            );
            silverSpot = partners.find(
                (directory) => directory.memberLevel == 'silver4'
            );
            bronzeSpot = partners.find(
                (directory) => directory.memberLevel == 'bronze5'
            );
        } else if (dayOfWeek == 5) {
            goldSpot = partners.find(
                (directory) => directory.memberLevel == 'gold2'
            );
            silverSpot = partners.find(
                (directory) => directory.memberLevel == 'silver3'
            );
            bronzeSpot = partners.find(
                (directory) => directory.memberLevel == 'bronze1'
            );
        } else if (dayOfWeek == 6) {
            goldSpot = partners.find(
                (directory) => directory.memberLevel == 'gold3'
            );
            silverSpot = partners.find(
                (directory) => directory.memberLevel == 'silver2'
            );
            bronzeSpot = partners.find(
                (directory) => directory.memberLevel == 'bronze2'
            );
        } else {
            newsheader = 'We apologize, there was an unknown error.'
        }

        array.push(goldSpot);
        array.push(silverSpot);
        array.push(bronzeSpot);

        console.log(array);

        // partners.forEach(displayPartners);
        partners.forEach(displayTablePartners);

    });


function displayPartners(partners) {
    let spot = document.createElement("section");
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

    document.querySelector("table.spotlight1").appendChild(body);
}

