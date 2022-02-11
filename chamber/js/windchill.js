

let t = parseFloat(document.querySelector("#temperature").textContent);
let s = parseFloat(document.querySelector("#speed").textContent);
let windchill = "";

if (t <= 50 && s > 3) {
  windchill = windChill(t, s);
  windchill = `${windchill}°F`;
} else {
  windchill = "N/A";
}
// output
document.querySelector("#wind").innerHTML = windchill;

function windChill(temp, speed) {
    solution = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    total = solution.toFixed(2);
    return total;
}
