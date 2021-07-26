import React, { Component } from 'react'
import CategoryList from '../../components/categories/CategoryList'
import { del } from '../../api/callAPI';

import Message from '../../util/Message';
export default class TableCate extends Component {
    constructor(props){
        super (props);
        this.state={
            
            key:0,
            type:'success',
            isShow : false,
            message:'',
        }
        
    }


    async doDelete(id)
    {
        del(`categories/${id}`)
        .then(res=>{
            if(res&&res.status===202)
            this.setState({
                message:`Delete category ${res.data.cateName} success`,
                type:'success',
                key:id,
            });
            console.log(res);
        },
        err=>{
            this.setState({
                message:`${err.response.data.error} ${err.response.data.message}`,
                type:'danger',
            });
        }
        );
        await this.setState({
            isShow:!this.setState.isShow,
        })
    }
    componentDidMount(){
        console.log(window.location.search);
    }
    handleDelete(id)
    {
        if( window.confirm('Sure want to delete?')) {
        console.log(id);
        this.doDelete(id);
        }
        setTimeout(() => {
            this.setState({
                isShow: false
            });
          }, 2000);
    }

    render() {
        return (
            <>
           <Message isShow={this.state.isShow} type={this.state.type} message={this.state.message} key={this.state.message}/>
           
            <button onClick={()=>this.props.addNewCate()} className="btn btn-primary">Add new</button>
            <hr/>
            <table className="table table-borderless table-hover table-responsive-md">
                                <thead className="bg-light">
                                    <tr>
                                        <th className="py-4 text-uppercase text-sm">Category #</th>
                                        <th className="py-4 text-uppercase text-sm">Name</th>
                                        <th className="py-4 text-uppercase text-sm">Unit</th>
                                        <th className="py-4 text-uppercase text-sm">Product</th>
                                        <th className="py-4 text-uppercase text-sm">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <CategoryList isTable={true} deleteCate={(id)=>this.handleDelete(id)} key={this.state.key}/>
                                </tbody>
                            </table>

            </>
        )
    }
}
