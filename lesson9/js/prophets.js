const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let portrait = document.createElement("img");
  let pic = document.createElement("picture");


  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  p.innerHTML = `<strong>Birth Date:</strong> ${prophet.birthdate} <br/>  
  <strong>Birth Place:</strong> ${prophet.birthplace}`;

  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute(
    "alt",
    `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`
  );
  portrait.setAttribute("loading", "lazyload");

  if (prophet.order == 1) {
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}st Latter-day President`
    );
  } else if (prophet.order == 2) {
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}nd Latter-day President`
    );
  } else if (prophet.order == 3) {
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}rd Latter-day President`
    );
  } else {
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`
    );
  }

  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(pic);
  pic.appendChild(portrait);

  document.querySelector("div.cards").appendChild(card);
}

