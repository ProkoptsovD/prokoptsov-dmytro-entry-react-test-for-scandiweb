import React from "react";
import './ProductImage.scss';

class ProductImage extends React.Component {
    render() {
        return (
            <img
                src={this.props.src}
                alt="product"
                className="product-image"
            />
        )
    }
}

export default ProductImage;