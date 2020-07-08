const key = "2xlN6UcP4d0pt1Vs87WDOMZ2A0m73t86";

// Get weather
const getWeather = async (cityKey) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
    const query = `${cityKey.Key}?apikey=${key}`;
    const response = await fetch(base + query);
    console.log(response)
    const data = await response.json();
    return data[0]
}

//Get city information
const getCity = async (city) => {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json()
    return data[0]
}

// getCity("manchester")
//     .then(data => {
//         return getWeather(data)
//     })
//     .then(data => {
//         console.log(data.Temperature.Metric.Value)
//     })
//     .catch(err => {
//         console.log(err)
//     })