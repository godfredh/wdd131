function calculateWindChillF(tempInF, speed) {
    return 35.74 + (0.6215 * tempInF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempInF * Math.pow(speed    , 0.16));
}

function calculateWindChillF(tempInC, speed) {
    return 13.2 + (0.6215 * tempInC) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * tempInC * Math.pow(speed, 0.16));
}

let airTemperatureInC = 10;

let airTemperatureInF = 10;

let windSpeed = 7;

//DISPLAY IN CELCIUS
if (airTemperatureInC <= 10 && windSpeed > 4.8) {
    document.querySelector("#windChill").innerHTML = `${calculateWindChillF(airTemperatureInC, windSpeed).toFixed(1)} C°`;
}
else {
    document.querySelector("#windChill").innerHTML = "N/A";
}