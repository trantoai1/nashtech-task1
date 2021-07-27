import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { post } from '../../api/callAPI';
import AuthService from '../../services/AuthService';
import CartService from '../../services/CartService';
import NumberFormat from 'react-number-format';
import Message from '../../util/Message';
export default class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      total: 0,
      address: '',
      phone: '',
      userId: 0,
      type:'success',
            isShow : false,
            message:'',
    }
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    const total = CartService.getTotal();
    if (!user)
      <Redirect to='/customer' />

    this.setState({
      fullName: user.fullName,
      email: user.email,
      userId: user.id,
      total: total ? total : 0,
    })

  }
  handleOnChangeEmail(e) {

  }
  handleOnChangeName(e) {

  }
  handleOnChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }
  handleOnChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
   checkOut() {
    if (CartService.isEmpty()) {
        this.setState({
          message:`Please choose some product first!`,
          type:'warning',
      });
      this.setState({
        isShow: !this.setState.isShow,
      })
      return;
    }
    const cart = CartService.getCurrentCart();
    if(!cart) return;
    let body = {};
    body['userId'] = this.state.userId;
    body['address'] = this.state.address;
    body['phone'] = this.state.phone;
    body['details'] = {};
    const keys = Object.keys(cart);
    keys.map((key,index)=>{
        body['details'][key] = cart[key];
        return [];
    })

    post('orders',body).then(res=>{
        if(res&&res.status===201)
        {
            this.setState({
              message: `Checkout success! Your order'id is ${res.data.orderId}`,
              type:'success',
              isShow:true,
            });
            localStorage.removeItem('cart');
            localStorage.removeItem('total');
        }
        console.log(res);
    },
    err=>{
        err.response&&this.setState({
            message:`${err.response.data.error} ${err.response.data.message}`,
            type:'danger',
        });
    });
    this.setState({
      isShow: !this.setState.isShow,
    })
  }
  render() {
    return (
      <>
        <section className="hero">
          <div className="container">
            {/* Breadcrumbs */}
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Checkout        </li>
            </ol>
            {/* Hero Content*/}
            <div className="hero-content pb-5 text-center">
              <h1 className="hero-heading">Checkout</h1>
              <div className="row">
                <div className="col-xl-8 offset-xl-2"><p className="lead text-muted">Please fill in your address.</p></div>
              </div>
            </div>
          </div>
        </section>
        {/* Checkout*/}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
              <Message isShow={this.state.isShow} type={this.state.type} message={this.state.message} key={this.state.message}/>
                <ul className="custom-nav nav nav-pills mb-5">
                  <li className="nav-item w-25"><span className="nav-link text-sm active" href="checkout1.html">Address</span></li>
                  
                </ul>
                <form >
                  <div className="block">
                    {/* Invoice Address*/}
                    <div className="block-header">
                      <h6 className="text-uppercase mb-0">Invoice address                    </h6>
                    </div>
                    <div className="block-body">
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label className="form-label" htmlFor="fullname_invoice">Full Name</label>
                          <input className="form-control" type="text" name="fullname_invoice" placeholder="Joe Black" value={this.state.fullName} onChange={(e) => this.handleOnChangeName(e)} readOnly={true} id="fullname_invoice" />
                        </div>
                        <div className="form-group col-md-6">
                          <label className="form-label" htmlFor="emailaddress_invoice">Email Address</label>
                          <input className="form-control" type="text" name="emailaddress_invoice" value={this.state.email} onChange={(e) => this.handleOnChangeEmail(e)} readOnly={true} placeholder="joe.black@gmail.com" id="emailaddress_invoice" />
                        </div>
                        <div className="form-group col-md-6">
                          <label className="form-label" htmlFor="street_invoice">Street</label>
                          <input className="form-control" type="text" name="street_invoice" value={this.state.address} onChange={(e) => this.handleOnChangeAddress(e)} placeholder="123 Main St." id="street_invoice" />
                        </div>

                        <div className="form-group col-md-6">
                          <label className="form-label" htmlFor="phonenumber_invoice">Phone Number</label>
                          <input className="form-control" type="text" name="phonenumber_invoice" value={this.state.phone} onChange={(e) => this.handleOnChangePhone(e)} placeholder="Phone Number" id="phonenumber_invoice" />
                        </div>

                      </div>
                      {/* /Invoice Address*/}
                    </div>
                    {/* Shippping Address*/}

                  </div>
                  <div className="mb-5 d-flex justify-content-between flex-column flex-lg-row"><a className="btn btn-link text-muted" href="cart" > <i className="fa fa-angle-left me-2"></i>Back </a><a className="btn btn-dark"  onClick={() => this.checkOut()}>Check Out<i className="fa fa-angle-right ms-2"></i></a></div>
                </form>
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
                      <li className="order-summary-item"><span>Shipping and handling</span><span>$00.00</span></li>
                      <li className="order-summary-item"><span>Tax</span><span>$0.00</span></li>
                      <li className="order-summary-item border-0"><span>Total</span><strong className="order-summary-total"><NumberFormat value={this.state.total} displayType={'text'} thousandSeparator={true} prefix='$' /></strong></li>
                    </ul>
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
