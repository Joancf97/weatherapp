const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Mixco', (error, data) => {
  if(error){
    return console.log(error);
  }
  forecast(data.latitud, data.longitud, (error, forecastData) =>{
    if(error){
      return console.log(error);
    }
    console.log('The weather in ' + data.location + ' is ' + forecastData);
  });
});