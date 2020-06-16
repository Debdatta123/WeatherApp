import React from "react";
import { Link } from "react-router-dom";
function NewsHeading() {
  return (
    <div className="curved">      
      <h1>Welcome to weather app</h1>      
      <p>Latest Weather News</p>  
        <Link to="/" className="b2">Weather</Link>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,160L60,160C120,160,240,160,360,181.3C480,
      203,600,245,720,250.7C840,256,960,224,1080,213.3C1200,203,1320,213,1380,
      218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,
      320,720,320C600,320,480,320,360,320C240,320,120,320,60,
      320L0,320Z"
        />
      </svg>
    </div>
   
  );
}
export default NewsHeading;
