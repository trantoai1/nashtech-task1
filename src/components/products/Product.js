import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
        return (

            <div className="col-xl-4 col-6">
                <div className="product">
                    <div className="product-image">
                        <div className="ribbon ribbon-danger">Sold out</div><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/serrah-galos-494279-unsplash.jpg" alt="product" />
                        <div className="product-hover-overlay"><Link className="product-hover-overlay-link" to={'/products/'+this.props.id}></Link>
                            <div className="product-hover-overlay-buttons"><a className="btn btn-outline-dark btn-product-left d-none d-sm-inline-block" href="/"><i className="fa fa-shopping-cart"></i></a><Link className="btn btn-dark btn-buy" to={'/products/'+this.props.id}><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></Link><a className="btn btn-outline-dark btn-product-right d-none d-sm-inline-block" href="/" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-expand-arrows-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <p className="text-muted text-sm mb-1">Sweaters {this.props.remain}</p>
                        <h3 className="h6 text-uppercase mb-1"><Link className="text-dark" to={'/products/'+this.props.id}>{this.props.name}</Link></h3><span className="text-muted"><NumberFormat value={this.props.price} displayType={'text'} thousandSeparator={true} /></span>
                    </div>
                </div>
            </div>


        );
    }
}
export default Product;