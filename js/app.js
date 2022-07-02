let elForm = document.querySelector('.form');
let inputs = document.querySelector('.input');
let cityName = document.querySelector('.city');
let countryName = document.querySelector('.country-name');
let tempResult = document.querySelector('.temp-result');
let weatherDesc = document.querySelector('.weather-desc');
let windSpeed=document.querySelector('.wind-result');
let elContainer=document.querySelector('.container__inner');
let input;

let data = (country) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
        .then(res => res.json())
        .then(data => {
            renderWeather(data);
        })
}
elForm.addEventListener('submit', evt => {
    evt.preventDefault();

    input=inputs.value[0].toUpperCase() + inputs.value.slice(1);

    data(input);

})
let renderWeather = (fullData) => {
    if(input===fullData.name){

    cityName.textContent=fullData.name;

    countryName.textContent = fullData.sys.country;

    tempResult.textContent=fullData.main.temp;

    windSpeed.textContent=fullData.wind.speed+" "+"m/s";

    weatherDesc.textContent=fullData.weather[0].description;

    inputs.value=""
    }
}