import React from "react";
import ButtonRadio from "../../ButtonRadio/ButtonRadio.jsx";

class SizeButton extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <ButtonRadio
                text={this.props.text}
            />
        )
    }
}

export default SizeButton;