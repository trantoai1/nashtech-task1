import React, { Component } from 'react'
import axios from 'axios';

import RecommendItem from './RecommendItem';
export default class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recommenders:[]
        }
    }
    componentDidMount()
    {
        axios.get(`${process.env.REACT_APP_API_RECOMMEND}`,{params:{productName:this.props.productName}})
        .then(res=>{
            if(res&&res.status===200)
            {
                this.setState({
                    recommenders:res.data
                })
                //console.log(res.data);
            }
            //console.log(res.data);
        })
    }
    render() {
        var list = this.state.recommenders;
        return (
            <section className="my-5">
                    <div className="container">
                        <header className="text-center">
                            <h6 className="text-uppercase mb-5">You might also like</h6>
                        </header>
                        <div className="row">
                            {list&&list.map((recommender,index)=>(
                            <RecommendItem recommender={recommender} key={index}/>


                            ))}
                            

                        </div>
                    </div>
                    
        </section>
        )
    }
}
