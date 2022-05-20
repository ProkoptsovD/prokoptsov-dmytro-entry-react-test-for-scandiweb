import React from "react";
import CardInGrid from "../CardInGrid/CardInGrid";
import './ProductCardsGrid.scss';

class ProductCardsGrid extends React.Component {
    renderProductCard = (productsArr) => productsArr.map(product => (
            <li
                key={product.id}
                className="product-cards-grid__item">
                <CardInGrid
                    key={product.id}
                    product={product}
                    currency={this.props.currency} />
            </li>
        ));

    render() {
        return (
            <>
                <ul className="product-cards-grid">
                    {this.renderProductCard(this.props.products)}
                </ul>
            </>
        )
    }
}

export default ProductCardsGrid;