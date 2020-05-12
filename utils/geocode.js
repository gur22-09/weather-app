const axios = require('axios');

const geocode =async (address,callback)=>{
    try{
         const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZ3VyMjI5NiIsImEiOiJjazl6Nmc2dzMwNTRmM25xcjh4Z3B5MHoxIn0.JJ1U_1nY63ZNaq2aMSqgQA&limit=1`;

         const res = await axios.get(geocodeUrl);

         callback({
              latitude:res.data.features[0].center[1],
              longitude:res.data.features[0].center[0],
              location:res.data.features[0].place_name
         },undefined);
    }catch(err){
         callback(undefined,err);
    }
};

module.exports = geocode;