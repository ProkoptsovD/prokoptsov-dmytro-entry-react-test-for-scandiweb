import {Component} from 'react';
import PropTypes from 'prop-types';
import { BrandName, ProductName, Wrapper } from './ProductInfo.styled';

class ProductInfo extends Component {
    static defaultProps = {
        brandName: 'brand',
        productName: 'product',
    };
    render() {
        const { children, brandName, productName } = this.props;

        return (
            <Wrapper>
                <BrandName>
                    {brandName}
                </BrandName>
                <ProductName>
                    {productName}
                </ProductName>
                {children}
            </Wrapper>
        );
    }
}

ProductInfo.propTypes = {
    children: PropTypes.any,
    brandName: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
}

export default ProductInfo;