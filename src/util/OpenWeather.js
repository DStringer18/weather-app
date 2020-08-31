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

/*function init(resultFromServer) {
  console.log('weather type:', resultFromServer.list[0].weather[0].main);
}*/

const OpenWeather = {
  searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    //console.log('searchWeather is running...');
    return fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?${searchMethod}=${searchTerm}&APPID=${apiKey}&units=${units}`).then(response => {
      //console.log('result:', result)
      return response.json();
    }).then(jsonResponse => {
      //init(jsonResult);
      console.log('jsonResponse is:', jsonResponse)
      return jsonResponse.list[0].weather[0].main
    }).catch((error) => {
      console.log(error);
    })
  }
}

//console.log(OpenWeather.searchWeather('prague'))

export default OpenWeather;