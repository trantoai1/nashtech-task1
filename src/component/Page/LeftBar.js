import React, { Component } from 'react'
import FeatureTypeList from '../FeatureType/FeatureTypeList'
export default class LeftBar extends Component {
    render() {
        return (
            <>
               
            
            <div id="sidebar" className="col-3">
                <FeatureTypeList/>
            <button id="btn-filter" className="btn btn-primary">Filter</button>
            </div>
            
            

        
            </>
        )
    }
}
