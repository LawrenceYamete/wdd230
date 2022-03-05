const requestURL = "https://github.com/LawrenceYamete/wdd230/main/chamber/data/data.json";


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const partners = jsonObject["partners"];
    partners.forEach(displayPartners);
  });

function displayPartners(partners) {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let image = document.createElement("img");

const imagesToLoad = document.querySelectorAll('img[data-src]');
const imgOptions = {
    threshold: 0, 
    rootMargin: "0px 0px 100px 0px"};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => { image.removeAttribute('data-src');
  };
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) { loadImages(item.target);
         observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
} 


  h2.textContent = `${partners.name}`;
  p.innerHTML = `<strong>Address:</strong> ${partners.address} <br/>  
  <strong>Contact Number:</strong> ${partners.contactNumber} <br/>
  <strong>Website:</strong> ${partners.website}`;

  image.setAttribute("src", "image/gray-background-7131-96d780fd18d4eaf58a7331d45573204e@1x.jpg");
  image.setAttribute("data-src", partners.imageurl);
  image.setAttribute(
    "alt",
    `${partners.name} Partner of Manila Lights`
  );
  image.setAttribute("loading", "lazyload");

  if (partners.order == 1) {
    image.setAttribute(
      "alt",
      `${partners.name}. The ${partners.order}st partner of Manila Lights`
    );
  } else if (partners.order == 2) {
    image.setAttribute(
      "alt",
      `${partners.name}. The ${partners.order}nd partner of Manila Lights`    );
  } else if (partners.order == 3) {
    image.setAttribute(
      "alt",
      `${partners.name}. The ${partners.order}rd partner of Manila Lights`    );
  } else {
    image.setAttribute(
      "alt",
      `${partners.name}. The ${partners.order}th partner of Manila Lights`    );
  }

  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(image);

  document.querySelector("div.cards").appendChild(card);
}
