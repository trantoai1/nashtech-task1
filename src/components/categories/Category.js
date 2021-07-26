import React, { Component } from 'react'

export default class Category extends Component {
    
    
    render() {
        if(this.props.select)
        
                return (<option value={this.props.id}>{this.props.name}</option>)
         
        if(this.props.isTable)
        return (
            
                                    <tr>
                                        <th className="py-4 align-middle"># {this.props.id}</th>
                                        <td className="py-4 align-middle">{this.props.name}</td>
                                        <td className="py-4 align-middle">{this.props.unit}</td>
                                        <td className="py-4 align-middle">{this.props.amount}</td>
                                        <td className="py-4 align-middle">
                                            <a className="btn btn-outline-dark btn-sm" href={`categories/${this.props.id}`}>Edit</a>
                                            <button className="btn btn-outline-dark btn-sm" onClick={(e)=>this.props.deleteCate(this.props.id)}>Delete</button>
                                            </td>
                                    </tr>
                                    
                                
        )
        else
        return (
            <div className="sidebar-menu-item mb-2" role="menuitem"><button className="nav-link"  onClick={(e)=>this.props.filterByCate(this.props.id)}><span>{this.props.name}</span>{this.props.amount>0?<span className="sidebar-badge ms-2">{this.props.amount}</span>:''}</button></div>
        )
    }
}
