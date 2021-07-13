import React, { Component } from 'react'

export default class Slider extends Component {
	render() {
		return (
			<section className="home-full-slider-wrapper mb-2">
     
      <div className="owl-carousel owl-theme owl-dots-modern home-full-slider">
        <div className="item home-full-item" style={{background: '#f8d5cf'}}><img className="bg-image" src="img/photo/matheus-ferrero-334418-unsplash.jpg" alt=""/>
          <div className="container-fluid h-100 py-5">
            <div className="row align-items-center h-100">
              <div className="col-lg-8 col-xl-6 mx-auto text-white text-center position-relative">
                <h5 className="text-uppercase text-white fw-light mb-4 letter-spacing-5"> Just arrived</h5>
                <h1 className="mb-5 display-2 fw-bold text-serif">Denim Jackets</h1>
                <p className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p> <a className="btn btn-light" href="category.html">View collection</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="item home-full-item bg-dark dark-overlay"><img className="bg-image" src="img/photo/ian-dooley-347942-unsplash.jpg" alt=""/>
          <div className="container-fluid h-100">
            <div className="row align-items-center h-100">
              <div className="col-lg-8 col-xl-6 mx-auto text-white text-center overlay-content">
                <h1 className="mb-4 display-2 text-uppercase fw-bold">Skeleton Tees</h1>
                <p className="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p> <a className="btn btn-light" href="category.html">Start shopping</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="item home-full-item"><img className="bg-image" src="img/photo/haley-phelps-62815-unsplash.jpg" alt=""/>
          <div className="container-fluid h-100">
            <div className="row align-items-center h-100">
              <div className="col-lg-8 col-xl-6 mx-auto text-white text-center position-relative">
                <h5 className="text-uppercase fw-light mb-4 letter-spacing-5"> Our bestseller</h5>
                <h1 className="mb-5 display-1 fw-bold text-serif">Skinny Jeans</h1>
                <p> <a className="btn btn-light" href="category.html">View collection</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
		)
	}
}
