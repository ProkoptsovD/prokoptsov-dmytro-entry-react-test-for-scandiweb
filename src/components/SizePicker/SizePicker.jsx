import React from "react";
import SizeButton from "../ButtonRadio/SizeButton/SizeButton.jsx";
import './SizePicker.scss';

class SizePicker extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className={"size-picker"}>
                <b className={`size-picker__title ${this.props.pickerTitle ? this.props.pickerTitle : ''}`}>
                    Size:
                </b>
                <ul className={"size-picker__btn-list"}>
                    <li className={`size-picker__btn ${this.props.liItem ? this.props.liItem : ''}`}>
                        <SizeButton
                            className={this.props.className}
                            classNameInput={this.props.classNameInputInput}
                            classNameText={this.props.classNameText}
                            name={`${this.props.name ? this.props.name : 'size'}`}
                            text={`${this.props.text ? this.props.text : 'xs'}`}
                        />
                    </li>
                    <li className={`size-picker__btn ${this.props.liItem ? this.props.liItem : ''}`}>
                        <SizeButton
                            className={this.props.className}
                            classNameInput={this.props.classNameInputInput}
                            classNameText={this.props.classNameText}
                            name={`${this.props.name ? this.props.name : 'size'}`}
                            text={`${this.props.text ? this.props.text : 's'}`}
                        />
                    </li>
                    <li className={`size-picker__btn ${this.props.liItem ? this.props.liItem : ''}`}>
                        <SizeButton
                            className={this.props.className}
                            classNameInput={this.props.classNameInputInput}
                            classNameText={this.props.classNameText}
                            name={`${this.props.name ? this.props.name : 'size'}`}
                            text={`${this.props.text ? this.props.text : 'm'}`}
                        />
                    </li>
                    <li className={`size-picker__btn ${this.props.liItem ? this.props.liItem : ''}`}>
                        <SizeButton
                            className={this.props.className}
                            classNameInput={this.props.classNameInputInput}
                            classNameText={this.props.classNameText}
                            name={`${this.props.name ? this.props.name : 'size'}`}
                            text={`${this.props.text ? this.props.text : 'l'}`}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default SizePicker;