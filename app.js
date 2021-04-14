const request = require('request');

// URL of weatherstack
const url = 'http://api.weatherstack.com/current?access_key=c8172dac92ec90dad978d5e9afa5fad7&query=37.8267,-122.4244';

// Request the data
request({url: url}, (error, response) => {
  if(error){
    console.log(error);
  } else {
    const data = JSON.parse(response.body);
    console.log(data.current);
  }
});
