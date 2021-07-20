import React, { Component } from 'react'
import { Fade } from 'reactstrap';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import CheckButton from "react-validation/build/button";
import TextArea from 'react-validation/build/textarea';
import Select from 'react-validation/build/select';
import validator from 'validator';
import { get, post, put } from '../../api/callAPI';
import { withRouter } from 'react-router-dom';
import CategoryList from '../../components/categories/CategoryList';
import FeatureTypeList from '../../components/featureTypes/FeatureTypeList';
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
class FormProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreate: false,
            message: <></>,
            key: 0,
            id:0,
            name: '',
            descript: '',
            price: 0,
            remain: 0,
            cate:0,
            features:{},
            currentfeatures:[],
            feaTypes:[],
        }

    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        if (this.props.match.params.id) {
            get(`products/${this.props.match.params.id}`)
                .then(res => {
                    //console.log(res)
                    if (res !== undefined)
                        //console.log(res)
                        if (res.status === 200)
                            this.setState({
                                name: res.data.productName,
                                descript: res.data.productDesc,
                                price:res.data.price,
                                remain:res.data.remain,
                                cate: res.data.categoryId,
                                currentfeatures: res.data.featureIds,
                                feaTypes: res.data.feaTypes,
                            });
                    let f = {};
                    this.state.currentfeatures.map((value,index)=>{
                        f[this.state.feaTypes[index]]=value
                    })
                    this.setState({
                        features:f
                    })
                    //console.log('features',this.state.features);
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
    descOnChange(e) {
        this.setState({
            descript: e.target.value,
        })
    }
    nameOnChange(e) {
        this.setState({
            name: e.target.value,
        })
    }
    priceOnChange(e)
    {
        this.setState({
            price:e.target.value,
        })
    }
    remainOnChange(e) {
        this.setState({
            remain: e.target.value,
        })
    }
    cateOnChange(e) {
        this.setState({
            cate: e.target.value,
        })
        //console.log(this.state.cate);
    }
    async handleFilterbyFeature(e)
    {
        // let list = [];
        //  if (e.target.checked)
        //      list = [...this.state.featureIds,id]
        //  else
        //     list = this.state.featureIds.filter(item => item !== id);
        await this.setState({
            features:{...this.state.features,
                [e.target.name]:Number(e.target.value),
            }
        });
        //console.log('featureschane',this.state.features);
    }
    async doCreate(e) {
        e.preventDefault();
        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            let params = {};
            
            params['productName'] = this.state.name;
            params['productDesc'] = this.state.descript;
            params['price'] = this.state.price;
            params['remain'] = this.state.remain;
            params['categoryId'] = Number(this.state.cate);
            params['featureIds'] = Object.values(this.state.features)
            console.log(params);
            if (this.props.match.params.id) {
                put(`products/${this.props.match.params.id}`, params)
                    .then(res => {
                        if (res !== undefined)
                            this.setState({
                                message: res.data.productName,

                            });
                        console.log(res);
                    })
            }
            else {
                post(`products`, params)
                    .then(res => {
                        if (res !== undefined)
                            this.setState({
                                message: res.data.productName,

                            });
                        console.log(res);
                    })
            }
            await this.setState({
                isCreate: !this.setState.isCreate,
            })
        }
    }
    render() {
        return (
            <>{this.state.isCreate && <Fade in={true}  >
                <div className="alert alert-success">{this.state.message}</div></Fade>}
                <div className="block mb-5">
                    <div className="block-header"><strong className="text-uppercase">{this.props.match.params.id ? 'Edit' : 'New'} Product</strong></div>
                    <div className="block-body">
                        <Form onSubmit={(e) => this.doCreate(e)}
                            ref={c => {
                                this.form = c;
                            }}
                        >
                            <div className="row">
                                {this.props.match.params.id && (<div className="col-sm-6">
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="productId">Id</label>
                                        <Input className="form-control"
                                            name="productId"
                                            id="productId"
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
                                        <label className="form-label" htmlFor="productname">Name</label>
                                        <Input className="form-control"
                                            name="productname"
                                            id="productname"
                                            value={this.state.name}
                                            onChange={(e) => this.nameOnChange(e)}
                                            type="text"
                                            validations={[required]} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="productdesc">Description</label>
                                        <TextArea className="form-control"
                                            name="productdesc"
                                            value={this.state.descript}
                                            onChange={(e) => this.descOnChange(e)}
                                            id="productdesc"
                                            type="text"
                                            validations={[required]} />
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="price">Price</label>
                                        <Input className="form-control"
                                            name="price"
                                            id="price"
                                            value={this.state.price}
                                            
                                            onChange={(e) => this.priceOnChange(e)}
                                            type="number"
                                            validations={[required]}
                                            //readOnly={true}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="remain">Remain</label>
                                        <Input className="form-control"
                                            name="remain"
                                            id="remain"
                                            value={this.state.remain}
                                            onChange={(e) => this.remainOnChange(e)}
                                            type="number"
                                            validations={[required]} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="remain">Category</label>
                                        <select className='form-select'  
                                        name='category' 
                                        value={String(this.state.cate)}

                                        //type='number'
                                        //defaultValue={this.state.cate}
                                        onChange={(e) => this.cateOnChange(e)}
                                         validations={[required]}>
    <option value='' >Choose category</option>
    <CategoryList select={true} />
    
</select>
                                    </div>
                                </div>
                            </div>
                            <div className="block-header"><strong className="text-uppercase">Feature</strong></div>
                            
                                {/*<div class="mb-4 col-md-6 d-flex align-items-center">
                                    <input type="radio" name="shippping" id="option0" />
                                    <label class="ms-3" for="option0"><strong class="d-block text-uppercase mb-2">Usps next day</strong><span class="text-muted text-sm">Get it right on next day - fastest option possible.</span></label>
                                </div>*/}
                                <FeatureTypeList isRadio={true} checkedFeature={(e)=>this.handleFilterbyFeature(e)} currentfeatures={this.state.currentfeatures}/>
                            
                            
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

export default withRouter(FormProduct);
