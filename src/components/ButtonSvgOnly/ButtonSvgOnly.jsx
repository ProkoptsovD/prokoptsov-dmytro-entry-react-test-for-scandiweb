import React from "react";
import icons from '../../icons/icons.svg';
import './ButtonSvgOnly.scss';

class ButtonSvgOnly extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <button
                onClick={this.props.onClick || (() => {})}
                className={`button-svg-only ${this.props.className ? this.props.className : ''}`}
                type="button"
                data-content={this.props.dataContent || ''}
                id={this.props.id || 'button-svg-only'}
            >
                <svg>
                    <use
                        href={icons + `${this.props.icon || '#cart'}`}
                    ></use>
                </svg>
                {this.props.children || null}
            </button>
        );
    }
}

export default ButtonSvgOnly;