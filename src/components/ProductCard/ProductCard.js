import {Component} from "react";
import PropTypes from 'prop-types';
import {InnerWrapper, OuterWrapper} from './ProductCard.styled';
import Gallery from "../Gallery/";
import OptionPicker from "../OptionPicker/";
import ProductInfo from "./ProductInfo/";

class ProductCard extends Component {
    render() {
        const {id, brand, name, gallery, description, prices, attributes} = this.props.product;

        return (
            <OuterWrapper>
                <Gallery imageList={gallery}/>
                <InnerWrapper>
                    <ProductInfo
                        brandName={brand}
                        productName={name}
                    >
                        <OptionPicker
                            sizeW="63px"
                            sizeH="44px"
                            option={attributes[0]}/>
                    </ProductInfo>
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