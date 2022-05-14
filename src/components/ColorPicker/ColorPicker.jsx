import React from "react";
import ColorButton from "../ButtonRadio/ColorButton/ColorButton.jsx";
import './ColorPicker.scss';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className={"color-picker"}>
                <b className={`color-picker__title ${this.props.pickerTitle ? this.props.pickerTitle : ''}`}>
                    Color:
                </b>
                <ul className={"color-picker__btn-list"}>
                    <li className={"color-picker__item"}>
                        <ColorButton
                            className={this.props.className}
                            classNameInput={this.props.classNameInput}
                            classNameText={this.props.classNameText}
                            name={this.props.name}
                        />
                    </li>
                    <li className={"color-picker__item"}>
                        <ColorButton
                            className={this.props.className}
                            classNameInput={this.props.classNameInput}
                            classNameText={this.props.classNameText}
                            name={this.props.name}
                        />
                    </li>
                    <li className={"color-picker__item"}>
                        <ColorButton
                            className={this.props.className}
                            classNameInput={this.props.classNameInput}
                            classNameText={this.props.classNameText}
                            name={this.props.name}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default ColorPicker;