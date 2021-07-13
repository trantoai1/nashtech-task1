import React, { Component } from 'react'

export default class Feature extends Component {
    render() {
        return (
            <>
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" key={this.props.id} aria-label="Checkbox for following text input" />
                    </div>
                </div>
                <label className="form-control">{this.props.spec} {this.props.unit}</label>
            </>
        )
    }
}
