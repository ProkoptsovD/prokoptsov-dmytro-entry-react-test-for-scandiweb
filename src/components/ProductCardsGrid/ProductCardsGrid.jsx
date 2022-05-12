import React from "react";
import CardInGrid from "../CardInGrid/CardInGrid";
import './ProductCardsGrid.scss';

class ProductCardsGrid extends React.Component {
    render() {
        return (
            <>
                <ul className="product-cards-grid">
                    <CardInGrid />
                    <CardInGrid />
                    <CardInGrid />
                    <CardInGrid />
                    <CardInGrid />
                    <CardInGrid />
                </ul>
            </>
        )
    }
}

export default ProductCardsGrid;