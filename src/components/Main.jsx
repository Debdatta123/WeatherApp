import React from "react";
import Topsection from "./Topsection";
import Midsection from "./Midsection";
import Card from "./Card";
import moment from 'moment-timezone';

const API_key="70f846b34231239ba4dd4fc5f0e0fe8d"

class Main extends React.Component{
constructor(){
  super();
  this.state={
    city:undefined,
    main:undefined,
    celsius:undefined,
    temp_max:undefined,
    temp_min:undefined,
    humidity:undefined,
    pressure:undefined,
    description:"",
    description1:"",
    description2:"",
    description3:"",
    description4:"",
    description5:"",
    sunrise:undefined,
    sunset:undefined,
    speed:undefined,
    cloud:undefined,
    celsius1:undefined,
    celsius2:undefined,
    celsius3:undefined,
    celsius4:undefined,
    celsius5:undefined,
    icon:undefined,
    icon1:undefined,
    icon2:undefined,
    icon3:undefined,
    icon4:undefined,
    icon5:undefined,
    dt:undefined,
    dt1:undefined,
    dt2:undefined,
    dt3:undefined,
    dt4:undefined,
    dt5:undefined,
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

day(){
  var d = new Date();
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return(d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear());
}

day1(){
  var d = new Date();
  var d1=new Date(d);
  d1.setDate(d1.getDate()+1)
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return(d1.getDate()+" "+months[d1.getMonth()]+" "+d1.getFullYear());
}

day2(){
  var d = new Date();
  var d1=new Date(d);
  d1.setDate(d1.getDate()+2)
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return(d1.getDate()+" "+months[d1.getMonth()]+" "+d1.getFullYear());
}

day3(){
  var d = new Date();
  var d1=new Date(d);
  d1.setDate(d1.getDate()+3)
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return(d1.getDate()+" "+months[d1.getMonth()]+" "+d1.getFullYear());
}

day4(){
  var d = new Date();
  var d1=new Date(d);
  d1.setDate(d1.getDate()+4)
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return(d1.getDate()+" "+months[d1.getMonth()]+" "+d1.getFullYear());
}

day5(){
  var d = new Date();
  var d1=new Date(d);
  d1.setDate(d1.getDate()+5)
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return(d1.getDate()+" "+months[d1.getMonth()]+" "+d1.getFullYear());
}

capital(string){
   return(string[0].toUpperCase() + string.slice(1));   
}

getWeather=async (e) =>{
  e.preventDefault();
  const city=e.target.elements.city.value;

  const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=${API_key}`);
  const api_call1=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},in&appid=${API_key}`);
  const response=await api_call.json();
  const response1=await api_call1.json();
  console.log(response);
  console.log(response1);
  if(city){
    if (response.cod === "404" && response1.cod === "404") {
   console.log("error hai");
   this.setState({
    error:true});
      }
      else{
  this.setState({
    city:response.name,
    celsius: this.calCelsius(response.main.temp),
    celsius1: this.calCelsius(response1.list[7].main.temp),
    celsius2: this.calCelsius(response1.list[15].main.temp),
    celsius3: this.calCelsius(response1.list[23].main.temp),
    celsius4: this.calCelsius(response1.list[31].main.temp),
    celsius5: this.calCelsius(response1.list[39].main.temp),
    temp_max:this.calCelsius(response.main.temp_max),
    temp_min:this.calCelsius(response.main.temp_min),
    pressure:response.main.pressure,
    humidity:response.main.humidity,
    sunrise:this.calhrmin1(response.sys.sunrise),
    sunset:this.calhrmin1(response.sys.sunset),
    speed:response.wind.speed,
    cloud:response.clouds.all,
    description:this.capital(response.weather[0].description),
    description1:this.capital(response1.list[7].weather[0].description),
    description2:this.capital(response1.list[15].weather[0].description),
    description3:this.capital(response1.list[23].weather[0].description),
    description4:this.capital(response1.list[31].weather[0].description),
    description5:this.capital(response1.list[39].weather[0].description),
    icon:response.weather[0].id,
    icon1:response1.list[7].weather[0].id,
    icon2:response1.list[15].weather[0].id,
    icon3:response1.list[23].weather[0].id,
    icon4:response1.list[31].weather[0].id,
    icon5:response1.list[39].weather[0].id,
    dt:this.day(),
    dt1:this.day1(),
    dt2:this.day2(),
    dt3:this.day3(),
    dt4:this.day4(),
    dt5:this.day5(),
  });
  }
}
  else{
this.setState({
  error:true})
  }
}

render(){
return(
  <div>
  <Topsection 
    loadweather={this.getWeather}
    error={this.state.error}
  />
  <Midsection 
    city={this.state.city}
    icon={this.state.icon}
    temp_celsius={this.state.celsius}
    temp_max={this.state.temp_max}
    temp_min={this.state.temp_min}
    description={this.state.description}
    pressure={this.state.pressure}
    humidity={this.state.humidity}
    sunrise={this.state.sunrise}
    sunset={this.state.sunset}
    speed={this.state.speed}
    cloud={this.state.cloud}
    dt={this.state.dt}
   /> 
    <div className="container">
    <div className="row justify-content-center">   
   < Card
   celsius1={this.state.celsius1}
   description1={this.state.description1}
   icon1={this.state.icon1}
   dt={this.state.dt1}
/> 
< Card
   celsius1={this.state.celsius2}
   description1={this.state.description2}
   icon1={this.state.icon2}
   dt={this.state.dt2}
/> 
< Card
   celsius1={this.state.celsius3}
   description1={this.state.description3}
   icon1={this.state.icon3}
   dt={this.state.dt3}
/> 
< Card
   celsius1={this.state.celsius4}
   description1={this.state.description4}
    icon1={this.state.icon4}
    dt={this.state.dt4}
/> 
< Card
   celsius1={this.state.celsius5}
   description1={this.state.description5}
   icon1={this.state.icon5}
   dt={this.state.dt5}
/> 
</div>
</div>   
</div>

);
}
}


export default Main;
 

