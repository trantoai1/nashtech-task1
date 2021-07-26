import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            
            <tr>
                <th className="py-4 align-middle"># {this.props.id}</th>
                <td className="py-4 align-middle">{this.props.username}</td>
                <td className="py-4 align-middle">{this.props.email}</td>
                <td className="py-4 align-middle">{this.props.address}</td>
                <td className="py-4 align-middle">{this.props.role}</td>
                <td className="py-4 align-middle">
                    <a className="btn btn-outline-dark btn-sm" href={`customers/${this.props.id}`}>Edit</a>
                    <button className="btn btn-outline-dark btn-sm" onClick={(e)=>this.props.deleteUser(this.props.id)}>Delete</button>
                    </td>
            </tr>
            
        
)
    }
}
