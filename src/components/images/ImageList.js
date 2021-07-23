import React, { Component } from 'react'
import {get} from '../../api/callAPI';
import Image from './Image';
export default class ImageList extends Component {
    constructor(props) {
        super(props);
        //console.log('init'); 
        this.state = {
            images: []
        }
        //console.log(this.state);
    }
    componentDidMount(){
        //console.log('didmount');
        //console.log(this.props.id);
        get('images',{"productId":this.props.id})
        .then(res => {
            if (res !== undefined)
               
                if (res.status === 200)
                {
                    this.setState({
                        images: res.data 
                    });
                }
                    //console.log(this.state.images);
        });
        
    }
   
    render() {
        var listImage = this.state.images
        //console.log('render');
        //console.log(listImage);
        
        return (
            
            listImage.map((image,index)=>{
                //console.log(food.name);
                return (
                    <Image 
                    key = {index}
                    id = {image.id}
                    url = {image.url}
                    alt = {image.alt} 
                    width = {image.width}     
                    height = {image.height}               
                />
                )
                 
            })
        );
    }
}

