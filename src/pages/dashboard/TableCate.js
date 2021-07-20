import React, { Component } from 'react'
import CategoryList from '../../components/categories/CategoryList'
import { del } from '../../api/callAPI';
import { Fade } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class TableCate extends Component {
    constructor(props){
        super (props);
        this.state={
            isDelete : false,
            message:<></>,
            key:0,
        }
        
    }


    async doDelete(id)
    {
        del(`categories/${id}`)
        .then(res=>{
            if(res!==undefined)
            this.setState({
                message:res.data.cateName,
                key:id,
            });
            console.log(res);
        })
        await this.setState({
            isDelete:!this.setState.isDelete,
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
                isDelete: false
            });
          }, 2000);
    }

    render() {
        return (
            <>
            
            {this.state.isDelete&&<Fade in={true}  >
            <div className="alert alert-success">{this.state.message}</div></Fade>}
            <a onClick={()=>this.props.addNewCate()} className="btn btn-primary">Add new</a>
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
