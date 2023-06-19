import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
// import NotFound from './components/NotFound.js';
import Create from './components/Create';
import Print from './components/Print';



const Root = () => {
    return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={App} />
              <Route path="/calling-card" component={Create}/> 
              <Route path="/print" component={Print}/> 
              {/* <Route component={NotFound} /> */}
          </Switch>
      </BrowserRouter>
    )
  }
  
  export default Root