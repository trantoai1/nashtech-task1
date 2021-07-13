import React, { Component } from 'react'
import FeatureList from '../Feature/FeatureList'
export default class FeatureType extends Component {
    render() {
        return (
            <>
            
            
            
           

<div className="expand-lg collapse show" id="brandFilterMenu">
    <h6 className="sidebar-heading d-none d-lg-block">{this.props.name} </h6>
    <form className="mt-4 mt-lg-0" action="#">
    <FeatureList unit ={this.props.unit}
                id = {this.props.id}
               />
    </form>
</div>

            
            </>
        )
    }
}
