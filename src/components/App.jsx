import React from "react";
import Topsection from "./Topsection";
import Midsection from "./Midsection";

// var createReactClass = require('create-react-class');

const API_key="9af22302fcc9e61a4f1b320749b26244"
class App extends React.Component{
// constructor(){
//   super();
//   this.state={};
//   this.getWeather();
// }

getWeather=async () =>{
  const api_call=await fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=70f846b34231239ba4dd4fc5f0e0fe8d');
  const response=await api_call.json();
  console.log(response);
}

render(){
return(
  <div>
  <Topsection />
  <Midsection />
</div>
);
}
}


export default App;
 

