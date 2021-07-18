import React, { Component } from "react";


import AuthService from "../../services/AuthService";



export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    //this.form.validateAll();

    //if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          console.log(response);
        
          this.setState({
            message: response.data.message,
            successful: true
          });
          
        },
        error => {
          //console.log(error.response);
          const resMessage = error.response.data.errors||error.response.data.message||
            error.message ||(error.response &&
              error.response.data ) ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    //}
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

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
            </div>*/}

                            <div className="col-lg-5">
                                <div className="block">
                                    <div className="block-header">
                                        <h6 className="text-uppercase mb-0">New account</h6>
                                    </div>
                                    <div className="block-body">
                                        <p className="lead">Not our registered customer yet?</p>
                                        <p className="text-muted">With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
                                        <p className="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>
                                        <hr />
                                        <form onSubmit={this.handleRegister} >
                                            <div className="mb-4">
                                                <label className="form-label" htmlFor="name">Name</label>
                                                <input className="form-control" id="name" type="text" name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}/>
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label" htmlFor="email">Email</label>
                                                <input className="form-control" id="email" type="text" name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}/>
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label" htmlFor="password">Password</label>
                                                <input className="form-control" id="password" type="password" name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}/>
                                            </div>
                                            <div className="mb-4 text-center">
                                                <button className="btn btn-outline-dark" type="submit"><i className="far fa-user me-2"></i>Register                                </button>
                                            </div>
                                            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
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
