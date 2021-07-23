import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
export default class Customer extends Component {
    render() {
        return (
            <>
                <section className="hero">
                    <div className="container">

                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Customer zone        </li>
                        </ol>

                        <div className="hero-content pb-5 text-center">
                            <h1 className="hero-heading mb-0">Customer zone</h1>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row justify-content-center">
                            <Login />
                            <Register />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
