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
        
        
        console.log('componentDidMount:'+this.state.data);
        //if(this.state.data===undefined)
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
        
         if(this.state.data.categoryId!==this.props.categoryId||this.state.data.featureIds!==this.props.featureIds)
        {
            console.log('.................State change..................');
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
            //console.log(params);
            //console.log({"categoryId":this.state.data.categoryId,"featureIds":this.state.data.featureIds.reduce((f,s)=>`${f},${s}`)});
            get('products',params)
            .then(res => {
                //console.log(res)
                if(res!==undefined)
                //console.log(res)
            if(res.status===200)
                this.setState({
                    products: res.data
                });
            });
            this.setState({
                update: false,
            });
        }
       
        // else
        // getBody('products',this.state.data)
        //     .then(res => {
        //         //console.log(res)
        //         if(res!==undefined)
        //         //console.log(res)
        //     if(res.status===200)
        //         this.setState({
        //             products: res.data
        //         });
        //     });
        // if(this.state.data.featureIds!==this.props.filter.featureIds)
        // {
        //     this.setState({
        //         data:{
        //             categoryId:this.props.filter.categoryId,
        //             featureIds: JSON.stringify(this.props.filter.featureIds),
        //         },
        //     });
            
        // }
        // else
        //     getBody('products',this.state.data)
        //     .then(res => {
        //         //console.log(res)
        //         if(res!==undefined)
        //         //console.log(res)
        //     if(res.status===200)
        //         this.setState({
        //             products: res.data
        //         });
        //     });
        
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
                    name = {product.fullName}
                    desc = {product.productDesc}
                    price = {product.price}
                    key = {product.productId}
                    remain = {product.remain}
                    categoryName = {product.categoryName}

                />
                
                
                )
                 
            })
        );
    }
    
}
export default ProductList;