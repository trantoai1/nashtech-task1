import React, { Component } from 'react'
import NumberFormat from 'react-number-format';
export default class RecommendItem extends Component {
    render() {
        return (
            <div className="col-lg-2 col-md-4 col-6" >
                                <div className="product">
                                    <div className="product-image"><img className="img-fluid" src={this.props.recommender.image} alt="product" />
                                        <div className="product-hover-overlay"><a className="product-hover-overlay-link" href={'/products/'+this.props.recommender.id}></a>
                                            <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href={'/products/'+this.props.recommender.id}><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <p className="text-muted text-sm mb-1">{this.props.recommender.catename}</p>
                                        <p className="text-muted text-sm mb-1">Remain: {this.props.recommender.remain}</p>
                                        <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href={'/products/'+this.props.recommender.id}>{this.props.recommender.name}</a></h3><span className="text-muted">
                                            
                                        <NumberFormat value={this.props.recommender.price} displayType={'text'} thousandSeparator={true} prefix='$'/></span>
                                    </div>
                                </div>
                            </div>
        )
    }
}
