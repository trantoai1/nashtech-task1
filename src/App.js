
import './App.css';
import React, { Component } from 'react';

import Footer from './pages/Footer';

import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import { routes } from './const/routes';
import Header from './pages/Header';
import AuthService from './services/AuthService';
import PrivateRoute from './components/PrivateRoute';

import Permit from './pages/Permit';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    

    this.state = {
      //showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      routeComponents:undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    console.log(AuthService.getCurrentUser());
    if (user) {
      this.setState({
        currentUser: user,
        //showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        
      });
    }
    this.setState({
      routeComponents: routes.map(({ path, component,user,admin }, key) => 
       (
        //  admin? 
        //    this.state.showAdminBoard?<PrivateRoute path={path} component={component} key={key}/>:<Route key={key} path="/permit" component={Permit}/>
        //    : 
          user?
          
              <PrivateRoute path={path} component={component} key={key}/>
          :
          <Route exact path={path} component={component} key={key} />


      )
      
      ),
    });
    
  }

  logOut() {
    AuthService.logout();
  }
  
  
  render() {
  
    return (
      <>
        <Router>
          <Header />
          <Switch>
            
            {this.state.routeComponents}
            
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;

