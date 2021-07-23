import React, { Component } from "react";


import AuthService from "../../services/AuthService";
import Message from "../../util/Message";

import {required,username,password,email} from "../../util/constrain";

import Form from 'react-validation/build/form';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Button from 'react-validation/build/button';

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
      type: 'success',
      isShow: false,
      message: '',
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
      isShow: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
    AuthService.register(
      this.state.username,
      this.state.email,
      this.state.password
    ).then(
      response => {
        console.log(response);

        this.setState({
          message: response.data.message,
          isShow: true,
          type: 'success',
          //isShow : false,
        });

      },
      error => {
        //console.log(error.response);
        const resMessage =  (error.response &&
          error.response.data &&
          error.response.data.error) ||
          error.message || (error.response &&
            error.response.data) ||
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
              <h6 className="text-uppercase mb-0">New account</h6>
            </div>
            <div className="block-body">
              <p className="lead">Not our registered customer yet?</p>
              <p className="text-muted">With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
              <p className="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>
              <hr />
              <Form onSubmit={this.handleRegister} ref={c => {
              this.form = c;
            }}>
                <div className="mb-4">
                  <label className="form-label" htmlFor="name">Username</label>
                  <Input className="form-control" id="name" type="text" name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername} validations={[required,username]}/>
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="email">Email</label>
                  <Input className="form-control" id="email" type="text" name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail} validations={[required,email]}/>
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="password">Password</label>
                  <Input className="form-control" id="password" type="password" name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword} validations={[required,password]} />
                </div>
                <div className="mb-4 text-center">
                  <Button className="btn btn-outline-dark" type="submit"><i className="far fa-user me-2"></i>Register                                </Button>
                </div>
                <Message isShow={this.state.isShow} type={this.state.type} message={this.state.message} key={this.state.message}/>
                <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}/>
              </Form>
            </div>
          </div>
        </div>


      </>
    );
  }
}
