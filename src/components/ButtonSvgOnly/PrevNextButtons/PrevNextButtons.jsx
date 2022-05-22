import React from "react";
import ButtonSvgOnly from "../ButtonSvgOnly";
import './PrevNextButtons.scss';

class PrevNextButtons extends React.Component {
    constructor(props) {
        super(props);

        this.image = () => {};
    }
    render() {
        return (
            <div className="prev-next-buttons">
                <ButtonSvgOnly
                    onClick={this.props.prevPic}
                    icon={"#chevron"}
                />
                <ButtonSvgOnly
                    onClick={this.props.nextPic}
                    icon={"#chevron"}
                />
            </div>
        )
    }
}

export default PrevNextButtons;