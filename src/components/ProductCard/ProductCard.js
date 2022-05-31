import { Component } from "react";
import PropTypes from 'prop-types';
import { InnerWrapper, OuterWrapper, AddToCartButton, OptionPickerStyles, DescriptionWrapper } from './ProductCard.styled';
import Gallery from "../Gallery/";
import ProductInfo from "./ProductInfo/";
import OptionPicker from "../OptionPicker";
import Description from "./ProductDescription/";


class ProductCard extends Component {
    static defaultProps = {
        product: {
            id: '',
            brand: '',
            gallery: [],
            description: '',
            prices: [],
            attributes: [],
        }
    };
    renderOptionPickers = () => {
        const { product: { attributes }, disabled } = this.props;
        return attributes.map(attr => (
            <OptionPicker
                key={attr.name}
                {...OptionPickerStyles}
                option={attr}
                disabled={disabled}
            />
        ));
    };
    render() {
        const {id, brand, name, gallery, description, prices: [ price ] } = this.props.product;

        return (
            <OuterWrapper>
                <Gallery
                    large
                    imageList={gallery}/>
                <InnerWrapper>
                    <ProductInfo
                        brandName={brand}
                        productName={name}
                        price={price}
                    >
                    {this.renderOptionPickers()}
                    </ProductInfo>
                    <AddToCartButton>
                        Add to cart
                    </AddToCartButton>
                    {
                        description &&  <DescriptionWrapper>
                                            <Description
                                                descr={description}
                                            />
                                        </DescriptionWrapper>
                    }
                </InnerWrapper>
            </OuterWrapper>
        );
    };
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        gallery: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string,
        prices: PropTypes.arrayOf(PropTypes.object).isRequired,
        attributes: PropTypes.arrayOf(PropTypes.object),
    })
}

export default ProductCard;