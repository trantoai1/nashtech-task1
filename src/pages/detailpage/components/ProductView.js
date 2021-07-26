import React, { Component } from 'react'
import NumberFormat from 'react-number-format';
import CartService from '../../../services/CartService';
import Message from '../../../util/Message';
import ImageList from '../../../components/images/ImageList';
export default class ProductView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: <ul className="list-inline me-2 mb-0">



                <li className="list-inline-item me-0"><i className="fa fa-star text-gray-300"></i></li>
                <li className="list-inline-item me-0"><i className="fa fa-star text-gray-300"></i></li>
                <li className="list-inline-item me-0"><i className="fa fa-star text-gray-300"></i></li>
                <li className="list-inline-item me-0"><i className="fa fa-star text-gray-300"></i></li>
                <li className="list-inline-item me-0"><i className="fa fa-star text-gray-300"></i></li>
            </ul>,
            amoutItem: 1,
            type: 'success',
            isShow: false,
            message: '',
        }
        this.star = [1, 2, 3, 4, 5];
    }
    async handleChange(e) {
        const value = Number(e.target.value);
        if (value > 0 && value <= this.props.product.remain)
            await this.setState({
                amoutItem: value,
            })
    }

    componentDidMount() {
        if (this.props.totalReview > 0)
            this.setState({
                stars: <ul className="list-inline me-2 mb-0">
                    {this.star.map((num, index) => {
                        if (num <= this.props.ratePoint)
                            return <li key={index} className="list-inline-item me-0"><i className="fa fa-star text-primary"></i></li>;
                        else return <li key={index} className="list-inline-item me-0"><i className="fa fa-star text-gray-300"></i></li>
                    })}
                </ul>
            })
        if (this.props.product.remain === 0) {
            this.setState({
                amoutItem: 0,
            })
        }

        //console.log(this.props.product);
    }
    add2Cart() {
        if (this.props.product.remain === 0) {
            this.setState({
                message: `This product was sold out!`,
                type: 'danger',
                isShow: !this.setState.isShow,
            });
            return;
        }
        CartService.add(this.props.productId, Number(this.state.amoutItem));
        this.setState({
            message: `Add product ${this.props.product.productName} to cart!`,
            type: 'success',
            isShow: !this.setState.isShow,
        });

    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 py-3 order-2 order-lg-1">
                    <div className="col-lg-6 col-xl-7 pt-4 order-2 order-lg-1">
                        <ImageList id={this.props.productId}></ImageList>

                    </div>
                </div>
                <div className="d-flex align-items-center col-lg-6 col-xl-5 ps-lg-5 mb-5 order-1 order-lg-2">
                    <div>
                        <ul className="breadcrumb justify-content-start">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="category.html">Tops and Jackets</a></li>
                            <li className="breadcrumb-item active">Modern Jacket</li>
                        </ul>
                        <h1 className="mb-4">{this.props.product.fullName}</h1>
                        <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                            <ul className="list-inline mb-2 mb-sm-0">
                                <li className="list-inline-item h4 fw-light mb-0"><NumberFormat value={this.props.product.price} displayType={'text'} thousandSeparator={true} prefix='$' /></li>
                                <li className="list-inline-item text-muted fw-light">
                                    <del><NumberFormat value={this.props.product.price} displayType={'text'} thousandSeparator={true} prefix='$' /></del>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center">
                                {this.state.stars}
                                <span className="text-muted text-uppercase text-sm">{this.props.totalReview} reviews</span>
                            </div>
                        </div>
                        <p className="mb-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>

                        <div className="row">
                            {/*<div className="col-sm-6 col-lg-12 detail-option mb-3">
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
        </div>*/}
                            <div className="col-12 col-lg-6 detail-option mb-5">
                                <label className="detail-option-heading fw-bold">Items <span>(required)</span> Remain:<span>{this.props.product.remain}</span></label>
                                <input className="form-control detail-quantity" name="items" type="number" onChange={(e) => this.handleChange(e)} value={this.state.amoutItem} />
                            </div>

                        </div>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <button className="btn btn-dark btn-lg mb-1" onClick={() => this.add2Cart()}> <i className="fa fa-shopping-cart me-2"></i>Add to Cart</button>
                            </li>
                            <Message isShow={this.state.isShow} type={this.state.type} message={this.state.message} key={this.state.message} />
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}
