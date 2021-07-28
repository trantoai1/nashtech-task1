
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
import AdminRoute from './util/AdminRoute';
import PrivateRoute from './util/PrivateRoute';
import { get } from './api/callAPI';




class App extends Component {
  constructor(props) {
    super(props);
    //this.logOut = this.logOut.bind(this);


    this.state = {
      //showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      routeComponents: undefined,
    };
    
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    //console.log(AuthService.getCurrentUser());
    if (user) {
      if (user.roles.includes("ROLE_ADMIN")) {
        get('v1/admin')
          .then(res => {
            //console.log(res)
            if(res)
              if (res.status === 200)

              this.setState({
                currentUser: user,
                showAdminBoard: true,
              })
              console.log(res)
          }, err => {
            console.log(err.response);

          })

      }
      else {
        get('v1/user')
          .then(res => {
            console.log(res);
            if(res)
            if (res.status === 200)
              this.setState({
                currentUser: user,

              })
            
          }, err => { 
            
          })
      }
    }
    this.setState({
      routeComponents: routes.map(({ path, component, user, admin }, key) =>
      (
        user ? <PrivateRoute exact path={path} component={component} key={key} /> :
        admin ? <AdminRoute path={path} component={component} key={key} /> :
         
            <Route exact path={path} component={component} key={key} />
      )
      ),
    });
    
  }
  // componentWillUpdate()
  // {
  //   const user =  AuthService.getCurrentUser();
  //   console.log(user);
  //   if(user!==this.state.currentUser)
  //   {
  //     this.setState({
  //       currentUser:user,
  //     })
  //   }
  // }

  


  render() {
    //console.log(this.state.routeComponents);
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

