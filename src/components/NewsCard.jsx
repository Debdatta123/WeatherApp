import React from "react";
import { render } from "react-dom";
import News from "./News";

function NewsCard(props){
    return(
        <div class="col-lg-7">
        <div className="card ">
            <h1>{props.news}</h1>
        </div>
        </div>
    )
}

export default NewsCard;