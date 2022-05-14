import React from "react";
import ButtonSvgOnly from "../ButtonSvgOnly";
import './PrevNextButtons.scss';

class PrevNextButtons extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className={"prev-next-buttons"}>
                <ButtonSvgOnly 
                    icon={"#chevron"}
                />
                <ButtonSvgOnly 
                    icon={"#chevron"}
                />
            </div>
        )
    }
}

export default PrevNextButtons;