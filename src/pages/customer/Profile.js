import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <>
                <section className="hero">
      <div className="container">
        
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active">Your profile        </li>
        </ol>
        
        <div className="hero-content pb-5 text-center">
          <h1 className="hero-heading">Your profile</h1>
          <div className="row">   
            <div className="col-xl-8 offset-xl-2"><p className="lead text-muted">Maecenas sollicitudin. In rutrum. In convallis. Nunc tincidunt ante vitae massa. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Fusce dui leo, imperdiet in.</p></div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-9">
            <div className="block mb-5">
              <div className="block-header"><strong className="text-uppercase">Change your password</strong></div>
              <div className="block-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="password_old">Old password</label>
                        <input className="form-control" id="password_old" type="password"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="password_1">New password</label>
                        <input className="form-control" id="password_1" type="password"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="password_2">Retype new password</label>
                        <input className="form-control" id="password_2" type="password"/>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button className="btn btn-outline-dark" type="submit"><i className="far fa-save me-2"></i>Change password</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="block mb-5">
              <div className="block-header"><strong className="text-uppercase">Personal details</strong></div>
              <div className="block-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="firstname">Firstname</label>
                        <input className="form-control" id="firstname" type="text"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="lastname">Lastname</label>
                        <input className="form-control" id="lastname" type="text"/>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="company">Company</label>
                        <input className="form-control" id="company" type="text"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="street">Street</label>
                        <input className="form-control" id="street" type="text"/>
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-sm-6 col-md-3">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="city">Company</label>
                        <input className="form-control" id="city" type="text"/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="zip">ZIP</label>
                        <input className="form-control" id="zip" type="text"/>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="state">State</label>
                        <select className="form-control" id="state"></select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="country">Country</label>
                        <select className="form-control" id="country"></select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="phone">Telephone</label>
                        <input className="form-control" id="phone" type="text"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-control" id="email" type="text"/>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <button className="btn btn-outline-dark" type="submit"><i className="far fa-save me-2"></i>Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="col-xl-3 col-lg-4 mb-5">
            <div className="customer-sidebar card border-0"> 
              <div className="customer-profile"><a className="d-inline-block" href="#"><img className="img-fluid rounded-circle customer-image shadow" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-589739-unsplash-avatar.jpg" alt=""/></a>
                <h5>Julie Trnka</h5>
                <p className="text-muted text-sm mb-0">Ostrava, Czech Republic</p>
              </div>
              <nav className="list-group customer-nav"><a className="list-group-item d-flex justify-content-between align-items-center text-decoration-none" href="customer-orders.html"><span>
                    <svg className="svg-icon svg-icon-heavy me-2">
                      
                    </svg>Orders</span>
                  <div className="badge rounded-pill bg-dark fw-normal px-3">5</div></a><a className="active list-group-item d-flex justify-content-between align-items-center text-decoration-none" href="customer-account.html"><span>
                    <svg className="svg-icon svg-icon-heavy me-2">
                      
                    </svg>Profile</span></a><a className="list-group-item d-flex justify-content-between align-items-center text-decoration-none" href="customer-addresses.html"><span>
                    <svg className="svg-icon svg-icon-heavy me-2">
                      
                    </svg>Addresses</span></a><a className="list-group-item d-flex justify-content-between align-items-center text-decoration-none" href="customer-login.html"><span>
                    <svg className="svg-icon svg-icon-heavy me-2">
                      
                    </svg>Log out</span></a>
              </nav>
            </div>
          </div>
          
        </div>
      </div>
    </section>
            </>
        )
    }
}
