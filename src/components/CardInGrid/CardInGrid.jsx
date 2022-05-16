import React from "react";
import CartButton from "../ButtonSvgOnly/CartButton/CartButton";
import './CardInGrid.scss';

class CardInGrid extends React.Component {

    render() {
        const { brand, name, id, inStock, prices, gallery } = this.props.product;
        const [previewImageUrl] = gallery;
        const {amount: cost, currency} = prices[0];

        return (
            <article
                key={id}
                data-id={id}
                className="card-in-grid">
                <a className={`card-in-grid__link ${!inStock ? 'out-of-stock' : ''}`}
                    href="">
                    <img
                        className="card-in-grid__image"
                        src={previewImageUrl}
                        alt={`${brand} ${name}`} />
                    <h3 className="card-in-grid__title">
                        {`${brand} ${name}`}
                    </h3>
                    <p className="card-in-grid__price">
                        {currency.symbol}{cost}
                    </p>
                    <CartButton />
                </a>
            </article>
        )
    }
}

export default CardInGrid;