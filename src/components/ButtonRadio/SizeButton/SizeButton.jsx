import React from "react";
import ButtonRadio from "../ButtonRadio.jsx";

class SizeButton extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <ButtonRadio
                name={'size'}
                text={this.props.text}
            />
        )
    }
}

export default SizeButton;