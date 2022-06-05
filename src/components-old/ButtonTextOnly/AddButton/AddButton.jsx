import React from "react";
import './AddButton.scss';

class AddButton extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <button
                type="button"
                className="add-btn"
            >
                <span>✕</span>
            </button>
        )
    }
}

export default AddButton;