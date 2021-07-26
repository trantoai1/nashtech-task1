import React, { Component } from 'react'
import { get } from '../../api/callAPI';
import CartService from '../../services/CartService';
import NumberFormat from 'react-number-format';
import  Image from '../../assets/img/default.png';
export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            items: {},
            total: 0,
        }
    }
    componentDidMount() {
        const items = CartService.getCurrentCart();
        this.setState({
            items: items,
        })
        let params = {};
        if (items) {
            params['products'] = Object.keys(items).reduce((f, s) => `${f},${s}`);
            get('products', params)
                .then(res => {
                    if (res && res.status === 200) {
                        const total = res.data.reduce((prev, cur) => prev + cur.price * items[cur.productId], 0);
                        this.setState({
                            products: res.data,
                            total: total,
                        })
                    }
                });
        }
    }
    async setNewValue(id, remain, value) {
        if (value > 0 && value <= remain) {
            let newItems = this.state.items;
            newItems[id] = value;
            const total = this.state.products.reduce((prev, cur) => prev + cur.price * newItems[cur.productId], 0);
            console.log(total);
            await this.setState({
                items: newItems,
                total: total,
            })
            CartService.setTotal(total);
            CartService.add(id, value);
        }
    }
    async handleRemove(id) {
        let newItems = this.state.items;
        delete newItems[id];
        const newProducs = this.state.products.filter(product => product.productId !== id)
        //console.log(newProducs);
        const total = newProducs.reduce((prev, cur) => prev + cur.price * newItems[cur.productId], 0);
        //console.log(total);
        await this.setState({
            items: newItems,
            products: newProducs,
            total: total,
        })
        CartService.setTotal(total);
        CartService.remove(id);
    }
    go2CheckOut(){
        CartService.setTotal(this.state.total);
    }
    handleMinus(id, remain) {
        const value = Number(this.state.items[id]) - 1;
        this.setNewValue(id, remain, value);
    }
    async handleAdd(id, remain) {
        const value = Number(this.state.items[id]) + 1;
        this.setNewValue(id, remain, value);
    }
    async handleNumberItem(e, productId, remain) {
        const value = Number(e.target.value);
        this.setNewValue(productId, remain, value);
    }
    render() {
        return (<>
            <section className="hero">
                <div className="container">

                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Shopping cart        </li>
                    </ol>

                    <div className="hero-content pb-5 text-center">
                        <h1 className="hero-heading">Shopping cart</h1>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2"><p className="lead text-muted">You have {this.state.products.length} items in your shopping cart</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8">
                            <div className="cart">
                                <div className="cart-wrapper">
                                    <div className="cart-header text-center">
                                        <div className="row">
                                            <div className="col-5">Item</div>
                                            <div className="col-2">Price</div>
                                            <div className="col-2">Quantity</div>
                                            <div className="col-2">Total</div>
                                            <div className="col-1"></div>
                                        </div>
                                    </div>
                                    <div className="cart-body">
                                        {this.state.products.map((product, index) => (
                                            <div className="cart-item" key={index}>
                                                <div className="row d-flex align-items-center text-center">
                                                    <div className="col-5">
                                                        <div className="d-flex align-items-center"><a href="detail.html"><img className="cart-item-img" src={Image} alt="..." /></a>
                                                            <div className="cart-title text-start"><a className="text-uppercase text-dark" href="detail.html"><strong>{product.fullName}</strong></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-2"><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix='$' /></div>
                                                    <div className="col-2">
                                                        <div className="d-flex align-items-center">
                                                            <div className="btn btn-items btn-items-decrease" onClick={() => this.handleMinus(product.productId, product.remain)}>-</div>
                                                            <input className="form-control text-center input-items" type="text" onChange={(e) => this.handleNumberItem(e, product.productId, product.remain)} value={this.state.items[product.productId]} />
                                                            <div className="btn btn-items btn-items-increase" onClick={() => this.handleAdd(product.productId, product.remain)}>+</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 text-center"><NumberFormat value={product.price * this.state.items[product.productId]} displayType={'text'} thousandSeparator={true} prefix='$' /></div>
                                                    <div className="col-1 text-center"><a className="cart-remove"  onClick={() => this.handleRemove(product.productId)}> <i className="fa fa-times"></i></a></div>
                                                </div>
                                            </div>))}

                                    </div>
                                </div>
                            </div>
                            <div className="my-5 d-flex justify-content-between flex-column flex-lg-row"><a className="btn btn-link text-muted" href="/products"><i className="fa fa-chevron-left"></i> Continue Shopping</a><a className="btn btn-dark" href="/checkout" onClick={()=> this.go2CheckOut()} >Proceed to checkout <i className="fa fa-chevron-right"></i>                                                     </a></div>
                        </div>
                        <div className="col-lg-4">
                            <div className="block mb-5">
                                <div className="block-header">
                                    <h6 className="text-uppercase mb-0">Order Summary</h6>
                                </div>
                                <div className="block-body bg-light pt-1">
                                    <p className="text-sm">Shipping and additional costs are calculated based on values you have entered.</p>
                                    <ul className="order-summary mb-0 list-unstyled">
                                        <li className="order-summary-item"><span>Order Subtotal </span><span><NumberFormat value={this.state.total} displayType={'text'} thousandSeparator={true} prefix='$' /></span></li>
                                        <li className="order-summary-item"><span>Shipping and handling</span><span>$0.00</span></li>
                                        <li className="order-summary-item"><span>Tax</span><span>$0.00</span></li>
                                        <li className="order-summary-item border-0"><span>Total</span><strong className="order-summary-total"><NumberFormat value={this.state.total} displayType={'text'} thousandSeparator={true} prefix='$' /></strong></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
        )
    }
}
