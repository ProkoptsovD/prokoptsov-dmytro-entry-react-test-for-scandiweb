import { Component } from 'react';
import PropTypes from 'prop-types';
import { BrandName, InnerWrapper, OuterWrapper, Price, ProductName } from './Product.styled';
import OptionPicker from '../../OptionPicker';
import Gallery from '../../Gallery';
import QuantatyPanel from '../QuantatyPanel';

class Product extends Component {
    static defaultProps = {
        product: {
            id: '1',
            brand: 'brand',
            product: 'product',
            prices: [
                {
                    amount: '17',
                    currency: {
                        symbol: '$',
                        label: 'USD',
                    }
                }
            ],
            attributes: [],
            gallery: [],
        },
        currency: {
            symbol: '$',
            label: 'USD',
        }
    };
    render() {
        const { brand, name, prices, gallery, attributes} = this.props.product;
        const {symbol: actualSymbol, label: actualLabel} = this.props.currency;
        const price = prices.find(price => price.currency.label === actualLabel && price.currency.symbol === actualSymbol);

        console.log(this.props.product);
        return (
            <OuterWrapper>
                <InnerWrapper {...this.props}>
                    <BrandName {...this.props.productStyles.brand}>
                        {brand}
                    </BrandName>
                    <ProductName {...this.props.productStyles.name}>
                        {name}
                    </ProductName>
                    <Price {...this.props.productStyles.price}>
                        {price.currency.symbol + price.amount}
                    </Price>
                    <OptionPicker 
                        option={attributes[0]}
                        optionName={this.props.optionName}
                        optionButton={this.props.optionButton}    
                    />
                    <OptionPicker 
                        option={attributes[0]}
                        optionName={this.props.optionName}
                        optionButton={this.props.optionButton}    
                    />
                </InnerWrapper>
                <QuantatyPanel vertical/>
                <Gallery
                    small
                    imageList={gallery}
                />
            </OuterWrapper>
        );
    };
};

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        prices: PropTypes.arrayOf(PropTypes.object),
        attributes: PropTypes.arrayOf(PropTypes.object),
        gallery: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    currency: PropTypes.object,
};

export default Product;