import React, { Component } from 'react'

export default class Feature extends Component {
    render() {
        if(this.props.isRadio)
        return(<>
        <div className="mb-4 col-md-3 d-flex align-items-center">
            {this.props.currentfeatures.includes(this.props.id)?
                <input type="radio" name={this.props.group} value={this.props.id} defaultChecked id={this.props.id} />
                :<input type="radio" name={this.props.group} value={this.props.id} id={this.props.id} />
            }
                                    {/*onChange={(e)=>this.props.checkedFeature(e,this.props.id)} */}
                                    <label className="ms-3" htmlFor={this.props.id}><strong className="d-block text-uppercase mb-2"> {this.props.spec} <small>{this.props.unit}</small> </strong>{/*<span className="text-muted text-sm">Get it right on next day - fastest option possible.</span>*/}</label>
                                </div>
        
        
        </>)
        return (
            <>

                <div className="mb-1">
                    <div className="form-check" key={this.props.id}>
                        <input className="form-check-input" id={this.props.id} onChange={(e)=>this.props.checkedFeature(e,this.props.id)} type="checkbox" name="clothes-brand" />
                        <label className="form-check-label" htmlFor={this.props.id}>{this.props.spec} <small>{this.props.unit}</small></label>
                    </div>
                </div>
            </>
        )
    }
}
