import React, { Component } from 'react'
import { get } from '../../api/callAPI';
import AuthService from '../../services/AuthService';
import Avatar from './Avatar';
export default class Orders extends Component {
    constructor(props) {
        super(props);
        this.state={
            orders:[]
        }
        this.label = {
            'PREPARE':"badge-info-light",
            'SUCCESS':"badge-success-light",
            'SHIPPING':"badge-warning-light",
            'CANCELED':"badge-danger-light",
        }
    }
    componentDidMount(){
        const user = AuthService.getCurrentUser();
        get(`orders`,{"userId":user.id})
        .then(res=>{
            if(res&&res.status===200)
            {
                this.setState({
                    orders: res.data,
                })
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
          <li className="breadcrumb-item active">Orders        </li>
        </ol>
        {/* Hero Content*/}
        <div className="hero-content pb-5 text-center">
          <h1 className="hero-heading">Your orders</h1>
          <div className="row">   
            <div className="col-xl-8 offset-xl-2"><p className="lead">Your orders in one place.</p></div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-9">
            <table className="table table-borderless table-hover table-responsive-md">
              <thead className="bg-light">
                <tr>
                  <th className="py-4 text-uppercase text-sm">Order #</th>
                  <th className="py-4 text-uppercase text-sm">Date</th>
                  <th className="py-4 text-uppercase text-sm">address</th>
                  <th className="py-4 text-uppercase text-sm">Status</th>
                  <th className="py-4 text-uppercase text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.orders.map((order,index)=>(

                <tr key={index}>
                <th className="py-4 align-middle"># {order.orderId}</th>
                <td className="py-4 align-middle">{order.time}</td>
                <td className="py-4 align-middle">{order.address}</td>
                <td className="py-4 align-middle"><span className={`badge p-2 text-uppercase ${this.label[order.status]}`}>{order.status}</span></td>
                <td className="py-4 align-middle"><a className="btn btn-outline-dark btn-sm" href={`/orders/${order.orderId}`}>View</a></td>
                </tr>
                )
                    
                )}

                
              </tbody>
            </table>
          </div>
          {/* Customer Sidebar*/}
          <Avatar/>
          {/* /Customer Sidebar*/}
        </div>
      </div>
    </section>
            </>
        )
    }
}
