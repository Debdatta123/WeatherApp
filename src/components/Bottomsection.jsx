import React from 'react';
import Card from "./Card";
import moment from 'moment-timezone';
const API_key="70f846b34231239ba4dd4fc5f0e0fe8d"

class Bottomsection extends React.Component {
    constructor(){
        super();
        this.state={
          city:undefined,
          // country:undefined,
          main:undefined,
          celsius:undefined,
          temp_max:undefined,
          temp_min:undefined,
          humidity:undefined,
          pressure:undefined,
          description:"",
          sunrise:undefined,
          sunset:undefined,
          speed:undefined,
          cloud:undefined,
          error:false
        };
       
      }
      
      calCelsius(temp){
        let c=Math.floor(temp-273.15);
        return c;
      }
      
      
      calhrmin1(n){
        var utc = n;
        var m = moment.unix(utc).tz('Asia/Kolkata').format('HH:mm:ss');
        return(m);
      }
      
      capital(string){
         return(string[0].toUpperCase() + string.slice(1)); 
        
      }
      
      getWeather=async (e) =>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    // console.log(city);
    // const country='in';
    if(city){
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=${API_key}`);
    const response=await api_call.json();
    console.log(response);
    this.setState({
      city:response.name,
      // country:response.sys.country,
      celsius: this.calCelsius(response.main.temp),
      temp_max:this.calCelsius(response.main.temp_max),
      temp_min:this.calCelsius(response.main.temp_min),
      pressure:response.main.pressure,
      humidity:response.main.humidity,
      sunrise:this.calhrmin1(response.sys.sunrise),
      sunset:this.calhrmin1(response.sys.sunset),
      speed:response.wind.speed,
      cloud:response.clouds.all,
      description:this.capital(response.weather[0].description)
    });
    }
    else{
  this.setStateState({error:true})
    }
  }
  
  render(){
  return(
    <div>
    <Card />
    </div>
  );
  }
}

export default Bottomsection;