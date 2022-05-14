import React from "react";
import AddButton from "../ButtonTextOnly/AddButton/AddButton";
import RemoveButton from "../ButtonTextOnly/RemoveButton/RemoveButton";
import './AddRemoveItemBar.scss';

class AddRemoveItemBar extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className={"add-remove-item-bar"}>
                <AddButton />
                <span className={"add-remove-item-bar__total"}>
                    0
                </span>
                <RemoveButton />
            </div>
        )
    }
}

export default AddRemoveItemBar;