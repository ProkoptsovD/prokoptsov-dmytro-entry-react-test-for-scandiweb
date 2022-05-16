import React from "react";
import CardInGrid from "../CardInGrid/CardInGrid";
import './ProductCardsGrid.scss';

class ProductCardsGrid extends React.Component {
    renderProductCard = (product) => {
        return (
            <li
                key={product.id}
                className="product-cards-grid__item">
                <CardInGrid product={product} />
            </li>
        );
    }

    render() {
        return (
            <>
                <ul className="product-cards-grid">
                    {this.props.products.map(this.renderProductCard)}
                </ul>
            </>
        )
    }
}

export default ProductCardsGrid;