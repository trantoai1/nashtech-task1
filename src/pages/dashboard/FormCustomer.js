import React, { Component } from 'react'
import { Fade } from 'reactstrap';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import CheckButton from "react-validation/build/button";
import TextArea from 'react-validation/build/textarea';
import validator from 'validator';
import { get, post, put } from '../../api/callAPI';
import { withRouter } from 'react-router-dom';
import Message from '../../util/Message';
import {required,username,password,email} from "../../util/constrain";
class FormCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:'success',
            isShow : false,
            message:'',
            id: 0,
            key: 0,
            username: '',
            password: '',
            repassword:'',
            address: '',
            firstName:"",
            lastName:"",
            email:"",
            role:[],
            readOnly:false,
        }
        this.roles=['ROLE_USER','ROLE_PM','ROLE_ADMIN'];
    }
    componentDidMount() {
         
        if (this.props.match.params.id) {
            get(`users/${this.props.match.params.id}`)
                .then(res => {
                    //console.log(res)
                    if (res !== undefined)
                        //console.log(res)
                        if (res.status === 200)
                            this.setState({
                                id:res.data.id,
                                username: res.data.username,
                                address:  res.data.address,
                                firstName: res.data.firstName,
                                lastName: res.data.lastName,
                                email: res.data.email,
                                role: res.data.role,
                            });
                });
            this.setState({
                id: this.props.match.params.id,
                readOnly:true,
            })
        }
    }
    idOnChange(e) {
        this.setState({
            id: this.state.id,
        })
    }
    addressOnChange(e) {
        this.setState({
            address: e.target.value,
        })
    }
    nameOnChange(e) {
        this.setState({
            username: e.target.value,
        })
    }
    firstOnChange(e) {
        this.setState({
            firstName: e.target.value,
        })
    }
    passOnChange(e) {
        this.setState({
            password: e.target.value,
        })
    }
    repassOnChange(e) {
        if(e.target.type==='checkbox')
        this.setState({
            readOnly:!e.target.checked
        })
        else
        this.setState({
            repassword: e.target.value,
        })
    }
    lastOnChange(e) {
        this.setState({
            lastName: e.target.value,
        })
    }
    emailOnChange(e) {
        this.setState({
            email: e.target.value,
        })
    }
    roleOnChange(e){
        let list = [];
        if (e.target.checked)
            list = [...this.state.role,e.target.value]
        else
            list = this.state.role.filter(item => item !== e.target.value);
        this.setState({
            role:list
        });
        console.log(this.state.role);
    }
    async doCreate(e) {
        e.preventDefault();
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            let params = {};
            params['username'] = this.state.username;
            params['email'] = this.state.email;
            const roleUpdate = this.state.role.reduce((list,role2)=>[...list,role2.substring(5)],[]);
            //console.log(roleUpdate);
            params['role'] = roleUpdate;
            params['firstName'] = this.state.firstName;
            params['password'] = this.state.password;
            params['lastName'] = this.state.lastName;
            params['address'] = this.state.address;
            console.log(params);
            if (this.props.match.params.id) {
                put(`users/${this.props.match.params.id}`, params)
                    .then(res => {
                        if (res &&res.status===202)
                            this.setState({
                                message: `Update user ${res.data.username} success!`,
                                type:'success'
                            });
                        console.log(res);
                    },
                    err=>{
                        err.response&&this.setState({
                            message:`${err.response.data.error} ${err.response.data.message}`,
                            type:'danger',
                        });
                    })
            }
            else {
                post(`users`, params)
                    .then(res => {
                        if (res &&res.status===201)
                            this.setState({
                                message: `Create user ${res.data.username} success!` ,
                                type:'success'
                            });
                        console.log(res);
                    },
                    err=>{
                        err.response&&this.setState({
                            message:`${err.response.data.error} ${err.response.data.message}`,
                            type:'danger',
                        });
                    })
            }
            await this.setState({
                isShow: !this.setState.isShow,
            })
        }
    }
    render() {
        return (
            <><Message isShow={this.state.isShow} type={this.state.type} message={this.state.message} key={this.state.message}/>
                <div className="block mb-5">
                    <div className="block-header"><strong className="text-uppercase">{this.props.match.params.id ? 'Edit' : 'New'} Customer</strong></div>
                    <div className="block-body">
                        <Form onSubmit={(e) => this.doCreate(e)}
                            ref={c => {
                                this.form = c;
                            }}
                        >
                            <div className="row">
                                {this.props.match.params.id && (<div className="col-sm-6">
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="userid">Id</label>
                                        <Input className="form-control"
                                            name="userid"
                                            id="userid"
                                            value={this.state.id}
                                            onChange={(e) => this.idOnChange(e)}
                                            type="text"
                                            validations={[required]}
                                            readOnly={true}
                                        />
                                    </div>
                                </div>)}
                                <div className="col-sm-6">
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="username">Username</label>
                                        <Input className="form-control"
                                            name="username"
                                            id="username"
                                            value={this.state.username}
                                            onChange={(e) => this.nameOnChange(e)}
                                            type="text"
                                            validations={[required,username]} />
                                    </div>
                                </div>
                            </div><div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <Input className="form-control"
                                            name="password"
                                            id="password"
                                            value={this.state.password}
                                            onChange={(e) => this.passOnChange(e)}
                                            type="password"
                                            validations={[required,password]}
                                            readOnly={this.state.readOnly}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="repassword">{this.props.match.params.id ?'Change Password':'Confirm Password'}</label>
                                        <Input className={this.props.match.params.id?"form-check-input":"form-control"}
                                            name="repassword"
                                            id="repassword"
                                            value={this.state.repassword}
                                            onChange={(e) => this.repassOnChange(e)}
                                            type={this.props.match.params.id ?"checkbox":"password"}
                                            validations={this.props.match.params.id ?[]:[required,password]} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="firstName">First Name</label>
                                        <Input className="form-control"
                                            name="firstName"
                                            id="firstName"
                                            value={this.state.firstName}
                                            onChange={(e) => this.firstOnChange(e)}
                                            type="text"
                                            validations={[required]}
                                            //readOnly={true}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="lastName">Last Name</label>
                                        <Input className="form-control"
                                            name="lastName"
                                            id="lastName"
                                            value={this.state.lastName}
                                            onChange={(e) => this.lastOnChange(e)}
                                            type="text"
                                            validations={[required]} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="email">EMAIL</label>
                                        <Input className="form-control"
                                            name="email"
                                            id="email"
                                            value={this.state.email}
                                            onChange={(e) => this.emailOnChange(e)}
                                            type="email"
                                            validations={[required,email]}
                                            //readOnly={true}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-4" value={this.state.role} onChange={(e) => this.roleOnChange(e)}>
                                        <label className="form-label" htmlFor="role">Role</label>
                                        <div className="row">
                                        {
                                            this.roles.map((rl,index)=>
                                                //if(this.state.role.includes(rl))
                                               
                                            (this.state.role.includes(rl)?<div key={index} className="col-sm-6"><input key={index} className="form-check-input"
                                            name="role"
                                            id="role"
                                            defaultChecked
                                            value={rl}
                                            type="checkbox"
                                             /> <label className="form-check-label" htmlFor='role'>{rl}</label></div>:<div key={index} className="col-sm-6"><input key={index} className="form-check-input"
                                             name="role"
                                             id="role"
                                             
                                             value={rl}
                                             type="checkbox"
                                              /><label className="form-check-label" htmlFor='role'>{rl}</label></div>)
                                            
                                            // return 
                                            // (<input className="form-check-input"
                                            // name="role"
                                            // id="role"      
                                            // value={rl}                                      
                                            // type="checkbox"
                                            // validations={[required]} />)
                                            )
                                          
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="address">Address</label>
                                        <TextArea className="form-control"
                                            name="address"
                                            value={this.state.address}
                                            onChange={(e) => this.addressOnChange(e)}
                                            id="address"
                                            type="text"
                                            validations={[required]} />
                                    </div>
                                </div>

                            </div>
                            <div className="text-center mt-4">
                                <Button className="btn btn-outline-dark" type="submit" ><i className="far fa-save me-2"></i>Save</Button>
                            </div>
                            <CheckButton style={{ display: "none" }}
                                ref={c => {
                                    this.checkBtn = c;
                                }}
                            />
                        </Form>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(FormCustomer);
