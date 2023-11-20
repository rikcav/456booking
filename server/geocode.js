const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
  params: {
    address: 'Rio de Janeiro, RJ',
    language: 'pt-br'
  },
  headers: {
    'X-RapidAPI-Key': '5f9d51799cmsh292c3c14680e9bbp138eb0jsna6a30853a061',
    'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
  }
};

async function fetchData() {
  try {
    const response = await axios.request(options);
    const location = response.data.results[0].geometry.location;

    const latitude = location.lat;
    const longitude = location.lng;

    console.log(response.data);
    console.log('Latitude: ', latitude);
    console.log('Longitude: ', longitude);
  } catch (error) {
    console.error(error);
  }
}

fetchData();