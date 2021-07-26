import React, { Component } from 'react'
import { get, post, put } from '../../../api/callAPI';
import AuthService from '../../../services/AuthService'
import Message from '../../../util/Message';
export default class FormReview extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            id:-1,
            email:'',
            comment:'',
            point:5,
            isReview:false,
            type:'success',
            isShow : false,
            message:'',
        }
    }
    componentDidMount()
    {
        const user = AuthService.getCurrentUser();
        if(!user) return;
        get(`rates/${this.props.productId}-${user.id}`)
        .then(res=>{
            if(res&&res.status===200)
            {
                this.setState({
                    isReview:true,
                    point:res.data.point,

                })
            }
        });
        this.setState({
            name:user.fullName,
            id:user.id,
            email:user.email,
        })
    }
    onChanePoint(e)
    {
        this.setState({
            point:e.target.value,
        })
    }
    onChangeComment(e)
    {
        this.setState({
            comment:e.target.value,
        })
    }
    onChangeName(e)
    {
        this.setState({
            name:this.state.name,
        })
    }
    onChangeEmail(e)
    {
        this.setState({
            email:this.state.email,
        })
    }
    async handlePostReview(e){
        e.preventDefault();
        if(this.state.isReview)
        {
            put(`rates/${this.props.productId}-${this.state.id}`,{
                "point":Number(this.state.point),
                "comment":this.state.comment,
                //"productId":this.props.productId,
                //"userId":this.state.id
            })
            .then(res=>{
                if(res&&res.status===202)
                {
                    this.setState({
                        message: `Update review success!`,
                        type:'success',
                    });
                }
            });
        }
        else{
            post('rates',{
                "point":Number(this.state.point),
                "comment":this.state.comment,
                "productId":this.props.productId,
                "userId":this.state.id
            })
            .then(res=>{
                if(res&&res.status===201)
                {
                    this.setState({
                        message: `Vote success!`,
                        type:'success',
                    });
                }
            })
        }
        await this.setState({
            isShow: !this.setState.isShow,
        })
        
    }
    render() {
        const user = AuthService.getCurrentUser();
        return (

            <>
            {user&&user.roles.includes('ROLE_USER')&&<div className="py-5 px-3">
                                            <h5 className="text-uppercase mb-4">Leave a review</h5>
                                            <form className="form" id="contact-form" method="post" onSubmit={(e)=>this.handlePostReview(e)}>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-4">
                                                            <label className="form-label" htmlFor="name">Your name *</label>
                                                            <input className="form-control" type="text" name="name" id="name" placeholder="Enter your name" value={this.state.name} onChange={(e)=>this.onChangeName(e)} readOnly={true} required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-4" onChange={(e)=>this.onChanePoint(e)} value={this.state.point}>
                                                            <label className="form-label" htmlFor="rating">Your rating *</label>
                                                            <select className="custom-select focus-shadow-0" name="rating" id="rating">
                                                                <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                                                                <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                                                                <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                                                                <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                                                                <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label" htmlFor="email">Your email *</label>
                                                    <input className="form-control" type="email" name="email" id="email" value={this.state.email} onChange={(e)=>this.onChangeEmail(e)} readOnly={true} placeholder="Enter your  email" required="required" />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label" htmlFor="review">Review text *</label>
                                                    <textarea className="form-control" rows="4" name="review"  value={this.state.comment} onChange={(e)=>this.onChangeComment(e)}  id="review" placeholder="Enter your review" required="required"></textarea>
                                                </div>
                                                <button className="btn btn-outline-dark" type="submit">Post review</button>
                                            </form>
                                            <Message isShow={this.state.isShow} type={this.state.type} message={this.state.message} key={this.state.message}/>
                                        </div>}
                                        </>
        )
    }
}
