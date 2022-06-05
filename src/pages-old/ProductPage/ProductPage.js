import React, {Component} from "react";
import Section from "../../components/common/Section";
import ProductCard from "../../components/ProductCard/ProductCard";

class ProductPage extends Component {
    render() {
        return (
            <Section>
                <ProductCard />
            </Section>
        )
    }
}

export default ProductPage;