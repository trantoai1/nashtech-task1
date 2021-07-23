import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { get } from '../../api/callAPI';
import AuthService from '../../services/AuthService';
import NumberFormat from 'react-number-format';
import  Image from '../../assets/img/default.png';
class Order extends Component {
    constructor(props) {
        super(props);
        this.state={
            details:[],
            total:0,
        }
    }
    componentDidMount()
    {
        const orderId = this.props.match.params.id;
        const user = AuthService.getCurrentUser();
        if(!user) return;
        get('orderDetails',{"orderId":orderId})
        .then(res=>{
            if(res&&res.status===200)
            {
                let details = res.data;
                const listProducts = details.reduce((list,item)=>[...list,item.productId],[]);
                //console.log(details,listProducts);
                let params = {};
                params['products'] = listProducts.reduce((f, s) => `${f},${s}`);
                get('products', params)
                .then(res2 => {
                    if (res2 && res2.status === 200) {
                        
                        const products = res2.data;
                        let temp =products.reduce((ls,prod)=>{
                            //console.log('ls',ls);
                            //console.log('prod',prod);
                            let detail = details.filter(item=>item.productId===prod.productId);
                            //console.log('detail',detail)
                            detail[0]['name'] = prod.categoryName + ' ' + prod.productName;
                            detail[0]['price'] = prod.price;
                            ls=[...ls,detail[0]];
                            return ls;
                        },[]);
                        const total = temp.reduce((prev, cur) => prev + cur.price * cur.amount, 0);
                        //console.log(temp)
                        this.setState({
                            total:total,
                            details: temp,
                        })
                        // console.log(res2.data);
                    }
                });
            }
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
          <li className="breadcrumb-item"><a href="customer-orders.html">Orders</a></li>
          <li className="breadcrumb-item active">Order #{this.props.match.params.id}        </li>
        </ol>
        {/* Hero Content*/}
        <div className="hero-content pb-5 text-center">
          <h1 className="hero-heading">Order #{this.props.match.params.id}</h1>
          
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-9">
            <div className="cart">
              <div className="cart-wrapper">
                <div className="cart-header text-center">
                  <div className="row">
                    <div className="col-6">Item</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Quantity</div>
                    <div className="col-2">Total</div>
                  </div>
                </div>
                <div className="cart-body">
                  {/* Product*/}
                  {this.state.details.map((item,index)=>(
                    <div className="cart-item" key={index}>
                    <div className="row d-flex align-items-center text-center">
                      <div className="col-6">
                        <div className="d-flex align-items-center"><a href="detail.html"><img className="cart-item-img" src={Image} alt="..."/></a>
                          <div className="cart-title text-start"><a className="text-uppercase text-dark" href="detail.html"><strong>{item.name}</strong></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-2"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix='$' /></div>
                      <div className="col-2">{item.amount}
                      </div>
                      <div className="col-2 text-center"><NumberFormat value={item.price*item.amount} displayType={'text'} thousandSeparator={true} prefix='$' /></div>
                    </div>
                  </div>


                  ))}
                  
                  
                  
                  
                 
                </div>
                
              </div>
              
            </div>
            
          </div>
          
            <div className="col-lg-4 col-xl-3">
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
              
           
          {/* Customer Sidebar*/}
          
      </div>
      </div>
    </section>  
            </>
        )
    }
}
export default withRouter( Order);