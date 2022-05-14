import React from "react";
import ButtonRadio from "../ButtonRadio.jsx";
import './ColorButton.scss';

class ColorButton extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <ButtonRadio
                name={"color"}
                className={"color-btn"}
                classNameInput={"color-btn__input"}
                classNameText={"color-btn__text"}
            />
        )
    }
}

export default ColorButton;