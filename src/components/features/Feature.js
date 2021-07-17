import React, { Component } from 'react'

export default class Feature extends Component {
    render() {
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
