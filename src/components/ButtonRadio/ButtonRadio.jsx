import React from "react";
import './ButtonRadio.scss';

class ButtonRadio extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <label className={`button-radio ${this.props.className}`}>
                <input
                    value={this.props.text || ''}
                    name={this.props.name || "parent"}
                    className={`button-radio__input ${this.props.classNameInput}`}
                    type="radio" />
                <span className={`button-radio__text ${this.props.classNameText}`}>
                    {this.props.text || ''}
                </span>
            </label>
        )
    }
}

export default ButtonRadio;