import React from "react";
import ProductCardsGrid from "../../components/ProductCardsGrid/ProductCardsGrid";
import './CategoryPage.scss';


class CategoryPage extends React.Component {
    render() {
        console.log(this.props);
        return (
            <section className="category-page">
                <h1>Page with products</h1>
                <div className="container">
                    <h2 className="category-page__title">
                        {this.props.products.name}
                    </h2>
                    <ProductCardsGrid
                        key={this.props.products.name}
                        products={this.props.products}
                        currency={this.props.currency}    
                    />
                </div>
            </section>
        )
    }
}

export default CategoryPage;