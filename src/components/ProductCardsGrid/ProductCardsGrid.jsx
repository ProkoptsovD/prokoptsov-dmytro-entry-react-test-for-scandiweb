import React from "react";
import CardInGrid from "../CardInGrid/CardInGrid";
import './ProductCardsGrid.scss';

class ProductCardsGrid extends React.Component {
    render() {
        return (
            <>
                <ul className="product-cards-grid">
                    <li className="product-cards-grid__item">
                        <CardInGrid />
                    </li>
                    <li className="product-cards-grid__item">
                        <CardInGrid />
                    </li>
                    <li className="product-cards-grid__item">
                        <CardInGrid />
                    </li>
                    <li className="product-cards-grid__item">
                        <CardInGrid />
                    </li>
                    <li className="product-cards-grid__item">
                        <CardInGrid />
                    </li>
                    <li className="product-cards-grid__item">
                        <CardInGrid />
                    </li>
                </ul>
            </>
        )
    }
}

export default ProductCardsGrid;