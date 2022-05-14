import React from "react";
import ButtonTextOnly from "../ButtonTextOnly.jsx";
import './AddButton.scss';

class AddButton extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
                <ButtonTextOnly
                    className={"add-btn"}
                >
                    <span>✖</span>
                </ButtonTextOnly>
        )
    }
}

export default AddButton;