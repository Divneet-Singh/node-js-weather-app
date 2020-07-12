const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
if (address) {
    geoCode(address, (error, { latitude, longitude, location } = {}) => {

        if (error) {
            return console.log(error);
        }
        forecast(latitude, longitude, (error, forecast) => {
            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecast);
        })
    });
} else {
    console.log("Please provide a location");
}
