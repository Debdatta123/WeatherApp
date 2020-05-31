import React from "react";


function Midsection(props) {
    return(
<div className="jumbotron card card-image jb">
<div className="text-white text-center py-5 px-4">
  <div>
    <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>{props.city} , {props.country}</strong></h2>
    <p className="para">{props.temp_celsius} &deg;C , {props.description}</p>
    
    <table className="table table-bordered">
  <tbody>
    <tr>      
      <td >Sunrise</td>
    <td>{props.sunrise} hrs</td>     
    </tr>
    <tr>     
      <td>Sunset</td>
      <td>{props.sunset} hrs</td>
    </tr>
    <tr>     
      <td>Minimum Temprature</td>
      <td>{props.temp_min} &deg;C</td>
    </tr>
    <tr>     
      <td>Maximum Temprature</td>
      <td>{props.temp_max} &deg;C</td>
    </tr>
    <tr>     
      <td>Humidity</td>
    <td>{props.humidity} %</td>
    </tr>
    <tr>     
      <td>Pressure</td>
    <td>{props.pressure} hPa</td>
    </tr>
    <tr>     
      <td>Wind Speed</td>
    <td>{props.speed} m/s</td>
    </tr>
    <tr>     
      <td>Cloudiness</td>
    <td>{props.cloud} %</td>
    </tr>
       
  </tbody>
</table>
  </div>
</div>
</div>
);
}

export default Midsection;
