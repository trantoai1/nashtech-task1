import React, { Component } from 'react'
import AuthService from "../../services/AuthService";
import Message from "../../util/Message";
import {required,isMatch,password} from "../../util/constrain";

import Form from 'react-validation/build/form';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Button from 'react-validation/build/button';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state={
      oldpass:'',
      newpass:'',
      newpass2:'',
      type: 'success',
      isShow: false,
      message: '',
      username:'',
      fullName:'',
      email:'',
    }
  }
  componentDidMount(){
    const user = AuthService.getCurrentUser();
    if(user)
    {
      this.setState({
        username:user.username,
        fullName:user.fullName,
        email:user.email,
      })
    }
  }
  onChangeOldPass(e) {
    this.setState({
      oldpass: e.target.value
    });
  }

  onChangeNewPass(e) {
    this.setState({
      newpass: e.target.value
    });
  }

  onChangeNewPass2(e) {
    this.setState({
      newpass2: e.target.value
    });
  }
  handleChangePass(e) {
    e.preventDefault();

    this.setState({
      message: "",
      isShow: false
    });
    
    this.form.validateAll();
    
    
    if (this.checkBtn.context._errors.length === 0) {
    AuthService.changePass(
      this.state.username,
      
      this.state.oldpass,
      this.state.newpass,
    ).then(
      response => {
        console.log(response);

        this.setState({
          message: response.message,
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
        <section className="hero">
          <div className="container">

            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Your profile        </li>
            </ol>

            <div className="hero-content pb-5 text-center">
              <h1 className="hero-heading">Your profile</h1>
              <div className="row">
                <div className="col-xl-8 offset-xl-2"><p className="lead text-muted">Maecenas sollicitudin. In rutrum. In convallis. Nunc tincidunt ante vitae massa. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Fusce dui leo, imperdiet in.</p></div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xl-9">
                <div className="block mb-5">
                  <div className="block-header"><strong className="text-uppercase">Change your password</strong></div>
                  <div className="block-body">
                    <Form onSubmit={(e)=>this.handleChangePass(e)} ref={c => {
              this.form = c;
            }}>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label className="form-label" htmlFor="password_old">Old password</label>
                            <Input className="form-control" id="password_old" type="password" name="password_old"
                    value={this.state.oldpass}
                    onChange={(e)=>this.onChangeOldPass(e)} validations={[required,password]} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label className="form-label" htmlFor="password_1">New password</label>
                            <Input className="form-control" id="password_1" type="password" name="password"
                    value={this.state.newpass}
                    onChange={(e)=>this.onChangeNewPass(e)} validations={[required,password,isMatch]} />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label className="form-label" htmlFor="password_2">Retype new password</label>
                            <Input className="form-control" id="password_2" type="password" name="confirm"
                    value={this.state.newpass2}
                    onChange={(e)=>this.onChangeNewPass2(e)} validations={[required,password,isMatch]} />
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-4">
                        <Button className="btn btn-outline-dark" type="submit"><i className="far fa-save me-2"></i>Change password</Button>
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

              <div className="col-xl-3 col-lg-4 mb-5">
                <div className="customer-sidebar card border-0">
                  <div className="customer-profile"><a className="d-inline-block" href="/"><img className="img-fluid rounded-circle customer-image shadow" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-589739-unsplash-avatar.jpg" alt="" /></a>
                    <h5>{this.state.fullName}</h5>
                    <p className="text-muted text-sm mb-0">{this.state.email}</p>
                  </div>
                  <nav className="list-group customer-nav"><a className="list-group-item d-flex justify-content-between align-items-center text-decoration-none" href="/orders"><span>
                    <svg className="svg-icon svg-icon-heavy me-2">

                    </svg>Orders</span>
                    </a><a className="active list-group-item d-flex justify-content-between align-items-center text-decoration-none" href="/profile"><span>
                      <svg className="svg-icon svg-icon-heavy me-2">

                      </svg>Profile</span></a>
                  </nav>
                </div>
              </div>

            </div>
          </div>
        </section>
      </>
    )
  }
}
