import React, { Component } from 'react'
import FeatureTypeList from '../FeatureType/FeatureTypeList'
export default class LeftBar extends Component {
    render() {
        return (
            <>
               
               <div className="sidebar col-xl-3 col-lg-4 order-lg-1">
                            <div className="sidebar-block px-3 px-lg-0 me-lg-4"><a className="d-lg-none block-toggler" data-bs-toggle="collapse" href="#categoriesMenu" aria-expanded="false" aria-controls="categoriesMenu">Product Categories</a>
                                <div className="expand-lg collapse" id="categoriesMenu">
                                    <div className="nav nav-pills flex-column mt-4 mt-lg-0" role="menu">
                                        <div className="sidebar-menu-item mb-2 active" data-bs-toggle="collapse" data-bs-target="#subcategories_0" aria-expanded="true" aria-controls="subcategories_0" role="menuitem"><a className="nav-link active" href="#!"><span>Jackets</span><span className="sidebar-badge ms-2">123</span></a></div>
                                        <div className="collapse show" id="subcategories_0">
                                            <div className="nav nav-pills flex-column ms-3"><a className="nav-link mb-2" href="#!">Lorem ipsum</a><a className="nav-link mb-2" href="#!">Dolor</a><a className="nav-link mb-2" href="#!">Sit amet</a><a className="nav-link mb-2" href="#!">Donec vitae</a>
                                            </div>
                                        </div>
                                        <div className="sidebar-menu-item mb-2" data-bs-toggle="collapse" data-bs-target="#subcategories_1" aria-expanded="false" aria-controls="subcategories_1" role="menuitem"><a className="nav-link " href="#!"><span>Jeans &amp; chinos</span><span className="sidebar-badge ms-2">55</span></a></div>
                                        <div className="collapse" id="subcategories_1">
                                            <div className="nav nav-pills flex-column ms-3"><a className="nav-link mb-2" href="#!">Lorem ipsum</a><a className="nav-link mb-2" href="#!">Dolor</a><a className="nav-link mb-2" href="#!">Sit amet</a><a className="nav-link mb-2" href="#!">Donec vitae</a>
                                            </div>
                                        </div>
                                        <div className="sidebar-menu-item mb-2" data-bs-toggle="collapse" data-bs-target="#subcategories_2" aria-expanded="false" aria-controls="subcategories_2" role="menuitem"><a className="nav-link " href="#!"><span>Accessories</span><span className="sidebar-badge ms-2">80</span></a></div>
                                        <div className="collapse" id="subcategories_2">
                                            <div className="nav nav-pills flex-column ms-3"><a className="nav-link mb-2" href="#!">Sit amet</a><a className="nav-link mb-2" href="#!">Donec vitae</a><a className="nav-link mb-2" href="#!">Lorem ipsum</a><a className="nav-link mb-2" href="#!">Dolor</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-block px-3 px-lg-0 me-lg-4"><a className="d-lg-none block-toggler" data-bs-toggle="collapse" href="#priceFilterMenu" aria-expanded="false" aria-controls="priceFilterMenu">Filter by price</a>
                                <div className="expand-lg collapse" id="priceFilterMenu">
                                    <h6 className="sidebar-heading d-none d-lg-block">Price  </h6>
                                    <div className="mt-4 mt-lg-0" id="slider-snap"> </div>
                                    <div className="nouislider-values">
                                        <div className="min">From $<span id="slider-snap-value-lower"></span></div>
                                        <div className="max">To $<span id="slider-snap-value-upper"></span></div>
                                        <input className="slider-snap-input" type="hidden" name="pricefrom" id="slider-snap-input-lower" onChange={(e)=>this.handleChange(e)} value="40" />
                                        <input className="slider-snap-input" type="hidden" name="priceto" id="slider-snap-input-upper" onChange={(e)=>this.handleChange(e)} value="110" />
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-block px-3 px-lg-0 me-lg-4"><a className="d-lg-none block-toggler" data-bs-toggle="collapse" href="#brandFilterMenu" aria-expanded="true" aria-controls="brandFilterMenu">Filter by Feature</a>
                            <FeatureTypeList/>
                            </div>
                            <div className="sidebar-block px-3 px-lg-0 me-lg-4"> <a className="d-lg-none block-toggler" data-bs-toggle="collapse" href="#sizeFilterMenu" aria-expanded="false" aria-controls="sizeFilterMenu">Filter by size</a>

                                <div className="expand-lg collapse" id="sizeFilterMenu">
                                    <h6 className="sidebar-heading d-none d-lg-block">Size </h6>
                                    <form className="mt-4 mt-lg-0" action="#">
                                        <div className="mb-1">
                                            <div className="form-check">
                                                <input className="form-check-input" id="size0" type="radio" name="size" defaultChecked />
                                                <label className="form-check-label" htmlFor="size0">Small</label>
                                            </div>
                                        </div>
                                        <div className="mb-1">
                                            <div className="form-check">
                                                <input className="form-check-input" id="size1" type="radio" name="size" />
                                                <label className="form-check-label" htmlFor="size1">Medium</label>
                                            </div>
                                        </div>
                                        <div className="mb-1">
                                            <div className="form-check">
                                                <input className="form-check-input" id="size2" type="radio" name="size" />
                                                <label className="form-check-label" htmlFor="size2">Large</label>
                                            </div>
                                        </div>
                                        <div className="mb-1">
                                            <div className="form-check">
                                                <input className="form-check-input" id="size3" type="radio" name="size" />
                                                <label className="form-check-label" htmlFor="size3">X-Large</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="sidebar-block px-3 px-lg-0 me-lg-4"><a className="d-lg-none block-toggler" data-bs-toggle="collapse" href="#colourFilterMenu" aria-expanded="false" aria-controls="colourFilterMenu">Filter by colour</a>

                                <div className="expand-lg collapse" id="colourFilterMenu">
                                    <h6 className="sidebar-heading d-none d-lg-block">Colour </h6>
                                    <div className="mt-4 mt-lg-0">
                                        <ul className="list-inline mb-0 colours-wrapper">
                                            <li className="list-inline-item">
                                                <label className="btn-colour" htmlFor="colour_sidebar_Blue" style={{ BackgroundColor: " #668cb9" }} data-allow-multiple> </label>
                                                <input className="input-invisible" type="checkbox" name="colour" onChange={(e)=>this.handleChange(e)} value="value_sidebar_Blue" id="colour_sidebar_Blue" />
                                            </li>
                                            <li className="list-inline-item">
                                                <label className="btn-colour" htmlFor="colour_sidebar_White" style={{ BackgroundColor: " #fff" }} data-allow-multiple> </label>
                                                <input className="input-invisible" type="checkbox" name="colour" onChange={(e)=>this.handleChange(e)} value="value_sidebar_White" id="colour_sidebar_White" />
                                            </li>
                                            <li className="list-inline-item">
                                                <label className="btn-colour" htmlFor="colour_sidebar_Violet" style={{ BackgroundColor: " #8b6ea4" }} data-allow-multiple> </label>
                                                <input className="input-invisible" type="checkbox" name="colour" onChange={(e)=>this.handleChange(e)} value="value_sidebar_Violet" id="colour_sidebar_Violet" />
                                            </li>
                                            <li className="list-inline-item">
                                                <label className="btn-colour" htmlFor="colour_sidebar_Red" style={{ BackgroundColor: " #dd6265" }} data-allow-multiple> </label>
                                                <input className="input-invisible" type="checkbox" name="colour" onChange={(e)=>this.handleChange(e)} value="value_sidebar_Red" id="colour_sidebar_Red" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
        
            </>
        )
    }
}
