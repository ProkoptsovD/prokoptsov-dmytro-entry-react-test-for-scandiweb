import React from "react";
import ButtonSvgOnly from "../ButtonSvgOnly";
import './PrevNextButtons.scss';

class PrevNextButtons extends React.Component {
    constructor(props) {
        super(props);

        this.image = () => {};
    }
    componentDidMount () {
        this.image = this.props.slide();
    }
    render() {
        return (
            <div className="prev-next-buttons">
                <ButtonSvgOnly
                    onClick={() => {
                    console.log(this.image.prev());
                    }}
                    icon={"#chevron"}
                />
                <ButtonSvgOnly
                    onClick={() => {
                        console.log(this.image.next());
                    }}
                    icon={"#chevron"}
                />
            </div>
        )
    }
}

export default PrevNextButtons;