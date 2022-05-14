import React from "react";
import './ProductImage.scss';

class ProductImage extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <>
                <div className={"product-image__wrapper"}>
                    <img
                        src={"data:image/jpeg;base64,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"}
                        alt="product"
                        className={"product-image"}
                    />
                </div>
            </>
        )
    }
}

export default ProductImage;