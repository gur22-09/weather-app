const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('12',(res,err)=>{
     if(err) console.error('Unable to find location');
     console.log(res);
});

forecast(40.7831,-73.9712,(res,err)=>{
     if(err) console.log(`unable to reach weather server :(`)
     if(res.data.error){
         console.log(`unable to find location`);
     }else{
         const curr = res.data.current;
         console.log(`${curr.weather_descriptions.toString()}. temperature is ${curr.temperature} out. Feels like ${curr.feelslike} out`);
     } 
     
 })


