import React from "react";
import './ButtonTextOnly.scss';

class ButtonTextOnly extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <button
                className={`button-text-only ${this.props.className}`}
                type="button"
            >
                {this.props.children}
            </button>
        )
    }
}

export default ButtonTextOnly;