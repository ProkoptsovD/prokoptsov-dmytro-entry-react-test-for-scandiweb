import React from "react";
import ButtonTextOnly from "../ButtonTextOnly.jsx";
import './RemoveButton.scss';

class RemoveButton extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
                <ButtonTextOnly
                    className={"remove-btn"}
                >
                    -
                </ButtonTextOnly>
        )
    }
}

export default RemoveButton;