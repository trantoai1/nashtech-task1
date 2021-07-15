//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import bootstrap from 'bootstrap';
//import Food from './component/Food';
import Header from './component/Page/Header';
import Slider from './component/Page/Slider';
import Shop from './component/Page/Shop';
import Footer from './component/Page/Footer';

import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import LeftBar from './component/Page/LeftBar';
import ProductDetail from './component/Page/ProductDetail';
import Home from './component/Page/Home';



class App extends Component {


  render() {
    return (
      <>
        <Router>
          
          <Switch>
            <Route path="/products/:id" >
            <Header class={"header"}/>
          <ProductDetail/>
            </Route>
            <Route path="/products">
            <Header class={"header"}/>
                
                <Shop />
              
            </Route>
            <Route path="/topics">
              <ProductDetail />
            </Route>
            <Route exact path="/">
              <Header class="header header-absolute"/>
              <Slider />
              <Home/>
            </Route>
          </Switch>
          <Footer />


        </Router>

      </>

    );
  }
}

export default App;

