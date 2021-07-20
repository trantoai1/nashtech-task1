import React, { Component } from 'react';
import get from '../../api/callAPI';
import Product from './Product';
class ProductList extends Component {
    constructor(props) {
        super(props);
        //console.log('init');
        this.state = {
            products: [],
            data:{
                categoryId:0,
                featureIds:[1],

            },
            update:false,
        }
        //console.log(this.state);
    }
    
    
    
    componentDidMount(){
        get('products')
            .then(res => {
                //console.log(res)
                if(res!==undefined)
                //console.log(res)
            if(res.status===200)
                this.setState({
                    products: res.data
                });
            });
    }
    
    
    componentDidUpdate()
    {
        if(!this.props.isTable)
        {
         if(this.state.data.categoryId!==this.props.categoryId||this.state.data.featureIds!==this.props.featureIds)
        {
              this.setState({
                data:{
                    categoryId:this.props.categoryId,
                    featureIds: this.props.featureIds,
                },
                update:true,
            });
            
        }
        if(this.state.update)
        {
            let params = {};
            if(this.state.data.categoryId!==0)
            params["categoryId"] = this.state.data.categoryId;
            if(this.state.data.featureIds.length>0)
                params["featureIds"] = this.state.data.featureIds.reduce((f,s)=>`${f},${s}`);
            
            get('products',params)
            .then(res => {
                
                if(res!==undefined)
                
            if(res.status===200)
                this.setState({
                    products: res.data
                });
            });
            this.setState({
                update: false,
            });
        }     
    }   
    }
    
    render() {
        var listProducts = this.state.products
       
        
        return (
            
            listProducts.map((product,index)=>{
                
                return (
                <Product 
                    id = {product.productId}
                    name = {product.fullName}
                    desc = {product.productDesc}
                    price = {product.price}
                    key = {product.productId}
                    remain = {product.remain}
                    isTable = {this.props.isTable}
                    categoryName = {product.categoryName}
                    isTable = {this.props.isTable} 
                    deleteProduct={(id)=>this.props.deleteProduct(id)}
                />
                )
                 
            })
        );
    }
    
}
export default ProductList;