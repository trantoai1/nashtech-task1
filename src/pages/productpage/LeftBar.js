import React, { Component } from 'react'
import CategoryList from '../../components/categories/CategoryList'
import FeatureTypeList from '../../components/featureTypes/FeatureTypeList'
export default class LeftBar extends Component {
    render() {
        return (
            <>
               
               <div className="sidebar col-xl-3 col-lg-4 order-lg-1">
                            <div className="sidebar-block px-3 px-lg-0 me-lg-4"><a className="d-lg-none block-toggler" data-bs-toggle="collapse" href="#categoriesMenu" aria-expanded="false" aria-controls="categoriesMenu">Product Categories</a>
                                <div className="expand-lg collapse" id="categoriesMenu">
                                    <div className="nav nav-pills flex-column mt-4 mt-lg-0" role="menu">
                                        <CategoryList filterByCate={(id)=>this.props.filterByCate(id)}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="sidebar-block px-3 px-lg-0 me-lg-4"><a className="d-lg-none block-toggler" data-bs-toggle="collapse" href="#brandFilterMenu" aria-expanded="true" aria-controls="brandFilterMenu">Filter by Feature</a>
                            <FeatureTypeList checkedFeature={(e,id)=>this.props.checkedFeature(e,id)}/>
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
                            
                        </div>
        
            </>
        )
    }
}
