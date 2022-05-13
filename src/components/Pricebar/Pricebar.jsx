import React from "react";
import './Pricebar.scss';

class Pricebar extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <>
                <b className={"price__title"}>
                    Price:
                </b>
                <strong className={"price"}>
                    $50.00
                </strong>
            </>
        )
    }
}

export default Pricebar;