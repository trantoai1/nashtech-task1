import React, { Component } from "react";
import AuthService from "../../services/AuthService";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });




    AuthService.login(this.state.username, this.state.password).then(
      () => {
        
        window.location.href = '/profile';
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );

  }

  render() {
    return (
      <>
        {/*<div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <form
            onSubmit={this.handleLogin}
            
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
           
          </form>
        </div>
            </div>*/}
        <div className="col-lg-5">
          <div className="block">
            <div className="block-header">
              <h6 className="text-uppercase mb-0">Login</h6>
            </div>
            <div className="block-body">
              <p className="lead">Already our customer?</p>
              <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <hr />
              <form onSubmit={this.handleLogin}>
                <div className="mb-4">
                  <label className="form-label" htmlFor="email1">Email</label>
                  <input className="form-control" id="email1" type="text" name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}/>
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="password1">Password</label>
                  <input className="form-control" id="password1" type="password" name="password"
                value={this.state.password}
                onChange={this.onChangePassword}/>
                </div>
                <div className="mb-4 text-center">
                  <button className="btn btn-outline-dark" type="submit"><i className="fa fa-sign-in-alt me-2"></i> Log in</button>
                </div>
                {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
              </form>
            </div>
          </div>
        </div>



      </>
    );
  }
}
