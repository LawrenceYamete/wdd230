const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=1694008&appid=4a1ef8f57d85cd7d984fabac9900ae9e&units=metric";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        const currentTemp = document.querySelector('#current-temp');
        const currentSpeed = document.querySelector('#current-speed');
        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const name = document.querySelector('figcaption')

        currentSpeed.textContent = jsObject.wind.speed.toFixed(2);
        currentTemp.textContent = jsObject.main.temp.toFixed(2);
        let desc = jsObject.weather[0].description;
        desc = desc.split(' ').map(capitalize).join(' ');


        document.querySelector('#name').textContent = jsObject.name;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
        name.innerHTML = `<p>Currently: ${desc}</p>`;

        var tempF = currentTemp.textContent;
        var speed = currentSpeed.textContent;
        var results = windChill(tempF, speed);

        let windchill = "";
        if (tempF <= 50 && speed > 3) {
            windchill = windChill(tempF, speed);
            windchill = `${windchill}°F`;
        } else {
            windchill = "N/A";
        }

        document.querySelector('#chill').innerHTML = results;
    });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

function windChill(tempF, speed) {
    var t = tempF;
    var s = speed;
    var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    return f.toFixed(2);

}