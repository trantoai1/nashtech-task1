import React, { Component } from 'react'
import './style.css';
export default class Slider extends Component {
	render() {
		return (
			<div className="banner">
				<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="d-block w-100" src="assets/images/slider/banner-carousel-1.jpg" alt="First slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100" src="assets/images/slider/banner-carousel-2.jpg" alt="Second slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100" src="assets/images/slider/banner-carousel-3.jpg" alt="Third slide" />
						</div>
					</div>
					<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
				<div className="banner-message">
					<p className="banner-message-small">BEST OFFER</p>
					<p className="banner-message-large">NEW ARRIVALS ON SALE</p>
				</div>
			</div>
		)
	}
}
