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
                name={`${this.props.name ? this.props.name : 'color'}`}
                className={`${this.props.className ? this.props.className : 'color-btn'}`}
                classNameInput={`${this.props.classNameInput ? this.props.classNameInput : 'color-btn__input'}`}
                classNameText={`${this.props.classNameText ? this.props.classNameText : 'color-btn__text'}`}
            />
        )
    }
}

export default ColorButton;