import React, { Component } from 'react'
import ProductList from '../Product/ProductList'

export default class Content extends Component {
    render() {
        return (
            <>
				<div id="product-list" className="col">
                
                <h5 className="product-category">New Product</h5>
                <div id="new-product" className="row">
                    <ProductList/>
                </div>
                <hr className="product-divider"/>

                
                <h5 className="product-category">Woman Product</h5>
                <div id="woman-product" className="row"></div>
                <hr className="product-divider"/>

                
                <h5 className="product-category">Men Product</h5>
                <div id="men-product" className="row"></div>
            </div>
			</>
        )
    }
}
