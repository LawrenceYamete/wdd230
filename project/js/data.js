const requestURL = "https://lawrenceyamete.github.io/wdd230/project/json/data.json";


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
    let a = document.createElement("a");
    

    // ===========================
    let modal = document.createElement("div");
    let modalH = document.createElement("div");
    let modalT = document.createElement("div");
    let modalB = document.createElement("div");
    let over = document.createElement("div");
    let likeBtn = document.createElement("a");
    let numh2 = document.createElement("h2")
    let numLike = document.createElement("span")

    modal.setAttribute("class", "modal");
    modal.setAttribute("id", "modal");
    modalH.setAttribute("class", "modal-header");
    modalT.setAttribute("class", "title");
    modalB.setAttribute("class", "modal-body");
    over.setAttribute("id", "overlay");
    likeBtn.setAttribute("class", "likeBtn")
    likeBtn.setAttribute("onclick", `incrementButton()`)
    numLike.setAttribute("class", "visits")
    
    image.setAttribute("class", "templeImgs");
    image.setAttribute("src", "images/medium/iStock-995624510-3000x1500.jpg");
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

    modal.setAttribute("class", `modal`);
    a.setAttribute("data-modal-target", `#modal`);
    a.setAttribute("class", `moreInfo${temples.order}`);
    over.setAttribute("class", `overlay${temples.order}`);


    modalT.innerHTML = `<h1> ${temples.name}</h1>`;
    modalB.innerHTML = `<p>Announcement: ${temples.announcement}<br/>
    Groundbreaking and Site Dedication: ${temples.groundAndDedication} <br/>
    Public and Open House: ${temples.publicOpenHouse}<br/>
    Dedication: ${temples.dedication} <br/>
    Temple Locale: ${temples.history}</p>`;

    likeBtn.innerHTML = `Like`
    
    a.innerHTML = `More Info`;



    card.appendChild(image);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(a);

    // =========================
    card.appendChild(modal);
    modal.appendChild(modalH);
    modalH.appendChild(modalT);
    modal.appendChild(modalB);
    card.appendChild(over);
    
    card.appendChild(likeBtn);
    card.appendChild(numh2);
    numh2.appendChild(numLike);

    document.querySelector("div.cards").appendChild(card);

    let numVisits = Number(window.localStorage.getItem("likeBtn-ls"));
    function incrementButton() {
        var visitsDisplay = document.querySelector(".visits");
        var btn = document.querySelector(".likeBtn");

        
        visitsDisplay.textContent = numVisits;
        numVisits++;

        localStorage.setItem("likeBtn-ls", numVisits);
        visitsDisplay.textContent = numVisits;
    }

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

    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const overlay = document.getElementById('overlay')
    openModalButtons.forEach(a => {
        a.addEventListener('click', () => {
            const modal = document.querySelector(a.dataset.modalTarget)
            openModal(modal)
        })
        })
    
        overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
        })
    
        closeModalButtons.forEach(a => {
        a.addEventListener('click', () => {
            const modal = a.closest('.modal')
            closeModal(modal)
        })
        })
    
        function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
        }
    
        function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
        }
}

function displayTableTemples(temples) {

    let body = document.querySelector("tbody")
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let address = document.createElement("td");
    let number = document.createElement("td");
    let history = document.createElement("td");

    body.setAttribute("class", "body")
    name.innerHTML = `${temples.name}`;
    address.innerHTML = `${temples.address}`
    number.innerHTML = `${temples.contactNumber}`
    history.innerHTML = `${temples.history}`

    body.appendChild(row);
    row.appendChild(name);
    row.appendChild(address);
    row.appendChild(number);
    row.appendChild(history);

    document.querySelector("table.tableList").appendChild(body);
}


