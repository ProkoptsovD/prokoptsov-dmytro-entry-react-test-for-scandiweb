import React from "react";
import ButtonRadio from "../../ButtonRadio/ButtonRadio.jsx";
import './ColorButton.scss';

class ColorButton extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <ButtonRadio
                className={"color-btn"}
                classNameInput={"color-btn__input"}
                classNameText={"color-btn__text"}
            />
        )
    }
}

export default ColorButton;