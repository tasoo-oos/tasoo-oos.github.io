const WEATHER_API = 'f18f04af48681090c5ab6858348b7dd2';

const weatherCity = document.querySelector('#weather h3');
const weatherMsg = document.querySelector('#weather span');
const weatherImg = document.querySelector('#weather img');

function onGeoSuccess(p) {
    console.log(p);
    const lat = p.coords.latitude;
    const lon = p.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`;

    fetch(url)
        .then((responce) => responce.json())
        .then((data) => {
            console.log(data);

            weatherCity.innerText = data.name;
            weatherMsg.innerText = `${data.weather[0].description} ${data.main.temp}°C`;
            weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weatherImg.style.width = '30px';
            weatherImg.style.height = '30px';
        });
}

function onGeoError(e) {
    console.log(e);
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
