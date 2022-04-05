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

// ======
    let btn = document.createElement("a");
    let modal = document.createElement("div");
    let i = document.createElement("i");
    let h23 = document.createElement("h2");
    let p1 =document.createElement("p");
    let ac = document.createElement("a");
    let ov = document.createElement("div");
// ======

    image.setAttribute("class", "templeImgs");
    image.setAttribute("src", "images/medium/iStock-995624510-3000x1500.jpg");
    image.setAttribute("data-src", temples.imageurl);
    image.setAttribute(
        "alt",
        `${temples.name}`
    );
    image.setAttribute("loading", "lazy");
    // load

// ======
    ov.setAttribute("id", "overlay")
    ac.setAttribute("data-close-button class", "closebtn");
    ac.setAttribute("id", "cbtn");
    p1.innerHTML = `lrerasdasdasdasdasdasdasdasdasdasdasd`;
    h23.innerHTML = `pop up`;
    i.setAttribute("class", "fas fa-times close-btn");
    modal.setAttribute("class", "popup-box");
    modal.setAttribute("id", "box");
    btn.setAttribute("class", `moreInfo${temples.order}`);
    btn.setAttribute("data-modal-target", `#modal`);
    btn.innerHTML = (`More Info`);

// ======

    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay');

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


    h2.textContent = `${temples.name}`;
    p.innerHTML = `<strong>Address:</strong> ${temples.address} <br/>  
  <strong>Contact Number:</strong> ${temples.contactNumber} <br/>
  <strong>History:</strong> ${temples.history} `;


    if (temples.order == 1) {
        btn.setAttribute("class", `moreInfo${temples.order}`);
    } else if (temples.order == 2) {
        btn.setAttribute("class", `moreInfo${temples.order}`);
    } else if (temples.order == 3) {
        btn.setAttribute("class", `moreInfo${temples.order}`);
    } else {
        btn.setAttribute("class", `moreInfo${temples.order}`);
    }

    card.appendChild(image);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(btn);
    card.appendChild(modal);
    modal.appendChild(i);
    modal.appendChild(h23);
    modal.appendChild(p1);
    modal.appendChild(ac);

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