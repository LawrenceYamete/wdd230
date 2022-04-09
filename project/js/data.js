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

    let likeBtn = document.createElement("i");
    

    let likedBtn = document.createElement('i');
    
    likeBtn.appendChild(likedBtn);

    if(localStorage.getItem(temples.name) == "true") {
      likedBtn.setAttribute("class", "fa-solid fa-thumbs-up fa-xl");
      
      }
      else {
        likedBtn.setAttribute("class", "fa-solid fa-heart fa-xl");
        likedBtn.classList.add('active');
      }
  
    likeBtn.setAttribute('id', 'like');
    likeBtn.setAttribute('value', "like-btn");
    likeBtn.addEventListener("click", () => {
          if(localStorage.getItem(temples.name) == "true") {
            localStorage.setItem(temples.name, "false");
            likedBtn.setAttribute("class", "fa-solid fa-thumbs-up fa-xl");
            
        }
        else {
            localStorage.setItem(temples.name, "true");
            likedBtn.setAttribute("class", "fa-solid fa-heart fa-xl");
            likedBtn.classList.add('active');
        }
    });
    



    // let numVisits = Number(window.localStorage.getItem("likeBtn-ls"));
    // var visitsDisplay = document.querySelector(".visits");
    // var btn = document.querySelector(".likeBtn");
    // visitsDisplay.textContent = numVisits;
    // numVisits++;
    // localStorage.setItem("likeBtn-ls", numVisits);
    // visitsDisplay.textContent = numVisits;
    // =================================

    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let image = document.createElement("img");
    let a = document.createElement("a");
    

    
    image.setAttribute("class", "templeImgs");
    image.setAttribute("src", "images/medium/iStock-995624510-3000x1500.jpg");
    image.setAttribute("data-src", temples.imageurl);
    image.setAttribute(
        "alt",
        `${temples.name}`
    );
    image.setAttribute("loading", "lazyload");
    
    card.setAttribute("class", `cardtemple`);
    
    if (temples.order == 1) {
        card.setAttribute("class", `cardtemple${temples.order}`);
    } else {
        card.setAttribute("class", `cardtemple${temples.order}`);
    }


    h2.textContent = `${temples.name}`;
    p.innerHTML = `<strong>Address:</strong> ${temples.address} <br/>  
  <strong>Contact Number:</strong> ${temples.contactNumber} <br/>
  <strong>Temple Locale:</strong> ${temples.history} `;

    a.setAttribute("data-modal-target", `#modal`);
    a.setAttribute("class", `moreInfo${temples.order}`);
    a.setAttribute("href", `${temples.website}`)
    a.setAttribute("target", `_blank`)
    a.innerHTML = `More Info`;

    card.appendChild(image);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(likeBtn);
    card.appendChild(a);
    
    
    document.querySelector("div.cards").appendChild(card);


    // let numVisits = Number(window.localStorage.getItem("likeBtn-ls"));
    // function incrementButton() {
    //     var visitsDisplay = document.querySelector(".visits");
    //     var btn = document.querySelector(".likeBtn");

        
    //     visitsDisplay.textContent = numVisits;
    //     numVisits++;

    //     localStorage.setItem("likeBtn-ls", numVisits);
    //     visitsDisplay.textContent = numVisits;
    // }

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

    // const openModalButtons = document.querySelectorAll('[data-modal-target]')
    // const overlay = document.getElementById('overlay')
    // openModalButtons.forEach(a => {
    //     a.addEventListener('click', () => {
    //         const modal = document.querySelector(a.dataset.modalTarget)
    //         openModal(modal)
    //     })
    //     })
    
    //     overlay.addEventListener('click', () => {
    //     const modals = document.querySelectorAll('.modal.active')
    //     modals.forEach(modal => {
    //         closeModal(modal)
    //     })
    //     })
    
    //     function openModal(modal) {
    //     if (modal == null) return
    //     modal.classList.add('active')
    //     overlay.classList.add('active')
    //     }
    
    //     function closeModal(modal) {
    //     if (modal == null) return
    //     modal.classList.remove('active')
    //     overlay.classList.remove('active')
    //     }
}

// function incrementButton() {

//     let likeDisplay = document.createElement("p");
//     likeDisplay.setAttribute("class", "display");
//     let like = Number(window.localStorage.getItem("button-ls"));

//     like++;

//     localStorage.setItem("button-ls", like);

//     likeDisplay.innerHTML = `${like}`;

//     document.querySelector("section.cardtemple").appendChild(likeDisplay);

// }



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


