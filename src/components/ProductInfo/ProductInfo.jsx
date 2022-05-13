import React from "react";
import Colorbar from "../Colorbar/Colorbar.jsx";
import Sizebar from "../Sizebar/Sizebar.jsx";
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
                        brand
                    </p>
                    <h2 className={"product-info__title"}>
                        Running short
                    </h2>
                    <Sizebar />
                    <Colorbar />
                </div>
            </>
        )
    }
}

export default ProductInfo;