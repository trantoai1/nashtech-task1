import React, { Component } from 'react'

import get from '../../api/callAPI';
import Feature from './Feature';
export default class FeatureList extends Component {
    constructor(props) {
        super(props);
        //console.log('init'); 
        this.state = {
            features: []
        }
        //console.log(this.state);
    }
    componentDidMount(){
        get('features',{"featureType":this.props.id})
        .then(res => {
            //console.log(res)
            if(res!==undefined)
            //console.log(res)
           if(res.status===200)
            this.setState({
                features: res.data
            });
        });
        
    }

    render() {
        var listFeatures = this.state.features
        //console.log('render');
        //console.log(this.state);
        
        return (
            
            listFeatures.map((feature,index)=>{
                //console.log(food.name);
                return (
                    <Feature key = {index}
                    checkedFeature={(e,id)=>this.props.checkedFeature(e,id)}
                    id = {feature.featureId}
                    spec = {feature.specific}
                    unit = {this.props.unit}                    
                />
                )
                 
            })
        );
    }
}
