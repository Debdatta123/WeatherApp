import React from "react";
import { render } from "react-dom";
import News from "./News";

function NewsCard(props){
    return(
        <div>
            <h1>{props.news}</h1>
        </div>
    )
}

export default NewsCard;