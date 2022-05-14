import React from "react";
import './ButtonRadio.scss';

class ButtonRadio extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <label className="button-radio">
                <input
                    value={this.props.text || ''}
                    name={this.props.name || "radio"}
                    className="button-radio__input"
                    type="radio" />
                <span className="button-radio__text">
                    {this.props.text || ''}
                </span>
            </label>
        )
    }
}

export default ButtonRadio;