import React, { Component } from 'react'
import AuthService from '../../services/AuthService';
export default class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
      fullName:'',
      email:'',
        }
    }
    componentDidMount(){
        const user = AuthService.getCurrentUser();
        if(user)
        {
          this.setState({
            username:user.username,
            fullName:user.fullName,
            email:user.email,
          })
        }
      }
    render() {
        return (
            <div className="col-xl-3 col-lg-4 mb-5">
                <div className="customer-sidebar card border-0">
                  <div className="customer-profile"><a className="d-inline-block" href="/"><img className="img-fluid rounded-circle customer-image shadow" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-589739-unsplash-avatar.jpg" alt="" /></a>
                    <h5>{this.state.fullName}</h5>
                    <p className="text-muted text-sm mb-0">{this.state.email}</p>
                  </div>
                  <nav className="list-group customer-nav"><a className="list-group-item d-flex justify-content-between align-items-center text-decoration-none" href="/orders"><span>
                    <svg className="svg-icon svg-icon-heavy me-2">

                    </svg>Orders</span>
                    </a><a className="list-group-item d-flex justify-content-between align-items-center text-decoration-none" href="/profile"><span>
                      <svg className="svg-icon svg-icon-heavy me-2">

                      </svg>Profile</span></a>
                  </nav>
                </div>
              </div>
        )
    }
}
