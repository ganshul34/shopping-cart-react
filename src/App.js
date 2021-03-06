import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Footer from './components/Footer';
import About from './components/About'
import  NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/about" component={About}/>
                    <Route path="*" component={NotFound}/>
                  </Switch>
                  <Footer/>
             </div>
             
       </BrowserRouter>
      
    );
  }
}

export default App;
