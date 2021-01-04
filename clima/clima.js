const axios = require('axios');

const code = 'd4506c061cmsh127d4c5cd703e93p18b3c9jsn76515ed01d6e';

const getClima = async(lat, lng) => {
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?lat=${lat}&lon=${lng}&units=metric`,
        headers: { 'x-rapidapi-key': code }
    });

    const respuesta = await instance.get();
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}