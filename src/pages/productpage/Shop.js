
import React, { Component } from 'react'
import ProductList from '../../components/products/ProductList'
import LeftBar from './LeftBar'
import Modal from './Modal';
export default class Shop extends Component {
    constructor(props) {
        super(props);
        //console.log('init'); 
        this.state = {
            categoryId: undefined,
            featureIds: [],
            modelId: 0,
            modelComponent: <> </>,
        }
        this.productList = React.createRef();
    }


    async handleFilterByCate(id) {
        await this.setState({
            categoryId: id,
        })
        //console.log('handleFilterByCate:'+this.state.categoryId);
    }
    async handleFilterbyFeature(e, id) {
        let list = [];
        if (e.target.checked)
            list = [...this.state.featureIds, id]
        else
            list = this.state.featureIds.filter(item => item !== id);
        ///console.log(e.target.checked,id);
        await this.setState({
            featureIds: list
        });
        //console.log(this.state.featureIds);
    }
    openModel(id) {
        //const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        this.setState({
            modelId: id,
            modelComponent: <Modal productId={id} key={id} />
        })
        //await sleep(3000);
    }
    render() {
        return (
            <>
                <section className="hero">
                    <div className="container">

                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Apple's product        </li>
                        </ol>

                        <div className="hero-content pb-5 text-center">
                            <h1 className="hero-heading">Apple's product</h1>
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2"><p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row">

                        <div className="products-grid col-xl-9 col-lg-8 order-lg-2">
                            {/*<header className="product-grid-header">
                                <div className="me-3 mb-3">
                                    Showing <strong>1-12 </strong>of <strong>158 </strong>products</div>
                                <div className="me-3 mb-3"><span className="me-2">Show</span><a className="product-grid-header-show active" href="#">12    </a><a className="product-grid-header-show " href="#">24    </a><a className="product-grid-header-show " href="#">All    </a>
                                </div>
                                <div className="mb-3 d-flex align-items-center"><span className="d-inline-block me-2">Sort by</span>
                                    <select className="form-select w-auto border-0">
                                        <option onChange={(e)=>this.handleChange(e)} value="orderby_0">Default</option>
                                        <option onChange={(e)=>this.handleChange(e)} value="orderby_1">Popularity</option>
                                        <option onChange={(e)=>this.handleChange(e)} value="orderby_2">Rating</option>
                                        <option onChange={(e)=>this.handleChange(e)} value="orderby_3">Newest first</option>
                                    </select>
                                </div>
        </header>*/}
                            <div className="masonry-wrapper mx-n3">
                                <div className="row">
                                    <ProductList categoryId={this.state.categoryId} featureIds={this.state.featureIds} key={this.state.featureIds} ref={this.productList} openModel={(id) => this.openModel(id)} />
                                </div>
                            </div>
                            {/*<nav className="d-flex justify-content-center mb-5 mt-3" aria-label="page navigation">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">Prev</span><span className="sr-only">Previous</span></a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1       </a></li>
                                    <li className="page-item"><a className="page-link" href="#">2       </a></li>
                                    <li className="page-item"><a className="page-link" href="#">3       </a></li>
                                    <li className="page-item"><a className="page-link" href="#">4       </a></li>
                                    <li className="page-item"><a className="page-link" href="#">5 </a></li>
                                    <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">Next</span><span className="sr-only">Next     </span></a></li>
                                </ul>
        </nav>*/}
                        </div>
                        {this.state.modelComponent}

                        <LeftBar filterByCate={(id) => this.handleFilterByCate(id)} checkedFeature={(e, id) => this.handleFilterbyFeature(e, id)} />

                    </div>
                </div>


            </>
        )
    }
}
