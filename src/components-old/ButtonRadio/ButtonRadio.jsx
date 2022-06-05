import React from "react";
import './ButtonRadio.scss';

class ButtonRadio extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <label className="button-radio">
                <input
                    defaultChecked={this.props.isChecked}
                    value={this.props.value || ''}
                    name={this.props.name || "radio"}
                    className="button-radio__input"
                    type="radio"
                    />
                <span
                    style={{'--color-picker-swatch-color': this.props.backgroundColor}}
                    className="button-radio__text">
                    {this.props.text || ''}
                </span>
            </label>
        )
    }
}

export default ButtonRadio;