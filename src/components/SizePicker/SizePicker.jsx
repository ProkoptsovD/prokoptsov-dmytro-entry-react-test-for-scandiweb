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
                <b className={"size-picker__title"}>
                    Size:
                </b>
                <ul className={"size-picker__btn-list"}>
                    <li className={"size-picker__btn"}>
                        <SizeButton text={'xs'}/>
                    </li>
                    <li className={"size-picker__btn"}>
                        <SizeButton text={'s'}/>
                    </li>
                    <li className={"size-picker__btn"}>
                        <SizeButton text={'m'}/>
                    </li>
                    <li className={"size-picker__btn"}>
                        <SizeButton text={'l'}/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SizePicker;