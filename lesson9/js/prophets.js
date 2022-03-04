const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    const cards = document.querySelector('.cards');

    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let pic = document.createElement('img');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        p.textContent = `Date of Birth: ${prophet.birthdate}`;
        p2.textContent = `Place of Birth: ${prophet.birthplace}`;
        pic.setAttribute('src', prophet.imageurl);
        pic.setAttribute('alt', `Date of Birth: ${prophet.birthdate}`);
        pic.setAttribute('loading','lazy');
        card.append(h2);
        card.append(p);
        card.append(p2);
        card.append(pic);
        cards.append(card);
    });
  });