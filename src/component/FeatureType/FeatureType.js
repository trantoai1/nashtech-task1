import React, { Component } from 'react'
import FeatureList from '../Feature/FeatureList'
export default class FeatureType extends Component {
    render() {
        return (
            <><h5>{this.props.name}</h5>
            <hr/>
            
            <FeatureList unit ={this.props.unit}
                id = {this.props.id}
               
            />
            
            <div>
               
            </div></>
        )
    }
}
