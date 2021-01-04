const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
// https://rapidapi.com/dev132/api/city-geo-location-lookup
// código de la api
// d4506c061cmsh127d4c5cd703e93p18b3c9jsn76515ed01d6e

// argv.direccion
// lugar.getLugarLatLng(argv.direccion)
//     .then(datos => {
//         console.log(datos);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// clima.getClima(40.67, -73.94)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const tempe = await clima.getClima(coords.latitud, coords.longitud);
        return `El clima de ${coords.direccion} es de ${tempe}`
    } catch (error) {
        return `No se pudo determinar el clima de ${coords.direccion}`
    }
};

getInfo(argv.direccion)
    .then(mensaje => {
        console.log(mensaje)
    })
    .catch(err => {
        console.log(err);
    });