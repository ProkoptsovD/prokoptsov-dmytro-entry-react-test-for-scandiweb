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
                name={this.props.name}
                text={this.props.text}
            />
        )
    }
}

export default SizeButton;