import React, { Component } from 'react'
import { Fade } from 'reactstrap';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import CheckButton from "react-validation/build/button";
import TextArea from 'react-validation/build/textarea';
import validator from 'validator';
import {get, post,put } from '../../api/callAPI';
import { withRouter } from 'react-router-dom';
const required = (value) => {
    if (!value.toString().trim().length) {
      // We can return string or jsx as the 'error' prop for the validated Component
      return 'require';
    }
  };
  const email = (value) => {
    if (!validator.isEmail(value)) {
      return `${value} is not a valid email.`
    }
  };
   
  const lt = (value, props) => {
    // get the maxLength from component's props
    if (!value.toString().trim().length > props.maxLength) {
      // Return jsx
      return <span className="error">The value exceeded {props.maxLength} symbols.</span>
    }
  };
class FormCate extends Component {
    constructor(props){
        super (props);
        this.state={
            isCreate : false,
            message:<></>,
            id:0,
            key:0,
            name:'',
            descript:'',
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
                if(res!==undefined)
                this.setState({
                    message:res.data.cateName,
                    
                });
                console.log(res);
            })
        }
        else
        {
            post(`categories`,params)
            .then(res=>{
                if(res!==undefined)
                this.setState({
                    message:res.data.cateName,
                    
                });
                console.log(res);
            })
        }
        await this.setState({
            isCreate:!this.setState.isCreate,
        })
        }
    }
    render() {
        return (
            <>{this.state.isCreate&&<Fade in={true}  >
            <div className="alert alert-success">{this.state.message}</div></Fade>}
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
