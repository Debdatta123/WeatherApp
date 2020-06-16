import React from "react";


function NewsCard(props){
    return( 
        <div className="col-lg-5 col-md-10 col-sm-10"> 
        <div className="card news-card" >
  <img className="card-img-top" src={props.image} alt="Climate News" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.d}</p>
    </div>
    </div>
        </div>
    )
}

export default NewsCard;