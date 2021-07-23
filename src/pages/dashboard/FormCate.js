import React, { Component } from 'react'

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import CheckButton from "react-validation/build/button";
import TextArea from 'react-validation/build/textarea';
import validator from 'validator';
import {get, post,put } from '../../api/callAPI';
import { withRouter } from 'react-router-dom';
import Message from '../../util/Message';
import {required,} from "../../util/constrain";

class FormCate extends Component {
    constructor(props){
        super (props);
        this.state={
            
            id:0,
            key:0,
            name:'',
            descript:'',
            type:'success',
            isShow : false,
            message:'',
        }
        
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        if(this.props.match.params.id)
        {
            get(`categories/${this.props.match.params.id}`)
            .then(res => {
                //console.log(res)
                if(res!==undefined)
                //console.log(res)
            if(res.status===200)
                this.setState({
                    name: res.data.cateName,
                    descript:res.data.description,
                });
            });
            this.setState({
                id:this.props.match.params.id,
            })
        }
    }
    idOnChange(e)
    {
        this.setState({
            id:this.state.id,
        })
    }
    descOnChange(e)
    {
        this.setState({
            descript : e.target.value,
        })
    }
    nameOnChange(e)
    {
        this.setState({
            name : e.target.value,
        })
    }
    async doCreate(e)
    {
        e.preventDefault();
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
        let params={};
        params['cateName']= this.state.name;
        params['description'] = this.state.descript;
        console.log(params);
        if(this.props.match.params.id)
        {
            put(`categories/${this.props.match.params.id}`,params)
            .then(res=>{
                if(res&&res.status===202)
                this.setState({
                    message:`Update category ${res.data.cateName} success!`,
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
        else
        {
            post(`categories`,params)
            .then(res=>{
                if(res&&res.status===201)
                this.setState({
                  message:`Create category ${res.data.cateName} success!`,
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
            isShow:!this.setState.isShow,
        })
        }
    }
    render() {
        return (
            <><Message isShow={this.state.isShow} type={this.state.type} message={this.state.message} key={this.state.message}/>
            <div className="block mb-5">
              <div className="block-header"><strong className="text-uppercase">{this.props.match.params.id?'Edit':'New'} Category</strong></div>
              <div className="block-body">
                <Form onSubmit={(e)=>this.doCreate(e)}
                ref={c => {
                    this.form = c;
                  }}
                >
                  <div className="row">
                      {this.props.match.params.id&&(<div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="cateid">Id</label>
                        <Input className="form-control" 
                                name="cateid" 
                                id="cateid" 
                                value={this.state.id} 
                                onChange={(e)=>this.idOnChange(e)} 
                                type="text" 
                                validations={[required]}
                                readOnly={true}
                                />
                      </div>
                    </div>)}
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="catename">Name</label>
                        <Input className="form-control" 
                                name="catename" 
                                id="catename" 
                                value={this.state.name} 
                                onChange={(e)=>this.nameOnChange(e)} 
                                type="text" 
                                validations={[required]}/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="catedesc">Description</label>
                        <TextArea   className="form-control" 
                                    name="catedesc" 
                                    value={this.state.descript} 
                                    onChange={(e)=>this.descOnChange(e)} 
                                    id="catedesc" 
                                    type="text" 
                                    validations={[required]}/>
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

export default withRouter(FormCate);
