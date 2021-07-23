import React, { Component } from 'react'

import get from '../../api/callAPI';
import User from './User';
export default class UserList extends Component {
    constructor(props) {
        super(props);
        //console.log('init'); 
        this.state = {
            users: [],
            
        }
        //console.log(this.state);
    }
    componentDidMount(){
        get('users')
        .then(res => {
            //console.log(res)
            if(res!==undefined)
            //console.log(res)
           if(res.status===200)
            this.setState({
                users: res.data
            });
        });
        
    }

    render() {
        var listUsers = this.state.users
        //console.log('render');
        //console.log(this.state);
        
        return (
            
            listUsers.map((user,index)=>{
                //console.log(food.name);
                return (
                    <User key = {index} 
                    id = {user.id}
                    username = {user.username}
                    email = {user.email}  
                    role = {user.role}
                    firstName = {user.firstName}
                    lastName = {user.lastName}
                    address = {user.address}
                    deleteUser={(id)=>this.props.deleteUser(id)}  
                    />
                )
                 
            })
        );
    }
}
