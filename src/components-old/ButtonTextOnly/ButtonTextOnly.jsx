import React from "react";
import './ButtonTextOnly.scss';

class ButtonTextOnly extends React.Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className={`button-text-only ${this.props.className}`}
                type="button"
            >
                {this.props.children}
            </button>
        )
    }
}

export default ButtonTextOnly;