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
    renderOptionPickerList = () => {
        const { product: { attributes }, selectedOptions, disable } = this.props;

        return attributes.map((attr, idx) => {
            const pickedOption = selectedOptions[idx]?.attr.id;
            const pickedOptionIndex = attr.items.findIndex(({ id }) => id === pickedOption);

            return (
                <OptionPicker
                            key={attr.id}
                            option={attr}
                            selected={pickedOptionIndex}
                            disabled={disable}
                            optionName={this.props.optionName}
                            optionButton={this.props.optionButton}
                            
                />
            )
        });
    }
    render() {
        const {
            product: { brand, name, prices, gallery },
            quantaty, small, increaseQuantaty, decreaseQuantaty
        } = this.props;

        const { currency } = this.props;
        const price = prices[currency];

        return (
            <OuterWrapper>
                <InnerWrapper {...this.props}>
                    <BrandName {...this.props}>
                        {brand}
                    </BrandName>
                    <ProductName {...this.propTypes}>
                        {name}
                    </ProductName>
                    <Price {...this.props}>
                        {price.currency.symbol + price.amount}
                    </Price>
                    {this.renderOptionPickerList()}
                </InnerWrapper>
                <QuantatyPanel
                    vertical
                    quantaty={quantaty}
                    increaseQuantaty={increaseQuantaty}
                    decreaseQuantaty={decreaseQuantaty}
                />
                <Gallery
                    small={small}
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
    currency: PropTypes.number,
};

export default Product;