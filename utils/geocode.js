const request = require('request');


const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoiam9hbmNmOTciLCJhIjoiY2tuaTB3NHN1MGFjbDJ3cGNobDJ0YnplbyJ9.B5O9RhRZ602zOtISHCXUjQ&limit=1';

  request({url: url, json: true}, (error, response) => {
    if(error){
      callback('Unable to connect to location services', undefined);
    }else if(response.body.features.length === 0){
      callback('Unable to find location. try another search', undefined);
    } else { 
      callback(undefined, {
        latitud: response.body.features[0].center[1],
        longitud: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  })
}

module.exports = geocode;