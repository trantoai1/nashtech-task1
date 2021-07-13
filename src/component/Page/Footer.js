import React, { Component } from 'react'
import './style.css';
export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
        <div className="container">
            <div className="row p-4">
                <div className="col-6">
                    <img src="assets/images/icons/app.png" alt="icon"/>
                </div>
                <div className="col">
                    <h5>About</h5>
                    <p><a href="/">Contact Us</a></p>
                    <p><a href="/">Legal</a></p>
                    <p><a href="/">Term</a></p>
                    <p><a href="/">Policy</a></p>
                </div>
                <div className="col">
                    <h5>Compare</h5>
                    <p><a href="/">HackerRank</a></p>
                    <p><a href="/">DevSkill</a></p>
                    <p><a href="/">InterviewMocha</a></p>
                    <p><a href="/">eSkill</a></p>
                </div>
                <div className="col">
                    <h5>Product</h5>
                    <p><a href="/">Pricing</a></p>
                    <p><a href="/">Tour</a></p>
                    <p><a href="/">Support</a></p>
                </div>
                <div className="col">
                    <h5>Link</h5>
                    <p><a href="/"><i className="fab fa-facebook-f"></i> Facebook</a></p>
                    <p><a href="/"><i className="fab fa-twitter"></i> Twitter</a></p>
                    <p><a href="/"><i className="fab fa-youtube"></i> Youtube</a></p>
                </div>
            </div>
        </div>
    </div>

        )
    }
}
