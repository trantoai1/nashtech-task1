import React, { Component } from 'react';

import {


    Link
} from 'react-router-dom';
import NavBar from './NavBar';

class Header extends Component {
    render() {
        return (
            <header className='header'>

                <div className="top-bar">
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-sm-7 d-none d-sm-block">
                                <ul className="list-inline topbar-text mb-0">
                                    <li className="list-inline-item pe-3 me-0">
                                        <svg className="svg-icon me-2">
                                            <Link to="/"> ssss</Link>
                                        </svg>020-800-456-747
                                    </li>
                                    <li className="list-inline-item px-3 border-start d-none d-lg-inline-block">Free shipping on orders over $300</li>
                                </ul>
                            </div>
                            <div className="col-sm-5 d-flex justify-content-end">

                                <div className="dropdown border-end px-3"><Link className="dropdown-toggle topbar-link" id="langsDropdown" to="#" data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false"><img className="topbar-flag" src="img/flag/gb.svg" alt="" />English</Link>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated" aria-labelledby="langsDropdown"><Link className="dropdown-item text-sm" to="#"><img className="topbar-flag" src="img/flag/de.svg" alt="" />French</Link></div>
                                </div>

                                <div className="dropdown ps-3 ms-0"><Link className="dropdown-toggle topbar-link" id="currencyDropdown" to="#" data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-dollar-sign text-xs align-middle mt-n1 me-2"> </i>USD</Link>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated" aria-labelledby="currencyDropdown"><Link className="dropdown-item text-sm" to="#"> <i className="fas fa-euro-sign text-xs align-middle mt-n1 me-2"> </i>EUR</Link><Link className="dropdown-item text-sm" to="#"><i className="fas fa-pound-sign text-xs align-middle mt-n1 me-2"> </i>GBP</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <NavBar/>
                


                {/*<div className="search-area-wrapper">
                    <div className="search-area d-flex align-items-center justify-content-center">
                        <div className="close-btn">
                            <svg className="svg-icon svg-icon-light w-3rem h-3rem">
                                <Link to="/"> </Link>
                            </svg>
                        </div>
                        <form className="search-area-form" action="#">
                            <div className="mb-4 position-relative">
                                <input className="search-area-input" type="search" name="search" id="search" placeholder="What are you looking for?" />
                                <button className="search-area-button" type="submit">
                                    <svg className="svg-icon">
                                        <Link to="/"> </Link>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>*/}

            </header>
        );
    }

}
export default Header;

