import {Component} from "react";
import PropTypes from 'prop-types';
import {InnerWrapper, OuterWrapper, AddToCartButton, OptionPickerStyles } from './ProductCard.styled';
import Gallery from "../Gallery/";
import ProductInfo from "./ProductInfo/";
import OptionPicker from "../OptionPicker";
import Description from "./ProductDescription/";

class ProductCard extends Component {
    render() {
        const {id, brand, name, gallery, description, prices, attributes} = this.props.product;
        const [ price ] = prices;
        console.log(description);

        return (
            <OuterWrapper>
                <Gallery imageList={gallery}/>
                <InnerWrapper>
                    <ProductInfo
                        brandName={brand}
                        productName={name}
                        price={price}
                    >
                        <OptionPicker
                            {...OptionPickerStyles}
                            option={attributes[1]}/>
                    </ProductInfo>
                    <AddToCartButton>
                        Add to cart
                    </AddToCartButton>
                    {
                        description && <Description
                                            descr={description}
                                        />
                    }
                </InnerWrapper>
            </OuterWrapper>
        )
    }
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