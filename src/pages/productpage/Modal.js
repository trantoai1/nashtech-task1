import React, { Component } from 'react'
import { get } from '../../api/callAPI';
import ProductView from '../detailpage/components/ProductView';
export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state={
            product:{},
            rates: [],
            
            rate : 0,
        }
    }
    componentDidMount(){
        get(`products/${this.props.productId}`)
        .then(res=>{
            if(res&&res.status===200)
            {
                this.setState({
                    product:res.data,
                })
            }
        })
        get('rates',{"productId":this.props.productId})
        .then(res => {
            //console.log(res)
            if(res!==undefined)
            
            if(res.status===200)
            this.setState({
                rates:  res.data,
                rate:   res.data.length===0?0://if no review => point = 0
                        Math.ceil(res.data.reduce((a,b)=> a.point+b.point)/res.data.length),
            });
            //console.log(this.state.rate);
        });
    }

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
                                <ProductView product={this.state.product} productId={this.props.productId} ratePoint={this.state.rate} key={this.state.rate} totalReview={this.state.rates.length}/>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
