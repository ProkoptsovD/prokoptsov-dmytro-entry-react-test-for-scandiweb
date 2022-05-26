import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import './ProductPage.scss';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }
    
    render() {
        return (
            <section
                className="product-page"
            >
                <h1>Product page</h1>
                <div className="container">
                    <ProductCard />
                </div>
            </section>
        )
    }
}

export default ProductPage;