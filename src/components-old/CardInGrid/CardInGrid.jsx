import React from "react";
import { Link } from "react-router-dom";
import CartButtonContainer from "../ButtonSvgOnly/CartButton/CartButtonContainer";
import './CardInGrid.scss';

class CardInGrid extends React.Component {
    render() {
        const { brand, name, id, inStock, prices, gallery, category } = this.props.product;
        const [previewImageUrl] = gallery;
        const {symbol: actualSymbol, label: actualLabel} = this.props.currency;
        const [actualPrice] = prices.filter(price => price.currency.label === actualLabel && price.currency.symbol === actualSymbol); 

        return (
            <article
                key={id}
                className="card-in-grid">
                <Link
                    to={`/${category}/${id}`}
                    className={`card-in-grid__link ${!inStock ? 'out-of-stock' : ''}`}
                    >
                    <img
                        className="card-in-grid__image"
                        src={previewImageUrl}
                        alt={`${brand} ${name}`} />
                    <h3 className="card-in-grid__title">
                        {`${brand} ${name}`}
                    </h3>
                    <p className="card-in-grid__price">
                        {actualPrice.currency.symbol}{actualPrice.amount}
                    </p>
                    {inStock && <CartButtonContainer id={id}/>}
                </Link>
            </article>
        )
    }
}

export default CardInGrid;