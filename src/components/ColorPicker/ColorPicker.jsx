import React from "react";
import ColorButton from "../ButtonRadio/ColorButton/ColorButton.jsx";
import './ColorPicker.scss';

class ColorPicker extends React.Component {
    renderColorPickerBtns = (attrArr) => {
        return attrArr.map(({id, value, displayValue}) => {
            const checked = this.props.selectedOptions.some(({attr}) => id === attr.id);

            return (
                <li 
                    key={id}
                    className="color-picker__item">
                    <ColorButton
                        key={id}
                        id={id}
                        name={this.props.hashedName}
                        backgroundColor={value}
                        value={displayValue}
                        isChecked={checked}
                    />
                </li>
            );
        });
    }
    render() {
        return (
            <div className="color-picker">
                <b className="color-picker__title">
                    {`${this.props.name}:`}
                </b>
                <ul className="color-picker__btn-list">
                    {this.renderColorPickerBtns(this.props.attrItems)}
                </ul>
            </div>
        )
    }
}

export default ColorPicker;