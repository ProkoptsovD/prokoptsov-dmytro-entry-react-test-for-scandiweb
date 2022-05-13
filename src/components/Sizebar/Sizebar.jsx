import React from "react";
import SizeButton from "../ButtonSvgOnly/SizeButton/SizeButton.jsx";
import './Sizebar.scss';

class Sizebar extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className={"size-bar"}>
                <b className={"size-bar__title"}>
                    Size:
                </b>
                <ul className={"size-bar__btn-list"}>
                    <li className={"size-bar__btn"}>
                        <SizeButton text={'xs'}/>
                    </li>
                    <li className={"size-bar__btn"}>
                        <SizeButton text={'s'}/>
                    </li>
                    <li className={"size-bar__btn"}>
                        <SizeButton text={'m'}/>
                    </li>
                    <li className={"size-bar__btn"}>
                        <SizeButton text={'l'}/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sizebar;