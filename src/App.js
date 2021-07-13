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
          <Header />
          <Switch>
            <Route path="/product/:id" component={ProductDetail}>
            

            </Route>
            <Route path="/products">
              
                
                <Shop />
              
            </Route>
            <Route path="/topics">
              <ProductDetail />
            </Route>
            <Route path="/">
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

