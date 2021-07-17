import React, { Component } from 'react'

export default class Category extends Component {
    
    render() {
        return (
            <div className="sidebar-menu-item mb-2" role="menuitem"><a className="nav-link" href="#!" onClick={(e)=>this.props.filterByCate(this.props.id)}><span>{this.props.name}</span>{this.props.amount>0?<span className="sidebar-badge ms-2">{this.props.amount}</span>:''}</a></div>
        )
    }
}
