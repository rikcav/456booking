const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotelsByCoordinates',
  params: {
    latitude: '-22.9068467',
    longitude: '-43.1728965',
    arrival_date: '2023-11-21',
    departure_date: '2023-11-23'
  },
  headers: {
    'X-RapidAPI-Key': '5f9d51799cmsh292c3c14680e9bbp138eb0jsna6a30853a061',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  }
};

async function fetchData() {
    try {
        const response = await axios.request(options);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

fetchData();