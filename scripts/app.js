const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img")
const isValid = document.querySelector("p");

//update UI
const updateUI = (data) => {
    //destructuring the props
    const {cityDets, weather} = data;
    if (weather.IsDayTime) {
        time.src = "img/day.svg";
    } else {
        time.src = "img/night.svg";
    }

    icon.src = `img/icons/${weather.WeatherIcon}.svg`;
    isValid.classList.add("d-none")

    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    `;

    if (card.classList.contains("d-none")) {
        card.classList.remove("d-none")
    }

}


const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets);

    return { cityDets, weather };
}

cityForm.addEventListener("submit", e => {
    //Prevent default
    e.preventDefault()

    //Get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city).then(data => {
        updateUI(data)
        console.log(data)
    })
    .catch(err => {
        console.log(err)
        isValid.classList.remove("d-none")
        isValid.innerHTML = "Type in a correct city :)";
        card.classList.add("d-none");
    })
})