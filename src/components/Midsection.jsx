import React from "react";


function Midsection() {
    return(
<div className="jumbotron card card-image jb">
<div className="text-white text-center py-5 px-4">
  <div>
    <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>City , current temp</strong></h2>
    <p className="para">Description</p>
    
    <table className="table table-bordered">
  <tbody>
    <tr>      
      <td >Sunrise</td>
      <td>sfw</td>     
    </tr>
    <tr>     
      <td>Sunset</td>
      <td>@fat</td>
    </tr>
    <tr>     
      <td>Minimum Temprature</td>
      <td>@twitter</td>
    </tr>
    <tr>     
      <td>Maximum Temprature</td>
      <td>@twitter</td>
    </tr>
    <tr>     
      <td>Humidity</td>
      <td>@twitter</td>
    </tr>
    <tr>     
      <td>Pressure</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  </div>
</div>
</div>
);
}

export default Midsection;
