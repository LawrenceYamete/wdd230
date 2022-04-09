
// This is the code that I am trying to get the 3 day weather but I can't figure it out. If you have any comments please let me know I also eager to learn this code. thank you. 

// const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=1694008&appid=4a1ef8f57d85cd7d984fabac9900ae9e";

// fetch(apiURL)
//     .then((response) => response.json())
//     .then((jsObject) => {
//         // console.log(jsObject);
//         for(i = 0; i<3; i++){
//             const currentTemp = document.querySelector('#current-temp');
//             const currentSpeed = document.querySelector('#current-speed');
//             const iconsrc = `http://openweathermap.org/img/wn/${jsObject.list[i].weather[0].icon}.png`;
//             const name = document.querySelector('figcaption')

//             currentSpeed.textContent = jsObject.list[i].wind.speed.toFixed(2);
//             currentTemp.textContent = jsObject.list[i].main.temp.toFixed(2);
//             let desc = jsObject.list[i].weather[0].description;
//             desc = desc.split(' ').map(capitalize).join(' ');

//             document.querySelector('#weathericon').setAttribute('src', iconsrc);
//             document.querySelector('#weathericon').setAttribute('alt', desc);
//             document.querySelector('figcaption').textContent = desc;
//             name.innerHTML = `<p>Currently: ${desc}</p>`;

//             var tempF = currentTemp.textContent;
//             var speed = currentSpeed.textContent;
//             var results = windChill(tempF, speed);

//             let windchill = "";
//             if (tempF <= 50 && speed > 3) {
//                 windchill = windChill(tempF, speed);
//                 windchill = `${windchill}°F`;
//             } else {
//                 windchill = "N/A";
//             }

//             document.querySelector('#chill').innerHTML = results;
//     }});

// var d = new Date();
// var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//
// function CheckDay(day){
//     if(day + d.getDay() > 6){
//         return day + d.getDay() - 7;
//     }
//     else{
//         return day + d.getDay();
//     }
// }

//     for(i = 0; i<5; i++){
//         document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
//     }

// Instead to get a 3 day weather. I used only one.


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=4a1ef8f57d85cd7d984fabac9900ae9e&units=metric";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        const currentTemp = document.querySelector('#current-temp');
        const currentSpeed = document.querySelector('#current-speed');
        const currentHumidity = document.querySelector('#current-humidity');
        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const name = document.querySelector('figcaption')

        currentHumidity.textContent = jsObject.main.humidity;
        currentSpeed.textContent = jsObject.wind.speed.toFixed(2);
        currentTemp.textContent = jsObject.main.temp.toFixed(2);
        let desc = jsObject.weather[0].description;
        desc = desc.split(' ').map(capitalize).join(' ');


        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
        name.innerHTML = `<p>Currently: ${desc}</p>`;

        var tempF = currentTemp.textContent;
        var speed = currentSpeed.textContent;
        var results = windChill(tempF, speed);
        
        if (tempF <= 50 && speed > 3) {
            

            if (windchill <= 74 && windchill >= -20) {
                alert("Sorry, The SERUNI Temple Inn and Suite is not available for today because of the current weather. Thank you for understanding.");
            } 
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

