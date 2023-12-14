const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
    params: { word: 'bright' },
    headers: {
        'X-RapidAPI-Key': '3e42ea202dmsh2b2a403d782de6fp1e8ed3jsnd4fb456ab462',
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}