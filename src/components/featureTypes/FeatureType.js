import React, { Component } from 'react'
import FeatureList from '../features/FeatureList'
export default class FeatureType extends Component {
    render() {
        if(this.props.isRadio)
        return (<><div className='row' onChange={(e)=>this.props.checkedFeature(e)}>
            <h6 className="sidebar-heading d-none d-lg-block">{this.props.name} </h6>
            
        <FeatureList unit ={this.props.unit}
                id = {this.props.id}
                isRadio = {this.props.isRadio}
                
                currentfeatures={this.props.currentfeatures}
                group = {this.props.id}
               />
        </div>
        </>)
        return (
            <>
            
            
            
           

<div className="expand-lg collapse show" id="brandFilterMenu">
    <h6 className="sidebar-heading d-none d-lg-block">{this.props.name} </h6>
    <form className="mt-4 mt-lg-0" action="#">
    <FeatureList unit ={this.props.unit}
                id = {this.props.id}
                checkedFeature={(e,id)=>this.props.checkedFeature(e,id)}
               />
    </form>
</div>

            
            </>
        )
    }
}
