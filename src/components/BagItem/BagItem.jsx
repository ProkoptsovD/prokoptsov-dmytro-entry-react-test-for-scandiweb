import React from "react";
import AddRemoveItemBar from "../AddRemoveItemBar/AddRemoveItemBar.jsx";
import ColorPicker from "../ColorPicker/ColorPicker.jsx";
import ProductImage from "../ProductImage/ProductImage.jsx";
import SizePicker from "../SizePicker/SizePicker.jsx";
import './BagItem.scss';

class BagItem extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className="bag-item">
                <div className="bag-item__wrapper-inner">
                    <p className="bag-item__brand">
                        Apollo
                    </p>
                    <h4 className="bag-item__title">
                        Running Short
                    </h4>
                    <strong className="bag-item__price">
                        $50.00
                    </strong>
                    <SizePicker />
                    <ColorPicker
                        pickerTitle={"bag-item__color-picker-title"}
                        className={"bag-item__color-picker"}
                    />
                </div>
                <AddRemoveItemBar />
                <ProductImage />
            </div>
        )
    }
}

export default BagItem;