import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import {get} from '../../api/callAPI';
import  Image from '../../assets/img/default.png';
class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            images : [],
        }
    }
    componentDidMount()
    {
        if(!this.props.isTable)
        get('images',{"productId":this.props.id})
        .then(res => {
            if (res !== undefined)
               
                if (res.status === 200)
                {
                    this.setState({
                        images: res.data 
                    });
                }
                    //console.log(this.state.images);
        });
    }
    render() {
        if(this.props.isTable)
        return (
            
                                    <tr>
                                        <th className="py-4 align-middle"># {this.props.id}</th>
                                        <td className="py-4 align-middle">{this.props.name}</td>
                                        <td className="py-4 align-middle">{this.props.categoryName}</td>
                                        <td className="py-4 align-middle">{this.props.remain}</td>
                                        <td className="py-4 align-middle"><NumberFormat value={this.props.price} displayType={'text'} thousandSeparator={true} prefix='$'/></td>
                                        <td className="py-4 align-middle">
                                            <a className="btn btn-outline-dark btn-sm" href={`products/${this.props.id}`}>Edit</a>
                                            <a className="btn btn-outline-dark btn-sm" onClick={(e)=>this.props.deleteProduct(this.props.id)}>Delete</a>
                                            </td>
                                    </tr>
                                    
                                
        )
        else
        return (

            <div className="col-xl-4 col-6">
                <div className="product">
                    <div className="product-image">
                        {this.props.remain===0?<div className="ribbon ribbon-danger">Sold out</div>:''}{this.state.images.length>0?<img  src={this.state.images[0].url} className="img-fluid" alt="product" />:<img  src={Image} width="261px" height="391px" alt="product" />}
                        <div className="product-hover-overlay"><Link className="product-hover-overlay-link" to={'/products/'+this.props.id}></Link>
                            <div className="product-hover-overlay-buttons">
                                <a className="btn btn-outline-dark btn-product-left d-none d-sm-inline-block" href="/">
                                    <i className="fa fa-shopping-cart"></i></a>
                                    <Link className="btn btn-dark btn-buy" to={'/products/'+this.props.id}>
                                        <i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></Link>
                                        <a className="btn btn-outline-dark btn-product-right d-none d-sm-inline-block"  onClick={(e)=>this.props.openModel(this.props.id)} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-expand-arrows-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <p className="text-muted text-sm mb-1">{this.props.categoryName}</p>
                        <p className="text-muted text-sm mb-1">Remain: {this.props.remain}</p>
                        <h3 className="h6 text-uppercase mb-1"><Link className="text-dark" to={'/products/'+this.props.id}>{this.props.name}</Link></h3><span className="text-muted">
                            <NumberFormat value={this.props.price} displayType={'text'} thousandSeparator={true} prefix='$'/></span>
                    </div>
                </div>
            </div>


        );
    }
}
export default Product;