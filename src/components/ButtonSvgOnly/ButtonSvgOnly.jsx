import React from "react";
import icons from '../../icons/icons.svg';
import './ButtonSvgOnly.scss';

class ButtonSvgOnly extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                className={'button-svg-only' + ' ' + this.props.className}
                type="button"
            >
                <svg>
                    <use
                        href={icons + '#cart'}
                    ></use>
                </svg>
            </button>
        );
    }
}

export default ButtonSvgOnly;