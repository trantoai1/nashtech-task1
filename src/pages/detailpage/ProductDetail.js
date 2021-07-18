import React, { Component } from 'react'
import callAPI from '../../api/callAPI';

import { withRouter } from 'react-router-dom';

import ProductView from './components/ProductView';

import {get} from '../../api/callAPI';


class ProductDetail extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            product: {},
            features:[],
            table1:<></>,
            table2:<></>,
            comment: <></>,
            rates: [],
            rateComponent: <></>,
            rate : 0,
        }
        this.star = [1,2,3,4,5];
    }
    
    componentDidMount() {
        
        callAPI('products/' + this.props.match.params.id)
            .then(res => {
                if (res !== undefined)
                   
                    if (res.status === 200)
                        this.setState({
                            product: res.data
                        });
                        //console.log(this.state.product);
            });
        get('features',{"productId":this.props.match.params.id})
        .then(res => {
            //console.log(res)
            if(res!==undefined)
            
           if(res.status===200)
            this.setState({
                features: res.data
            });
            
        });
        get('rates',{"productId":this.props.match.params.id})
        .then(res => {
            //console.log(res)
            if(res!==undefined)
            
           if(res.status===200)
            this.setState({
                rates: res.data,
                rate: res.data.length===0?0:res.data.length===1?res.data[0].point:Math.ceil(res.data.reduce((a,b)=> a.point+b.point)/res.data.length),
            });
            //console.log(this.state.rate);
        });
    }
    async handleFeatureClick(e){
        
        await this.setState({
            table1:this.state.features.map((feature,index)=>{

                if(index>=0&&index<Math.ceil(this.state.features.length/2))
                return(<tr key={index}>
                    <th className="text-uppercase fw-normal border-0">{feature.typeName}</th>
                    <td className="text-muted border-0">{feature.specific} {feature.typeUnit}</td>
                </tr>);
                return '';
                }),
            table2:this.state.features.map((feature,index)=>{

                if(index>=Math.ceil(this.state.features.length/2 )&&index<this.state.features.length)
                return(<tr key={index}>
                    <th className="text-uppercase fw-normal border-0">{feature.typeName}</th>
                    <td className="text-muted border-0">{feature.specific} {feature.typeUnit}</td>
                </tr>);
                return '';
                }),
        })
    }
    async handleRateClick(e){
        await this.setState({
            rateComponent: this.state.rates.length ===0?<></>:
            this.state.rates.map((rate,index)=>(<div key={index} className="review d-flex">
            <div className="flex-shrink-0 text-center me-4 me-xl-5"><img className="review-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/person-1.jpg" alt="Han Solo" /><span className="text-uppercase text-muted"></span></div>
            <div>
                <h5 className="mt-2 mb-1">{rate.userName}</h5>
                <div className="mb-2">
                    {this.star.map((num,index)=>{
                        if(num<=rate.point)
                        return <i key={index} className="fa fa-xs fa-star text-warning"/>
                        else return <i key={index} className="fa fa-xs fa-star text-gray-200"/>
                    })}
                    
                </div>
                <p className="text-muted">{rate.comment} </p>
            </div>
        </div>))
        })
    }
    render() {
        return (
            <>
                <section className="product-details">
                    <div className="container-fluid">         
                        <ProductView product={this.state.product} ratePoint={this.state.rate} key={this.state.rate} totalReview={this.state.rates.length}/>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="container">
                        <ul className="nav nav-tabs flex-column flex-sm-row" role="tablist">
                            <li className="nav-item"><a className="nav-link detail-nav-link active" data-bs-toggle="tab" href="#description" role="tab">Description</a></li>
                            <li className="nav-item"><a className="nav-link detail-nav-link" data-bs-toggle="tab" href="#additional-information" role="tab" onClick={(e)=>this.handleFeatureClick(e)}>Additional Information</a></li>
                            <li className="nav-item"><a className="nav-link detail-nav-link" data-bs-toggle="tab" href="#reviews" role="tab" onClick={(e)=>this.handleRateClick(e)}>Reviews</a></li>
                        </ul>
                        <div className="tab-content py-4">
                            <div className="tab-pane active px-3" id="description" role="tabpanel">
                                <p className="text-muted">{this.state.product.productDesc}</p>
                                
                            </div>
                            <div className="tab-pane" id="additional-information" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-6">
                                    <table className="table text-sm">
                                    <tbody>
                                        
                                            {this.state.table1}</tbody>
                                        
                                        </table>
                                    </div>
                                    <div className="col-lg-6">
                                    <table className="table text-sm">
                                        <tbody>
                                        {this.state.table2}</tbody></table>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="reviews" role="tabpanel">
                                <div className="row mb-5">
                                    <div className="col-lg-10 col-xl-9">
                                        {this.state.rateComponent}
                                        <div className="py-5 px-3">
                                            <h5 className="text-uppercase mb-4">Leave a review</h5>
                                            <form className="form" id="contact-form" method="post" action="https://demo.bootstrapious.com/sell/2-0/contact.php">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-4">
                                                            <label className="form-label" htmlFor="name">Your name *</label>
                                                            <input className="form-control" type="text" name="name" id="name" placeholder="Enter your name" required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-4">
                                                            <label className="form-label" htmlFor="rating">Your rating *</label>
                                                            <select className="custom-select focus-shadow-0" name="rating" id="rating">
                                                                <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                                                                <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                                                                <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                                                                <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                                                                <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label" htmlFor="email">Your email *</label>
                                                    <input className="form-control" type="email" name="email" id="email" placeholder="Enter your  email" required="required" />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label" htmlFor="review">Review text *</label>
                                                    <textarea className="form-control" rows="4" name="review" id="review" placeholder="Enter your review" required="required"></textarea>
                                                </div>
                                                <button className="btn btn-outline-dark" type="submit">Post review</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<section className="my-5">
                    <div className="container">
                        <header className="text-center">
                            <h6 className="text-uppercase mb-5">You might also like</h6>
                        </header>
                        <div className="row">

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="ribbon ribbon-info">Fresh</div><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/serrah-galos-494312-unsplash.jpg" alt="product" />
                                        <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="detail.html"></a>
                                            <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <p className="text-muted text-sm mb-1">Jackets</p>
                                        <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="detail.html">White Tee</a></h3><span className="text-muted">$40.00</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="product">
                                    <div className="product-image"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/kyle-loftus-590881-unsplash.jpg" alt="product" />
                                        <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="detail.html"></a>
                                            <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <p className="text-muted text-sm mb-1">Denim</p>
                                        <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="detail.html">Black blouse</a></h3><span className="text-muted">$40.00</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="ribbon ribbon-primary">Sale</div><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/kyle-loftus-596319-unsplash.jpg" alt="product" />
                                        <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="detail.html"></a>
                                            <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <p className="text-muted text-sm mb-1">Accessories</p>
                                        <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="detail.html">College jacket</a></h3><span className="text-muted">$40.00</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="product">
                                    <div className="product-image"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/ethan-haddox-484912-unsplash.jpg" alt="product" />
                                        <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="detail.html"></a>
                                            <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <p className="text-muted text-sm mb-1">Denim</p>
                                        <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="detail.html">Carrot-fit jeans</a></h3><span className="text-muted">$40.00</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="product">
                                    <div className="product-image"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/serrah-galos-494231-unsplash.jpg" alt="product" />
                                        <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="detail.html"></a>
                                            <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <p className="text-muted text-sm mb-1">Jackets</p>
                                        <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="detail.html">Striped T-Shirt</a></h3><span className="text-muted">$40.00</span>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="product">
                                    <div className="product-image"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/averie-woodard-319832-unsplash.jpg" alt="product" />
                                        <div className="product-hover-overlay"><a className="product-hover-overlay-link" href="detail.html"></a>
                                            <div className="product-hover-overlay-buttons"><a className="btn btn-dark btn-buy" href="detail.html"><i className="fa-search fa"></i><span className="btn-buy-label ms-2">View</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <p className="text-muted text-sm mb-1">Shirts</p>
                                        <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="detail.html">Short top</a></h3><span className="text-muted">$40.00</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    
        </section>*/}
            </>
        )
    }
}
export default withRouter(ProductDetail);