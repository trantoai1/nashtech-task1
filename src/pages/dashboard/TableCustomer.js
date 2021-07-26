import React, { Component } from 'react'

import { del } from '../../api/callAPI';

import UserList from '../../components/user/UserList';
import Message from '../../util/Message';
export default class TableCustomer extends Component {
    constructor(props){
        super (props);
        this.state={
            type:'success',
            isShow : false,
            message:'',
            key:0,
        }
        
    }


    async doDelete(id)
    {
        del(`users/${id}`)
        .then(res=>{
            if(res&&res.status===202)
            this.setState({
                message:`Delete user ${res.data.username} success!`,
                key:id,
                type:'success',
            });
            //console.log(res);
        },
        err=>{
            this.setState({
                message:`${err.response.data.error} ${err.response.data.message}`,
                type:'danger',
            });
        })
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
            <button onClick={()=>this.props.addNewUser()} className="btn btn-primary">Add new</button>
            <hr/>
            <table className="table table-borderless table-hover table-responsive-md">
                                <thead className="bg-light">
                                    <tr>
                                        <th className="py-4 text-uppercase text-sm">#</th>
                                        <th className="py-4 text-uppercase text-sm">Username</th>
                                        <th className="py-4 text-uppercase text-sm">Email</th>
                                        <th className="py-4 text-uppercase text-sm">Address</th>
                                        <th className="py-4 text-uppercase text-sm">Role</th>
                                        <th className="py-4 text-uppercase text-sm">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <UserList  deleteUser={(id)=>this.handleDelete(id)} key={this.state.key}/>
                                </tbody>
                            </table>

            </>
        )
    }
}
