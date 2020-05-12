const axios = require('axios');

const weather_key = `45f9605138e8550520965144f6117b6b`;
const weatherUrl = `http://api.weatherstack.com/current`;

const geocode_key= `pk.eyJ1IjoiZ3VyMjI5NiIsImEiOiJjazl6Nmc2dzMwNTRmM25xcjh4Z3B5MHoxIn0.JJ1U_1nY63ZNaq2aMSqgQA`;
const city = `12`;
const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json`;


// axios.get(weatherUrl,{
//     params:{
//         access_key:`${weather_key}`,
//         query:'40.7831,-73.9712'
        
//     }
    
// }).then(res=>{
//     if(res.data.error){
//         console.log('unable to find location')
//     }else{
//         const curr = res.data.current;
//         console.log(`${curr.weather_descriptions.toString()}. temperature is ${curr.temperature} out. Feels like ${curr.feelslike} out`);
//     }
// })
// .catch(err=>console.error(err));


// axios.get(geocodeUrl,{
//      params:{
//         access_token:geocode_key,
//         limit:1
//      }
// }).then(res=>{
//     if(res.data.features.length > 0){
//         const latitude = res.data.features[0].center[1];
//         const longitude = res.data.features[0].center[0];
    
//         console.log(latitude,longitude);
//     }else{
//         console.log(`please try with a different search`)
//     } 
    
// })
//  .catch(err=>console.error('unable to contact geocode servers'));

const geocode =async (address,callback)=>{
     const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZ3VyMjI5NiIsImEiOiJjazl6Nmc2dzMwNTRmM25xcjh4Z3B5MHoxIn0.JJ1U_1nY63ZNaq2aMSqgQA&limit=1`;

     const res = await axios.get(geocodeUrl);

     callback(res.data);
};


geocode


// const showOutput = (res)=>{
//   if(res.data.current){
//       const curr = res.data.current;
//       console.log(`${curr.weather_descriptions.toString()}. temperature is ${curr.temperature} out. Feels like ${curr.feelslike} out`);
//   }
// }