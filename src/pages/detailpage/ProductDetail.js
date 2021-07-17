import React, { Component } from 'react'
import callAPI from '../../api/callAPI';
import NumberFormat from 'react-number-format';
import { withRouter } from 'react-router-dom';
import ImageList from '../../components/images/ImageList';



class ProductDetail extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            product: {},
            images:<div></div>
        }
        
    }
    
    componentDidMount() {
        
        callAPI('products/' + this.props.match.params.id)
            .then(res => {
                if (res !== undefined)
                   
                    if (res.status === 200)
                        this.setState({
                            product: res.data
                        });
            });
    }
    
    render() {
        return (
            <>
                <section className="product-details">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 py-3 order-2 order-lg-1">
                            <div className="col-lg-6 col-xl-7 pt-4 order-2 order-lg-1">
                                    <ImageList id= {this.props.match.params.id}></ImageList>

                                </div>
                            </div>
                            <div className="d-flex align-items-center col-lg-6 col-xl-5 ps-lg-5 mb-5 order-1 order-lg-2">
                                <div>
                                    <ul className="breadcrumb justify-content-start">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item"><a href="category.html">Tops and Jackets</a></li>
                                        <li className="breadcrumb-item active">Modern Jacket</li>
                                    </ul>
                                    <h1 className="mb-4">{this.state.product.productName}</h1>
                                    <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                                        <ul className="list-inline mb-2 mb-sm-0">
                                            <li className="list-inline-item h4 fw-light mb-0">$65.00</li>
                                            <li className="list-inline-item text-muted fw-light">
                                                <del><NumberFormat value={this.state.product.price} displayType={'text'} thousandSeparator={true} /></del>
                                            </li>
                                        </ul>
                                        <div className="d-flex align-items-center">
                                            <ul className="list-inline me-2 mb-0">
                                                <li className="list-inline-item me-0"><i className="fa fa-star text-primary"></i></li>
                                                <li className="list-inline-item me-0"><i className="fa fa-star text-primary"></i></li>
                                                <li className="list-inline-item me-0"><i className="fa fa-star text-primary"></i></li>
                                                <li className="list-inline-item me-0"><i className="fa fa-star text-primary"></i></li>
                                                <li className="list-inline-item me-0"><i className="fa fa-star text-gray-300"></i></li>
                                            </ul><span className="text-muted text-uppercase text-sm">25 reviews</span>
                                        </div>
                                    </div>
                                    <p className="mb-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-sm-6 col-lg-12 detail-option mb-3">
                                                <h6 className="detail-option-heading">Size <span>(required)</span></h6>
                                                <label className="btn btn-sm btn-outline-secondary detail-option-btn-label" htmlFor="size_0"> Small
                                                    <input className="input-invisible" type="radio" name="size" onChange={(e)=>this.handleChange(e)} value="value_0" id="size_0" required />
                                                </label>
                                                <label className="btn btn-sm btn-outline-secondary detail-option-btn-label" htmlFor="size_1"> Medium
                                                    <input className="input-invisible" type="radio" name="size" onChange={(e)=>this.handleChange(e)} value="value_1" id="size_1" required />
                                                </label>
                                                <label className="btn btn-sm btn-outline-secondary detail-option-btn-label" htmlFor="size_2"> Large
                                                    <input className="input-invisible" type="radio" name="size" onChange={(e)=>this.handleChange(e)} value="value_2" id="size_2" required />
                                                </label>
                                            </div>
                                            <div className="col-sm-6 col-lg-12 detail-option mb-3">
                                                <h6 className="detail-option-heading">Type <span>(required)</span></h6>
                                                <label className="btn btn-sm btn-outline-secondary detail-option-btn-label" htmlFor="material_0"> Hoodie
                                                    <input className="input-invisible" type="radio" name="material" onChange={(e)=>this.handleChange(e)} value="value_0" id="material_0" required />
                                                </label>
                                                <label className="btn btn-sm btn-outline-secondary detail-option-btn-label" htmlFor="material_1"> College
                                                    <input className="input-invisible" type="radio" name="material" onChange={(e)=>this.handleChange(e)} value="value_1" id="material_1" required />
                                                </label>
                                            </div>
                                            <div className="col-12 detail-option mb-3">
                                                <h6 className="detail-option-heading">Colour <span>(required)</span></h6>
                                                <ul className="list-inline mb-0 colours-wrapper">
                                                    <li className="list-inline-item">
                                                        <label className="btn-colour" htmlFor="colour_Blue" style={{backgroundcolor: "#668cb9"}}> </label>
                                                        <input className="input-invisible" type="radio" name="colour" onChange={(e)=>this.handleChange(e)} value="value_Blue" id="colour_Blue" required />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <label className="btn-colour" htmlFor="colour_White" style={{backgroundcolor: "#fff"}}> </label>
                                                        <input className="input-invisible" type="radio" name="colour" onChange={(e)=>this.handleChange(e)} value="value_White" id="colour_White" required />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <label className="btn-colour" htmlFor="colour_Violet" style={{backgroundcolor: "#8b6ea4"}}> </label>
                                                        <input className="input-invisible" type="radio" name="colour" onChange={(e)=>this.handleChange(e)} value="value_Violet" id="colour_Violet" required />
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <label className="btn-colour" htmlFor="colour_Red" style={{backgroundcolor: "#dd6265"}}> </label>
                                                        <input className="input-invisible" type="radio" name="colour" onChange={(e)=>this.handleChange(e)} value="value_Red" id="colour_Red" required />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-12 col-lg-6 detail-option mb-5">
                                                <label className="detail-option-heading fw-bold">Items <span>(required)</span></label>
                                                <input className="form-control detail-quantity" name="items" type="number" onChange={(e)=>this.handleChange(e)}  value="1" />
                                            </div>
                                        </div>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <button className="btn btn-dark btn-lg mb-1" type="submit"> <i className="fa fa-shopping-cart me-2"></i>Add to Cart</button>
                                            </li>
                                            <li className="list-inline-item"><a className="btn btn-outline-secondary mb-1" href="#"> <i className="far fa-heart me-2"></i>Add to wishlist</a></li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="container">
                        <ul className="nav nav-tabs flex-column flex-sm-row" role="tablist">
                            <li className="nav-item"><a className="nav-link detail-nav-link active" data-bs-toggle="tab" href="#description" role="tab">Description</a></li>
                            <li className="nav-item"><a className="nav-link detail-nav-link" data-bs-toggle="tab" href="#additional-information" role="tab">Additional Information</a></li>
                            <li className="nav-item"><a className="nav-link detail-nav-link" data-bs-toggle="tab" href="#reviews" role="tab">Reviews</a></li>
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
                                                <tr>
                                                    <th className="text-uppercase fw-normal border-0">Product #</th>
                                                    <td className="text-muted border-0">Lorem ipsum dolor sit amet</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-uppercase fw-normal ">Available packaging</th>
                                                    <td className="text-muted ">LOLDuis aute irure dolor in reprehenderit</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-uppercase fw-normal ">Weight</th>
                                                    <td className="text-muted ">dolor sit amet</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-uppercase fw-normal ">Sunt in culpa qui</th>
                                                    <td className="text-muted ">Lorem ipsum dolor sit amet</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-lg-6">
                                        <table className="table text-sm">
                                            <tbody>
                                                <tr>
                                                    <th className="text-uppercase fw-normal border-0">Weight</th>
                                                    <td className="text-muted border-0">dolor sit amet                                </td>
                                                </tr>
                                                <tr>
                                                    <th className="text-uppercase fw-normal ">Sunt in culpa qui</th>
                                                    <td className="text-muted ">Lorem ipsum dolor sit amet                                </td>
                                                </tr>
                                                <tr>
                                                    <th className="text-uppercase fw-normal ">Product #</th>
                                                    <td className="text-muted ">Lorem ipsum dolor sit amet                                </td>
                                                </tr>
                                                <tr>
                                                    <th className="text-uppercase fw-normal ">Available packaging</th>
                                                    <td className="text-muted ">LOLDuis aute irure dolor in reprehenderit                                </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="reviews" role="tabpanel">
                                <div className="row mb-5">
                                    <div className="col-lg-10 col-xl-9">
                                        <div className="review d-flex">
                                            <div className="flex-shrink-0 text-center me-4 me-xl-5"><img className="review-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/person-1.jpg" alt="Han Solo" /><span className="text-uppercase text-muted">Dec 2018</span></div>
                                            <div>
                                                <h5 className="mt-2 mb-1">Han Solo</h5>
                                                <div className="mb-2"><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-warning"></i>
                                                </div>
                                                <p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections     </p>
                                            </div>
                                        </div>
                                        <div className="review d-flex">
                                            <div className="flex-shrink-0 text-center me-4 me-xl-5"><img className="review-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/person-2.jpg" alt="Luke Skywalker" /><span className="text-uppercase text-muted">Dec 2018</span></div>
                                            <div>
                                                <h5 className="mt-2 mb-1">Luke Skywalker</h5>
                                                <div className="mb-2"><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-gray-200"></i>
                                                </div>
                                                <p className="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream.     </p>
                                            </div>
                                        </div>
                                        <div className="review d-flex">
                                            <div className="flex-shrink-0 text-center me-4 me-xl-5"><img className="review-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/person-3.jpg" alt="Princess Leia" /><span className="text-uppercase text-muted">Dec 2018</span></div>
                                            <div>
                                                <h5 className="mt-2 mb-1">Princess Leia</h5>
                                                <div className="mb-2"><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-gray-200"></i><i className="fa fa-xs fa-star text-gray-200"></i>
                                                </div>
                                                <p className="text-muted">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.     </p>
                                            </div>
                                        </div>
                                        <div className="review d-flex">
                                            <div className="flex-shrink-0 text-center me-4 me-xl-5"><img className="review-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/person-4.jpg" alt="Jabba Hut" /><span className="text-uppercase text-muted">Dec 2018</span></div>
                                            <div>
                                                <h5 className="mt-2 mb-1">Jabba Hut</h5>
                                                <div className="mb-2"><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-warning"></i><i className="fa fa-xs fa-star text-warning"></i>
                                                </div>
                                                <p className="text-muted">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.     </p>
                                            </div>
                                        </div>
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
                <section className="my-5">
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
                    
                </section>
            </>
        )
    }
}
export default withRouter(ProductDetail);