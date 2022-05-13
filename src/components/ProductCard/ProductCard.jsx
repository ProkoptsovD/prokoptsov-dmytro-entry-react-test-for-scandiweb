import React from "react";
import Gallery from '../Gallery/Gallery.jsx';
import ProductImage from "../ProductImage/ProductImage.jsx";
import ProductInfo from "../ProductInfo/ProductInfo.jsx";
import './ProductCard.scss';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className={"product-card__wrapper-outer"}>
                <Gallery
                    images={this.props.data}
                />
                <div className="product-card__wrapper-inner">
                    <ProductImage />
                    <ProductInfo />
                </div>
            </div>
        )
    }
}

export default ProductCard;