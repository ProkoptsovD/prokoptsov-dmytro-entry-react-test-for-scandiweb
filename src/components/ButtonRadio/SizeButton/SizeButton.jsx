import React from "react";
import ButtonRadio from "../ButtonRadio.jsx";
import './SizeButton.scss';

class SizeButton extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <ButtonRadio
                className={this.props.className}
                classNameInput={this.props.classNameInputInput}
                classNameText={this.props.classNameText}
                name={`${this.props.name ? this.props.name : 'size'}`}
                text={this.props.text}
            />
        )
    }
}

export default SizeButton;