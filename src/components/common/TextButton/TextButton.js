import React, {Component} from "react";
import PropTypes from 'prop-types';
import { TextBtn } from "./TextButton.styled";

class TextButton extends Component {
    static defaultProps = {
        children: 'button',
    }

    render () {
        return (
            <TextBtn {...this.props}>
                {this.props.children}
            </TextBtn>
        )
    }
}

TextButton.propTypes = {
    children: PropTypes.string.isRequired || PropTypes.node,
}

export default TextButton;