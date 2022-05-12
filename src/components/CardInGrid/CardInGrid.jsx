import React from "react";
import CartButton from "../ButtonSvgOnly/CartButton/CartButton";
import './CardInGrid.scss';

class CardInGrid extends React.Component {

    render() {
        return (
            <>
                <li className="card-in-grid">
                    <article>
                        <a className="card-in-grid__link"
                            href="">
                            <img
                                className="card-in-grid__image"
                                src="data:image/jpeg;base64,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"
                                alt="Product image" />
                            <h3 className="card-in-grid__title">
                                title
                            </h3>
                            <p className="card-in-grid__price">
                                price
                            </p>
                            <CartButton />
                        </a>
                    </article>
                </li>
            </>
        )
    }
}

export default CardInGrid;