//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import bootstrap from 'bootstrap';
//import Food from './component/Food';
import Header from './component/Page/Header';
import Slider from './component/Page/Slider';
import Content from './component/Page/Content';
import ProductList from './component/Product/ProductList';
import Footer from './component/Page/Footer';
import './component/Page/style.css';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import LeftBar from './component/Page/LeftBar';
class App extends Component {


  render() {
    return (
      <>
        <Router>
          <Header />
          <Slider />
          
            <div className="container-fluid">
              <div className="row">
                <LeftBar/>
                
                  <Switch>
                    <Route path="/products">

                    <ProductList/>

                    </Route>
                    <Route path="/topics">
                      <Topics />
                    </Route>
                    <Route path="/">
                      <Content />
                    </Route>
                  </Switch>
                
                </div>
            </div>
          
          
          <Footer/>

          
        </Router>

      </>

    );
  }
}

export default App;

function Topics() {
  return <h2>topics</h2>;
}
