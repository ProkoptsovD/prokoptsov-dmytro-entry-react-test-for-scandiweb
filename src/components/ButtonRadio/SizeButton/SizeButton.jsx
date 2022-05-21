import React from "react";
import ButtonRadio from "../ButtonRadio.jsx";
import './SizeButton.scss';

class SizeButton extends React.Component {
    render() {
        return (
            <ButtonRadio     
                name={this.props.name}
                text={this.props.text}
                value={this.props.value}
                isChecked={this.props.isChecked}
            />
        )
    }
}

export default SizeButton;