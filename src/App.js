import React from 'react' ;
import "./App.css"

import Home from "./Home"
import Gallery from "./Gallery"
import Contact from "./Contact"
import TourList from "./TourList"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Switch,Route,Redirect} from "react-router-dom";

const App = () => {
     
     return (
          <>
               
                          
                         <Switch>
                         <Route exact path="/" component={Home}/> 
                         <Route exact path="/gallery" component={Gallery}/>
                         <Route exact path="/tourlist" component={TourList}/>
                         <Route exact path="/contact" component={Contact}/>
                         <Redirect to = "/" />
                         </Switch>
           
                    
               
          </>
     )
}

export default App
