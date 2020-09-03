let apiKey = 'ec9d7d715df637631606fb17c5a2b580';
const fetch = require("node-fetch");
let units = 'metric';
let searchMethod;

function getSearchMethod(searchTerm) {
  if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm) {
    searchMethod = 'zip';
  } else {
    searchMethod = 'q';
  }
}

const OpenWeather = {
  searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    //console.log('searchWeather is running...');
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${apiKey}&units=${units}`).then(response => {
      //console.log('result:', result)
      return response.json();
    }).then(jsonResponse => {
      //init(jsonResult);
      console.log('jsonResponse is:', jsonResponse)
      return ({
        date: new Date((jsonResponse.dt*1000)).toLocaleString(),
        weather: jsonResponse.weather[0].main,
        temp: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity, 
      })
    }).catch((error) => {
      console.log(error);
    })
  }
}

console.log(OpenWeather.searchWeather('prague'))

export default OpenWeather;