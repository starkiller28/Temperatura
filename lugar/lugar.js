const axios = require('axios');

const code = 'd4506c061cmsh127d4c5cd703e93p18b3c9jsn76515ed01d6e';

const getLugarLatLng = async(lugar) => {
    const encodedurl = encodeURI(lugar);
    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodedurl}`,
        headers: { 'x-rapidapi-key': code }
    });

    const respuesta = await instance.get();
    if (respuesta.data.data.length === 0) {
        throw new Error(`No hay resultados para ${lugar}`);
    }
    //datos de la api
    const data = respuesta.data.data[0];
    const direccion = data.name;
    const latitud = data.latitude;
    const longitud = data.longitude;

    return {
        direccion,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLng
}