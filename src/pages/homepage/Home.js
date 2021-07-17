import React, { Component } from 'react'
import Slider from './Slider'
export default class Home extends Component {
    render() {
        return (
          <><Slider />
            <section>
      <div className="container-fluid g-2">
        <div className="row g-2">
          <div className="col-md-6">
            <div className="card border-0 text-white text-center"><img className="card-img" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/christopher-campbell-28571-unsplash.jpg" alt=""/>
              <div className="card-img-overlay d-flex align-items-center"> 
                <div className="w-100 py-3">
                  <h2 className="display-3 fw-bold mb-4">Top picks</h2><a className="btn btn-light" href="category.html">Shop now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 text-white text-center"><img className="card-img" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/marco-xu-496929-unsplash.jpg" alt=""/>
              <div className="card-img-overlay d-flex align-items-center"> 
                <div className="w-100 py-3">
                  <h2 className="display-3 fw-bold mb-4">New arrivals</h2><a className="btn btn-light" href="category.html">Shop now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 text-center text-white"><img className="card-img" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/benjamin-voros-260869-unsplash.jpg" alt=""/>
              <div className="card-img-overlay d-flex align-items-center"> 
                <div className="w-100">
                  <h2 className="display-4 mb-4">Jackets</h2><a className="btn btn-link text-white" href="category.html">Shop now <i className="fa-arrow-right fa ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 text-center text-white"><img className="card-img" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/malvestida-magazine-458585-unsplash.jpg" alt=""/>
              <div className="card-img-overlay d-flex align-items-center"> 
                <div className="w-100">
                  <h2 className="display-4 mb-4">Lookbook</h2><a className="btn btn-link text-white" href="category.html">Shop now <i className="fa-arrow-right fa ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 text-center text-dark"><img className="card-img" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/michael-frattaroli-221247-unsplash.jpg" alt=""/>
              <div className="card-img-overlay d-flex align-items-center"> 
                <div className="w-100">
                  <h2 className="display-4 mb-4">Try this</h2><a className="btn btn-link text-dark" href="category.html">Shop now <i className="fa-arrow-right fa ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></>
        )
    }
}
