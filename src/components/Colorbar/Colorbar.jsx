import React from "react";
import ColorButton from "../ButtonSvgOnly/ColorButton/ColorButton";
import './Colorbar.scss';

class Colorbar extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className={"color-bar"}>
                <b className={"color-bar__title"}>
                    Color:
                </b>
                <ul className={"color-bar__btn-list"}>
                    <li className={"color-bar__item"}>
                        <ColorButton />
                    </li>
                    <li className={"color-bar__item"}>
                        <ColorButton />
                    </li>
                    <li className={"color-bar__item"}>
                        <ColorButton />
                    </li>
                </ul>
            </div>
        )
    }
}

export default Colorbar;