import React from "react";

function Card(props){
  const imgURL = `owf owf-${props.icon1} owf-5x`;
    return(  
    <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="card card1">
      <div className="card-body">
        <h5 className="card-title">{props.dt}</h5>
        <h6 className="card-text">{props.celsius1} &deg;C</h6>
        <i className={imgURL}></i>
        <h6 className="card-text">{props.description1}</h6>
      </div>
    </div>
  </div>

    );
}

export default Card;