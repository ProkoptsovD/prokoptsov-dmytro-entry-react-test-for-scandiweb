import React, {Component} from "react";
import Section from "../../components/common/Section";
import ProductCard from "../../components/ProductCard/";
import {oneProduct} from '../../api/oneProduct';

class ProductPage extends Component {
    render() {
        return (
            <Section>
                <ProductCard product={oneProduct}/>
            </Section>
        )
    }
}

export default ProductPage;