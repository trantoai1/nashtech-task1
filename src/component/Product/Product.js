import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import '../Page/style.css';
class Product extends Component {
    render() {
        return (
            <div className="col-4">
                        <div className="product-item">
                            <img src="assets/images/products/furniture-2-2-600x800.jpg" alt=""/>
                            <h5 className="product-title">{this.props.name}</h5>
                            <small>{this.props.remain}</small>
                            <p>
                                <strong><NumberFormat value={this.props.price} displayType={'text'} thousandSeparator={true}  /></strong><small> VND</small>
                            </p>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
            
        );
    }
}
export default Product;