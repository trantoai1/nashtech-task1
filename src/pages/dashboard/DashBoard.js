import React, { Component } from 'react'
import { Link, Route,} from 'react-router-dom';

import AuthService from '../../services/AuthService';
import FormCate from './FormCate';
import FormCustomer from './FormCustomer';
import FormProduct from './FormProduct';
import TableCate from './TableCate';
import TableCustomer from './TableCustomer';
import TableProduct from './TableProduct';


export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            table: <></>,
            cateComponent:<TableCate addNewCate={()=>this.handleAddNewCate()}/>,
            productComponent:<TableProduct addNewProc={()=>this.handleAddNewProduct()}/>,
            customerComponent:<TableCustomer addNewUser={()=>this.handleAddNewUser()}/>,
        }
        //this.query = new URLSearchParams(this.props.location.search);
    }
    componentWillMount() {
        console.log('willmount')
        let user = AuthService.getCurrentUser();
        console.log(user);
        this.setState({
            user: user,
        });
       
    }
    componentDidMount(){
        
    }
    async handleAddNewUser(){
        await this.setState({
            customerComponent:<FormCustomer/>,
        })
        
    }
    async handleAddNewProduct(){
        await this.setState({
            productComponent:<FormProduct/>,
        })
        
    }
    async handleAddNewCate(){
        await this.setState({
            cateComponent:<FormCate/>,
        })
        
    }
    async resetProductComponent(){
        await this.setState({
            productComponent:<TableProduct addNewProc={()=>this.handleAddNewProduct()}/>,
        })
    }
    async resetUserComponent(){
        await this.setState({
            customerComponent:<TableCustomer addNewUser={()=>this.handleAddNewUser()}/>,
        })
    }
    async resetCateComponent(){
        await this.setState({
            cateComponent:<TableCate addNewCate={()=>this.handleAddNewCate()}/>,
        })
    }
    render() {
        
        return (this.state.user&&
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 mb-5">
                            <div className="customer-sidebar card border-0">
                                <div className="customer-profile"><a className="d-inline-block" ><img className="img-fluid rounded-circle customer-image shadow" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-589739-unsplash-avatar.jpg" alt="" /></a>
                                    <h5>{this.state.user.username}</h5>
                                    <p className="text-muted text-sm mb-0">{this.state.user.email}</p>
                                </div>
                                <nav className="list-group customer-nav">
                                    <Link className="list-group-item d-flex justify-content-between align-items-center text-decoration-none" to="/dashboard/categories" onClick={()=>this.resetCateComponent()}><span>
                                        <svg className="svg-icon svg-icon-heavy me-2">

                                        </svg>Manager Category</span>
                                        </Link>
                                    <Link className="list-group-item d-flex justify-content-between align-items-center text-decoration-none" to="/dashboard/customers" onClick={()=>this.resetUserComponent()}><span>
                                        <svg className="svg-icon svg-icon-heavy me-2">

                                        </svg>Manager Customer</span></Link>
                                    <Link className="list-group-item d-flex justify-content-between align-items-center text-decoration-none" to="/dashboard/products" onClick={()=>this.resetProductComponent()}><span>
                                        <svg className="svg-icon svg-icon-heavy me-2">

                                        </svg>Manager Product</span></Link>
                                    
                                </nav>
                            </div>
                        </div>


                        <div className="col-lg-8 col-xl-9">
                        
                            <Route exact path="/dashboard/categories">
                            {this.state.cateComponent}
                            </Route>
                            <Route exact path="/dashboard/categories/:id" >
                                <FormCate/>
                            </Route>
                            
                            <Route exact path="/dashboard/products">
                            {this.state.productComponent}
                            </Route>
                            <Route exact path="/dashboard/products/:id" >
                                <FormProduct/>
                            </Route>
                            <Route exact path="/dashboard/customers">
                            {this.state.customerComponent}
                            </Route>
                            <Route exact path="/dashboard/customers/:id">
                            <FormCustomer/>
                            </Route>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
