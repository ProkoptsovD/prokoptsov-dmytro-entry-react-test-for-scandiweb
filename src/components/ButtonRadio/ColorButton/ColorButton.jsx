import React from "react";
import ButtonRadio from "../ButtonRadio.jsx";
import './ColorButton.scss';

class ColorButton extends React.Component {
    render() {
        return (
            <ButtonRadio {...this.props}/>
        )
    }
}

export default ColorButton;