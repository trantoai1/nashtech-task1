import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div className="modal fade quickview" id="exampleModal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <button className="close modal-close" type="button" data-bs-dismiss="modal" aria-label="Close">
                                <svg className="svg-icon w-100 h-100 svg-icon-light align-middle">

                                </svg>
                            </button>
                            <div className="modal-body">
                                <div className="ribbon ribbon-primary">Sale</div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="owl-carousel owl-theme owl-dots-modern detail-full" data-slider-id="1">
                                            <div className="detail-full-item-modal" style={{ background: "center center url('https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-596319-detail-1.jpg') no-repeat", backgroundsize: "cover" }}>  </div>
                                            <div className="detail-full-item-modal" style={{ background: "center center url('https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-596319-detail-2.jpg') no-repeat", backgroundsize: "cover" }}>  </div>
                                            <div className="detail-full-item-modal" style={{ background: "center center url('https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-596319-detail-3.jpg') no-repeat", backgroundsize: "cover" }}>  </div>
                                            <div className="detail-full-item-modal" style={{ background: "center center url('https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-594535-unsplash-detail-3.jpg') no-repeat", backgroundsize: "cover" }}>  </div>
                                            <div className="detail-full-item-modal" style={{ background: "center center url('https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-594535-unsplash-detail-4.jpg') no-repeat", backgroundsize: "cover" }}>  </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center">
                                        <div>
                                            <h2 className="mb-4 mt-4 mt-lg-1">Modern Jacket</h2>
                                            <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                                                <ul className="list-inline mb-2 mb-sm-0">
                                                    <li className="list-inline-item h4 fw-light mb-0">$65.00</li>
                                                    <li className="list-inline-item text-muted fw-light">
                                                        <del>$90.00</del>
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
                                                                <label className="btn-colour" htmlFor="colour_Blue" style={{ BackgroundColor: " #668cb9" }}> </label>
                                                                <input className="input-invisible" type="radio" name="colour" onChange={(e)=>this.handleChange(e)} value="value_Blue" id="colour_Blue" required />
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <label className="btn-colour" htmlFor="colour_White" style={{ BackgroundColor: " #fff" }}> </label>
                                                                <input className="input-invisible" type="radio" name="colour" onChange={(e)=>this.handleChange(e)} value="value_White" id="colour_White" required />
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <label className="btn-colour" htmlFor="colour_Violet" style={{ BackgroundColor: " #8b6ea4" }}> </label>
                                                                <input className="input-invisible" type="radio" name="colour" onChange={(e)=>this.handleChange(e)} value="value_Violet" id="colour_Violet" required />
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <label className="btn-colour" htmlFor="colour_Red" style={{ BackgroundColor: " #dd6265" }}> </label>
                                                                <input className="input-invisible" type="radio" name="colour" onChange={(e)=>this.handleChange(e)} value="value_Red" id="colour_Red" required />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 col-lg-6 detail-option mb-5">
                                                        <label className="detail-option-heading fw-bold">Items <span>(required)</span></label>
                                                        <input className="form-control detail-quantity" name="items" type="number" onChange={(e)=>this.handleChange(e)} value="1" />
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
                        </div>
                    </div>
                </div>
        )
    }
}
