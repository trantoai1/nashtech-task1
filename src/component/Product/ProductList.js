import React, { Component } from 'react';
import callAPI from '../../api/callAPI';
import Product from './Product';
class ProductList extends Component {
    constructor(props) {
        super(props);
        //console.log('init');
        this.state = {
            products: []
        }
        //console.log(this.state);
    }
    
    
    
    componentDidMount(){
        callAPI('products')
        .then(res => {
            console.log(res)
            if(res!==undefined)
            //console.log(res)
           if(res.status===200)
            this.setState({
                products: res.data
            });
        });
        
    }
    
    render() {
        var listProducts = this.state.products
        //console.log('render');
        //console.log(this.state);
        
        return (
            
            listProducts.map((product,index)=>{
                //console.log(food.name);
                return (
                    

                                

                    
                
                <Product 
                    id = {product.productId}
                    name = {product.productName}
                    desc = {product.productDesc}
                    price = {product.price}
                    key = {product.productId}
                    remain = {product.remain}
                />
                
                
                )
                 
            })
        );
    }
    
}
export default ProductList;