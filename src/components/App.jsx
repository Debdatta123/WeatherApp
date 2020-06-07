import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Main from "./Main";
import News from "./News";

class App extends React.Component{
    render(){
    return( 
     <BrowserRouter>
     <Switch>
     <Route path="/" component={Main} exact/>
     <Route path="/news" component={News} />
     </Switch>
     </BrowserRouter>
    );}
}

export default App;