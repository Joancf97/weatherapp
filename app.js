const request = require('request');

// URL of weatherstack
const url = 'http://api.weatherstack.com/current?access_key=c8172dac92ec90dad978d5e9afa5fad7&query=37.8267,-122.4244&units=f';

// Request the data
request({url: url, json: true}, (error, response) => {
  if(error){
    console.log(error);
  }else if (response.body.error){ 
    console.log("unable to get the weather info");
  } else {
    const currentTemp = response.body.current.temperature;
    const felstLike = response.body.current.feelslike;
    console.log(`It's currently ${currentTemp}F and feels like ${felstLike}F`);
  }
});

// mapbox - geolocation (geocoding) 
// URL of mapbox
const urlMAp = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Guatemala.json?access_token=pk.eyJ1Ijoiam9hbmNmOTciLCJhIjoiY2tuaTB3NHN1MGFjbDJ3cGNobDJ0YnplbyJ9.B5O9RhRZ602zOtISHCXUjQ&limit=1';
// Request the location 
request({url: urlMAp, json: true}, (error, response) => {
  if(error){
    console.log(error);
  }else if(response.body.message){ 
    console.log(response.body.message);
  } else {
    const place = response.body.features[0].place_name;
    const long = response.body.features[0].center[0];
    const lat = response.body.features[0].center[1];
    console.log(`${place} is in long ${long} and lat ${lat}`);
  }
});