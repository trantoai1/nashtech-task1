import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            
        

            <a className="glightbox d-block mb-4" href={this.props.url} data-title="Modern Jacket 1 - Caption text" data-gallery="product-gallery">
              <div data-bs-toggle="zoom" data-image={this.props.url}><img className="img-fluid" src={this.props.url} alt="Modern Jacket 1"/></div></a>
              
            )
    }
}
