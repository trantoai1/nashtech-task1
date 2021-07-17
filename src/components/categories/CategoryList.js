import React, { Component } from 'react'

import get from '../../api/callAPI';
import Category from './Category';
export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        //console.log('init'); 
        this.state = {
            categories: []
        }
        //console.log(this.state);
    }
    componentDidMount(){
        get('categories')
        .then(res => {
            //console.log(res)
            if(res!==undefined)
            //console.log(res)
           if(res.status===200)
            this.setState({
                categories: res.data
            });
        });
        
    }

    render() {
        var listCategories = this.state.categories
        //console.log('render');
        //console.log(this.state);
        
        return (
            
            listCategories.map((category,index)=>{
                //console.log(food.name);
                return (
                    <Category key = {index} 
                    filterByCate={(id)=>this.props.filterByCate(id)}
                    id = {category.id}
                    name = {category.cateName}
                    desc = {category.description}  
                    amount = {category.amountProducts}                  
                />
                )
                 
            })
        );
    }
}
