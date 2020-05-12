const axios = require('axios');

const forecast = async (latitude,longitude,callback)=>{
    const weather_key = `45f9605138e8550520965144f6117b6b`;
    const weatherUrl = `http://api.weatherstack.com/current`;

    try{
         const res = await axios.get(`${weatherUrl}?access_key=${weather_key}&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`)
         callback(res,undefined);
    }catch(err){
        callback(undefined,err); 
    }

};

module.exports = forecast;