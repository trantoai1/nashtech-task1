import React, { Component } from 'react';

import {


    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header header-absolute">

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


                <nav className="navbar navbar-expand-lg bg-transparent navbar-sticky navbar-airy navbar-dark bg-hover-white bg-fixed-white navbar-hover-light navbar-fixed-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><svg className="navbar-brand-svg" viewBox="0 0 65 16" width="85" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="navbar-brand-svg-text" d="M5.72266 18.1562C4.88281 18.1562 4.08529 18.0033 3.33008 17.6973C2.58138 17.3913 1.94661 16.9355 1.42578 16.3301C0.911458 15.7181 0.582682 14.9759 0.439453 14.1035L2.90039 13.4785C2.98503 14.2988 3.28776 14.9173 3.80859 15.334C4.33594 15.7507 4.98698 15.959 5.76172 15.959C6.23698 15.959 6.64714 15.8841 6.99219 15.7344C7.33724 15.5781 7.59766 15.3665 7.77344 15.0996C7.94922 14.8327 8.03711 14.5332 8.03711 14.2012C8.03711 13.804 7.91341 13.4655 7.66602 13.1855C7.42513 12.9056 7.1224 12.6745 6.75781 12.4922C6.39323 12.3099 5.89193 12.0918 5.25391 11.8379C4.42057 11.5059 3.74674 11.1999 3.23242 10.9199C2.7181 10.6335 2.27539 10.2363 1.9043 9.72852C1.53971 9.2207 1.35742 8.57943 1.35742 7.80469C1.35742 7.01693 1.54948 6.33659 1.93359 5.76367C2.32422 5.18424 2.84505 4.74479 3.49609 4.44531C4.15365 4.14583 4.8763 3.99609 5.66406 3.99609C6.54948 3.99609 7.35677 4.19792 8.08594 4.60156C8.8151 4.9987 9.40755 5.60417 9.86328 6.41797L7.80273 7.67773C7.56185 7.20898 7.24609 6.84766 6.85547 6.59375C6.46484 6.33333 6.03841 6.20312 5.57617 6.20312C5.25065 6.20312 4.95443 6.26497 4.6875 6.38867C4.42708 6.51237 4.21875 6.68815 4.0625 6.91602C3.91276 7.13737 3.83789 7.39128 3.83789 7.67773C3.83789 8.0293 3.95182 8.32878 4.17969 8.57617C4.40755 8.82357 4.69401 9.0319 5.03906 9.20117C5.39062 9.37044 5.86914 9.57227 6.47461 9.80664C7.33398 10.1387 8.0306 10.4512 8.56445 10.7441C9.09831 11.0371 9.55729 11.4473 9.94141 11.9746C10.3255 12.502 10.5176 13.1693 10.5176 13.9766C10.5176 14.8229 10.3027 15.5618 9.87305 16.1934C9.44987 16.8249 8.8737 17.3099 8.14453 17.6484C7.41536 17.987 6.60807 18.1562 5.72266 18.1562ZM16.8906 4.20117H26.0703V6.47656H19.3711V9.96289H25.6113V12.2383H19.3711V15.6562H26.0703V18H16.8906V4.20117ZM33.0586 4.20117H35.5391V15.6562H41.4375V18H33.0586V4.20117ZM47.4492 4.20117H49.9297V15.6562H55.8281V18H47.4492V4.20117Z" transform="translate(0 -3)" fill="#212529" />
                            <path className="text-primary" d="M62.0254 15.4219H64.418V18H62.0254V15.4219Z" transform="translate(0 -3)" fill="#9A6EE2" />
                        </svg></Link>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>

                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle active" id="homeDropdownMenuLink" to="index.html" data-bs-target="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Home        </Link>
                                    <div className="dropdown-menu dropdown-menu-animated" aria-labelledby="homeDropdownMenuLink"><Link className="dropdown-item" to="index5.html">Slider + broken grid <span className="badge badge-info-light ms-1">New</span>    </Link><Link className="dropdown-item" to="index.html">Fullscreen home + Lookbook</Link><Link className="dropdown-item" to="index2.html">Split-screen home</Link><Link className="dropdown-item" to="index3.html">Classic home</Link><Link className="dropdown-item" to="index4.html">Parallax sections <span className="badge badge-info-light ms-1">New</span></Link></div>
                                </li>
                                <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle " id="categoryDropdownMenuLink" to="category.html" data-bs-target="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</Link>
                                    <div className="dropdown-menu dropdown-menu-animated" aria-labelledby="categoryDropdownMenuLink"><Link className="dropdown-item" to="category.html">Category - left sidebar   </Link><Link className="dropdown-item" to="category-right.html">Category - right sidebar   </Link><Link className="dropdown-item" to="category-no-sidebar.html">Category - no sidebar   </Link><Link className="dropdown-item" to="category-full.html">Category - full width   </Link><Link className="dropdown-item" to="category-masonry.html">Category - masonry items   </Link><Link className="dropdown-item" to="category-banner.html">Category - w/ banner   </Link><Link className="dropdown-item" to="detail.html">Product detail   </Link><Link className="dropdown-item" to="detail-2.html">Product detail - v.2   </Link><Link className="dropdown-item" to="detail-3.html">Product detail - v.3 <span className="badge badge-warning ms-1">New</span>   </Link>
                                    </div>
                                </li>

                                <li className="nav-item dropdown position-static"><Link className="nav-link dropdown-toggle " to="#" data-bs-toggle="dropdown">Template</Link>
                                    <div className="dropdown-menu dropdown-menu-animated megamenu py-lg-0">
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <div className="row p-3 pe-lg-0 ps-lg-5 pt-lg-5">
                                                    <div className="col-lg-3">

                                                        <h6 className="text-uppercase">Homepage</h6>
                                                        <ul className="megamenu-list list-unstyled">
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="index.html">Fullscreen home + Lookbook   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="index2.html">Split-screen home   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="index3.html">Classic home   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="index4.html">Parallax sections  <span className="badge bg-warning ms-1">New</span>   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="index5.html">Slider + Broken grid  <span className="badge bg-warning ms-1">New</span>   </Link></li>
                                                        </ul>

                                                        <h6 className="text-uppercase">Shop</h6>
                                                        <ul className="megamenu-list list-unstyled">
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="category.html">Category - left sidebar   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="category-right.html">Category - right sidebar   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="category-no-sidebar.html">Category - no sidebar   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="category-full.html">Category - full width   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="category-masonry.html">Category - masonry items   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="category-banner.html">Category - w/ banner   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="detail.html">Product detail   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="detail-2.html">Product detail - v.2   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="detail-3.html">Product detail - v.3 <span className="badge bg-warning ms-1">New</span>   </Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-3">

                                                        <h6 className="text-uppercase">Order process</h6>
                                                        <ul className="megamenu-list list-unstyled">
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="cart.html">Shopping cart   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="cart-2.html">Shopping cart - v. 2 <span className="badge bg-warning ms-1">New</span>   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="checkout1.html">Checkout 1 - Address   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="checkout2.html">Checkout 2 - Delivery   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="checkout3.html">Checkout 3 - Payment   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="checkout4.html">Checkout 4 - Review     </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="checkout5.html">Checkout 5 - Confirmation   </Link></li>
                                                        </ul>

                                                        <h6 className="text-uppercase">Blog</h6>
                                                        <ul className="megamenu-list list-unstyled">
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="blog.html">Blog   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="post.html">Post   </Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-3">

                                                        <h6 className="text-uppercase">Pages</h6>
                                                        <ul className="megamenu-list list-unstyled">
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="about.html">About us <span className="badge bg-warning ms-1">New</span>   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="about-2.html">About us v.2 <span className="badge bg-warning ms-1">New</span>   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="contact.html">Contact   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="contact-2.html">Contact v.2   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="text.html">Text page   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="faq.html">F.A.Q.s   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="coming-soon.html">Coming soon   </Link></li>
                                                        </ul>

                                                        <h6 className="text-uppercase">Customer</h6>
                                                        <ul className="megamenu-list list-unstyled">
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="customer-login.html">Login/sign up   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="customer-orders.html">Orders   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="customer-order.html">Order detail   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="customer-addresses.html">Addresses   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="customer-account.html">Profile   </Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-3">

                                                        <h6 className="text-uppercase">Documentation</h6>
                                                        <ul className="megamenu-list list-unstyled">
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="docs/docs-introduction.html">Introduction   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="docs/docs-directory-structure.html">Directory structure   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="docs/docs-gulp.html">Gulp   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="docs/docs-customizing-css.html">Customizing CSS   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="docs/docs-credits.html">Credits   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="docs/docs-changelog.html">Changelog   </Link></li>
                                                        </ul>

                                                        <h6 className="text-uppercase">Components</h6>
                                                        <ul className="megamenu-list list-unstyled">
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="docs/components-bootstrap.html">Bootstrap   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="docs/components-sell.html">Theme   </Link></li>
                                                            <li className="megamenu-list-item"><Link className="megamenu-list-link" to="component-variants/header.html">Header variants <span className="badge bg-warning ms-1">New</span>   </Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row megamenu-services d-none d-lg-flex">
                                                    <div className="col-xl-3 col-lg-6 d-flex">
                                                        <div className="megamenu-services-item">
                                                            <svg className="svg-icon megamenu-services-icon">
                                                                <Link to="/"> </Link>
                                                            </svg>
                                                            <div>
                                                                <h6 className="text-uppercase">Free shipping &amp; return</h6>
                                                                <p className="mb-0 text-muted text-sm">Free Shipping over $300</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-6 d-flex">
                                                        <div className="megamenu-services-item">
                                                            <svg className="svg-icon megamenu-services-icon">
                                                                <Link to="/"> </Link>
                                                            </svg>
                                                            <div>
                                                                <h6 className="text-uppercase">Money back guarantee</h6>
                                                                <p className="mb-0 text-muted text-sm">30 Days Money Back</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-6 d-flex">
                                                        <div className="megamenu-services-item">
                                                            <svg className="svg-icon megamenu-services-icon">
                                                                <Link to="/"> </Link>
                                                            </svg>
                                                            <div>
                                                                <h6 className="text-uppercase">020-800-456-747</h6>
                                                                <p className="mb-0 text-muted text-sm">24/7 Available Support</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-lg-6 d-flex">
                                                        <div className="megamenu-services-item">
                                                            <svg className="svg-icon megamenu-services-icon">
                                                                <Link to="/"> </Link>
                                                            </svg>
                                                            <div>
                                                                <h6 className="text-uppercase">Secure Payment</h6>
                                                                <p className="mb-0 text-muted text-sm">Secure Payment</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 d-none d-lg-block position-relative"><img className="bg-image" src="img/megamenu.jpg" alt="" /></div>
                                        </div>
                                    </div>
                                </li>


                                <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                                    <ul className="dropdown-menu dropdown-menu-animated" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                        <li className="dropdown-submenu"><Link className="dropdown-item dropdown-toggle" id="navbarDropdownMenuLink2" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown link</Link>
                                            <ul className="dropdown-menu dropdown-menu-animated" aria-labelledby="navbarDropdownMenuLink2">
                                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                <li className="dropdown-submenu"><Link className="dropdown-item dropdown-toggle" id="navbarDropdownMenuLink3" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Another action</Link>
                                                    <ul className="dropdown-menu dropdown-menu-animated" aria-labelledby="navbarDropdownMenuLink3">
                                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><Link className="dropdown-item dropdown-toggle" id="navbarDropdownMenuLink4" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Another action</Link>
                                                    <ul className="dropdown-menu dropdown-menu-animated" aria-labelledby="navbarDropdownMenuLink4">
                                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu"><Link className="dropdown-item dropdown-toggle" id="navbarDropdownMenuLink5" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown link</Link>
                                            <ul className="dropdown-menu dropdown-menu-animated" aria-labelledby="navbarDropdownMenuLink5">
                                                <li><Link className="dropdown-item" to="#">Action                    </Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item"><Link className="nav-link" to="contact.html">Contact</Link>
                                </li>
                                <li className="nav-item dropdown"><Link className="dropdown-toggle nav-link " id="docsDropdownMenuLink" to="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Docs</Link>
                                    <div className="dropdown-menu dropdown-menu-animated dropdown-menu-end" aria-labelledby="docsDropdownMenuLink">
                                        <h6 className="dropdown-header fw-normal">Documentation</h6><Link className="dropdown-item" to="docs/docs-introduction.html">Introduction </Link><Link className="dropdown-item" to="docs/docs-directory-structure.html">Directory structure </Link><Link className="dropdown-item" to="docs/docs-gulp.html">Gulp </Link><Link className="dropdown-item" to="docs/docs-customizing-css.html">Customizing CSS </Link><Link className="dropdown-item" to="docs/docs-credits.html">Credits </Link><Link className="dropdown-item" to="docs/docs-changelog.html">Changelog </Link>
                                        <div className="dropdown-divider"></div>
                                        <h6 className="dropdown-header fw-normal">Components</h6><Link className="dropdown-item" to="docs/components-bootstrap.html">Bootstrap </Link><Link className="dropdown-item" to="docs/components-sell.html">Theme </Link><Link className="dropdown-item" to="component-variants/header.html">Header variants <span className="badge bg-warning ms-1">New</span> </Link>
                                    </div>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center justify-content-between justify-content-lg-end mt-1 mb-2 my-lg-0">

                                <div className="nav-item navbar-icon-link" data-bs-toggle="search">
                                    <svg className="svg-icon">
                                        <Link to="/"> </Link>
                                    </svg>
                                </div>

                                <div className="nav-item"><Link className="navbar-icon-link" to="customer-login.html"></Link>
                                    <svg className="svg-icon">
                                        <Link to="/"> </Link>
                                    </svg><span className="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none">Log in    </span></div>

                                <div className="nav-item dropdown"><Link className="navbar-icon-link d-lg-none" to="cart.html"></Link>
                                    <svg className="svg-icon">
                                        <Link to="/"> </Link>
                                    </svg><span className="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none">View cart</span>
                                    <div className="d-none d-lg-block"><Link className="navbar-icon-link" id="cartdetails" to="cart.html" data-bs-target="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></Link>
                                        <svg className="svg-icon">
                                            <Link to="/"> </Link>
                                        </svg>
                                        <div className="navbar-icon-link-badge">3                         </div>
                                        <div className="dropdown-menu dropdown-menu-animated dropdown-menu-end p-4" aria-labelledby="cartdetails">
                                            <div className="navbar-cart-product-wrapper">

                                                <div className="navbar-cart-product">
                                                    <div className="d-flex align-items-center"><Link to="detail.html"><img className="img-fluid navbar-cart-product-image" src="img/product/product-square-ian-dooley-347968-unsplash.jpg" alt="" /></Link>
                                                        <div className="w-100"><Link className="navbar-cart-product-close" to="#"><i className="fa fa-times">                                                   </i></Link>
                                                            <div className="ps-3"> <Link className="navbar-cart-product-link" to="detail.html">Skull Tee</Link><small className="d-block text-muted">Quantity: 1 </small><strong className="d-block text-sm">$75.00 </strong></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="navbar-cart-product">
                                                    <div className="d-flex align-items-center"><Link to="detail.html"><img className="img-fluid navbar-cart-product-image" src="img/product/product-square-kyle-loftus-596319-unsplash.jpg" alt="" /></Link>
                                                        <div className="w-100"><Link className="navbar-cart-product-close" to="#"><i className="fa fa-times">                                                   </i></Link>
                                                            <div className="ps-3"> <Link className="navbar-cart-product-link" to="detail.html">Transparent Blouse</Link><small className="d-block text-muted">Quantity: 1 </small><strong className="d-block text-sm">$75.00 </strong></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="navbar-cart-product">
                                                    <div className="d-flex align-items-center"><Link to="detail.html"><img className="img-fluid navbar-cart-product-image" src="img/product/product-square-serrah-galos-494312-unsplash.jpg" alt="" /></Link>
                                                        <div className="w-100"><Link className="navbar-cart-product-close" to="#"><i className="fa fa-times">                                                   </i></Link>
                                                            <div className="ps-3"> <Link className="navbar-cart-product-link" to="detail.html">White Tee</Link><small className="d-block text-muted">Quantity: 1 </small><strong className="d-block text-sm">$75.00 </strong></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="navbar-cart-total"><span className="text-uppercase text-muted">Total</span><strong className="text-uppercase">$75.00</strong></div>

                                            <div className="d-flex justify-content-between"><Link className="btn btn-link text-dark me-3" to="cart.html">View Cart <i className="fa-arrow-right fa"></i></Link><Link className="btn btn-outline-dark" to="checkout1.html">Checkout</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>


                <div className="search-area-wrapper">
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
                </div>

            </header>
        );
    }

}
export default Header;

