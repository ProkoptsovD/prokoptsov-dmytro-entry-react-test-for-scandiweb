import React from "react";
import SizeButton from "../ButtonRadio/SizeButton/SizeButton.jsx";
import './SizePicker.scss';

class SizePicker extends React.Component {
    renderButtons = (attrArr) => {
        return attrArr.map(({id, value, displayValue}, index) => {
            return (
                <li 
                    key={id}
                    className="size-picker__btn">
                    <SizeButton
                        key={id}
                        id={id + this.props.name}
                        name={this.props.name}
                        text={value}
                        value={displayValue}
                        isChecked={!index}
                    />
                </li>
            );
        });
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="size-picker">
                <b className="size-picker__title">
                    {`${this.props.name}:`}
                </b>
                <ul 
                    className="size-picker__btn-list"
                    data-element="size-picker"
                >
                    {this.renderButtons(this.props.attrItems)}
                </ul>
            </div>
        )
    }
}

export default SizePicker;