import React from "react";
import { Link } from "react-router-dom";
import CartButton from "../ButtonSvgOnly/CartButton/CartButton";
import './CardInGrid.scss';

class CardInGrid extends React.Component {

    render() {
        const { brand, name, id, inStock, prices, gallery, category } = this.props.product;
        const [previewImageUrl] = gallery;
        const {amount: cost, currency} = prices[0];
        console.log(this.props.product);
        return (
            <article
                key={id}
                data-id={id}
                className="card-in-grid">
                <Link
                    to={`/${category}/${id}`}
                    className={`card-in-grid__link ${!inStock ? 'out-of-stock' : ''}`}>
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
                </Link>
            </article>
        )
    }
}

export default CardInGrid;