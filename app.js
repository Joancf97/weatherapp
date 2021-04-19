const request = require('request');
const geocode = require('./utils/geocode')

// URL of weatherstack
// const url = 'http://api.weatherstack.com/current?access_key=c8172dac92ec90dad978d5e9afa5fad7&query=37.8267,-122.4244&units=f';

// // Request the data
// request({url: url, json: true}, (error, response) => {
//   if(error){
//     console.log(error);
//   }else if (response.body.error){ 
//     console.log("unable to get the weather info");
//   } else {
//     const currentTemp = response.body.current.temperature;
//     const felstLike = response.body.current.feelslike;
//     console.log(`It's currently ${currentTemp}F and feels like ${felstLike}F`);
//   }
// });

geocode('Boston', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
});