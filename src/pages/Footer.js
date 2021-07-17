import React, { Component } from 'react'

import {
   

    Link
} from 'react-router-dom';
export default class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
      
      <div className="bg-gray-100 text-dark-700 py-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 service-column">
              <svg className="svg-icon service-icon">
                <Link to="/"> </Link>
              </svg>
              <div className="service-text">
                <h6 className="text-uppercase">Free shipping &amp; return</h6>
                <p className="text-muted fw-light text-sm mb-0">Free Shipping over $300</p>
              </div>
            </div>
            <div className="col-lg-4 service-column">
              <svg className="svg-icon service-icon">
                <Link to="/"> </Link>
              </svg>
              <div className="service-text">
                <h6 className="text-uppercase">Money back guarantee</h6>
                <p className="text-muted fw-light text-sm mb-0">30 Days Money Back Guarantee</p>
              </div>
            </div>
            <div className="col-lg-4 service-column">
              <svg className="svg-icon service-icon">
                <Link to="/"> </Link>
              </svg>
              <div className="service-text">
                <h6 className="text-uppercase">020-800-456-747</h6>
                <p className="text-muted fw-light text-sm mb-0">24/7 Available Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-6 bg-gray-300 text-muted"> 
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="fw-bold text-uppercase text-lg text-dark mb-3">Sell<span className="text-primary">.</span></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <ul className="list-inline">
                <li className="list-inline-item"><Link className="text-muted text-primary-hover" to="#" target="_blank" title="twitter"><i className="fab fa-twitter"></i></Link></li>
                <li className="list-inline-item"><Link className="text-muted text-primary-hover" to="#" target="_blank" title="facebook"><i className="fab fa-facebook"></i></Link></li>
                <li className="list-inline-item"><Link className="text-muted text-primary-hover" to="#" target="_blank" title="instagram"><i className="fab fa-instagram"></i></Link></li>
                <li className="list-inline-item"><Link className="text-muted text-primary-hover" to="#" target="_blank" title="pinterest"><i className="fab fa-pinterest"></i></Link></li>
                <li className="list-inline-item"><Link className="text-muted text-primary-hover" to="#" target="_blank" title="vimeo"><i className="fab fa-vimeo"></i></Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
              <h6 className="text-uppercase text-dark mb-3">Shop</h6>
              <ul className="list-unstyled">
                <li> <Link className="text-muted" to="#">For Women</Link></li>
                <li> <Link className="text-muted" to="#">For Men</Link></li>
                <li> <Link className="text-muted" to="#">Stores</Link></li>
                <li> <Link className="text-muted" to="#">Our Blog</Link></li>
                <li> <Link className="text-muted" to="#">Shop</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
              <h6 className="text-uppercase text-dark mb-3">Company</h6>
              <ul className="list-unstyled">
                <li> <Link className="text-muted" to="#">Login                    </Link></li>
                <li> <Link className="text-muted" to="#">Register                    </Link></li>
                <li> <Link className="text-muted" to="#">Wishlist                    </Link></li>
                <li> <Link className="text-muted" to="#">Our Products                    </Link></li>
                <li> <Link className="text-muted" to="#">Checkouts                    </Link></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h6 className="text-uppercase text-dark mb-3">Daily Offers & Discounts</h6>
              <p className="mb-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
              <form action="#" id="newsletter-form">
                <div className="input-group mb-3">
                  <input className="form-control bg-transparent border-secondary border-end-0" type="email" placeholder="Your Email Address" aria-label="Your Email Address"/>
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary border-start-0" type="submit"> <i className="fa fa-paper-plane text-lg text-dark"></i></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-4 fw-light bg-gray-800 text-gray-300">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">&copy; 2020 Your company.  All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-end">
                <li className="list-inline-item"><img className="w-2rem" src="img/visa.svg" alt=""/></li>
                <li className="list-inline-item"><img className="w-2rem" src="img/mastercard.svg" alt=""/></li>
                <li className="list-inline-item"><img className="w-2rem" src="img/paypal.svg" alt=""/></li>
                <li className="list-inline-item"><img className="w-2rem" src="img/western-union.svg" alt=""/></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
        )
    }
}
