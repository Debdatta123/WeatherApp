import React from "react";
import { Link } from "react-router-dom";

class News extends React.Component{
    render(){
    return( 
        <div> 
    <h1>This is News Page</h1>
    <Link to="/"><button>weather</button></Link>
    </div>
    );
    }
}

export default News;