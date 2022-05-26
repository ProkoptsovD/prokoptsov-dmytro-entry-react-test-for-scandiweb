import React from "react";
import PropTypes from 'prop-types';
import Icons from '../common/Icons';
import { Card, Label, PreviewImage, Price, QuickAddButton, StyledLink } from "./PreviewCard.styled";


class PreviewCard extends React.Component {
    getPrice = () => {
        const {prices} = this.props.product;
        const {symbol: actualSymbol, label: actualLabel} = this.props.currency;
        
        return prices.find(({currency: {label, symbol}}) => label === actualLabel || symbol === actualSymbol);
    };
    render() {
        const { brand, name, id, inStock, gallery } = this.props.product;
        const [url] = gallery;
        const price = this.getPrice();

        return (
            <Card inStock={inStock}>
                <StyledLink 
                    to={`/${id}`}
                >
                    <PreviewImage src={url} alt={name} />
                    <Label>
                        {`${brand} ${name}`}
                    </Label>
                    <Price>
                        {price.currency.symbol}{price.amount}
                    </Price>
                    { inStock && <QuickAddButton>
                                    <Icons id="cart" />
                                </QuickAddButton>}
                </StyledLink>
            </Card>
        );
    }
}

PreviewCard.propTypes = {
    product: PropTypes.shape({
        brand: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        inStock: PropTypes.bool.isRequired,
        gallery: PropTypes.arrayOf(PropTypes.string),
    }),
    currency: PropTypes.shape({
        symbol: PropTypes.string,
        label: PropTypes.string,
    }),
}

export default PreviewCard;