import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import Message from "../../util/Message";
import {required,username,password} from "../../util/constrain";

import Form from 'react-validation/build/form';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Button from 'react-validation/build/button';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      isShow: false,
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
      isShow: false
    });


    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {

    AuthService.login(this.state.username, this.state.password).then(
      res => {
        if(res)
        if(res.roles.includes("ROLE_ADMIN"))
        window.location.href = '/dashboard/categories';
        else
        window.location.href = '/profile';
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.error) ||
          error.message ||
          error.toString();

        this.setState({
          isShow: true,
          type: 'danger',
          message: resMessage
        });
      }
    );
    }
  }

  render() {
    return (
      <>
        
        <div className="col-lg-5">
          <div className="block">
            <div className="block-header">
              <h6 className="text-uppercase mb-0">Login</h6>
            </div>
            <div className="block-body">
              <p className="lead">Already our customer?</p>
              <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <hr />
              <Form onSubmit={this.handleLogin} 
              ref={c => {
              this.form = c;
            }}>
                <div className="mb-4">
                  <label className="form-label" htmlFor="email1">Email</label>
                  <Input  className="form-control" id="email1" type="text" name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}  validations={[required,username]}/>
                </div>
                
                <div className="mb-4">
                  <label className="form-label" htmlFor="password1">Password</label>
                  <Input className="form-control" id="password1" type="password" name="password"
                value={this.state.password}
                
                onChange={this.onChangePassword}
                validations={[required,password]}/>
                </div>
                <div className="mb-4 text-center">
                  <Button className="btn btn-outline-dark" type="submit"><i className="fa fa-sign-in-alt me-2"></i> Log in</Button>
                </div>
                {this.state.isShow &&  <Message isShow={this.state.isShow} type={this.state.type} message={this.state.message} key={this.state.message}/>}
                <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
              </Form>
            </div>
          </div>
        </div>



      </>
    );
  }
}
