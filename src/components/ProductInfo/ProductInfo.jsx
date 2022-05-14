import React from "react";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart.jsx";
import ColorPicker from "../ColorPicker/ColorPicker.jsx";
import Description from "../Description/Description.jsx";
import Pricebar from "../Pricebar/Pricebar.jsx";
import SizePicker from "../SizePicker/SizePicker.jsx";
import './ProductInfo.scss';

class ProductInfo extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <>
                <div className={"product-info"}>
                    <p className={"product-info__brand"}>
                        Brand
                    </p>
                    <h2 className={"product-info__title"}>
                        Running short
                    </h2>
                    <SizePicker />
                    <ColorPicker />
                    <Pricebar />
                    <ButtonAddToCart />
                    <Description
                        descrHTML={'<p>Great sneakers for everyday use!</p>'}
                    />
                </div>
            </>
        )
    }
}

export default ProductInfo;