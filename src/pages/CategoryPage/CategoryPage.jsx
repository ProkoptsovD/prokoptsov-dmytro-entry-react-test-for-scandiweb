import React from "react";
import ProductCardsGrid from "../../components/ProductCardsGrid/ProductCardsGrid";
import './CategoryPage.scss';


class CategoryPage extends React.Component {
    render() {
        return (
            <section className="category-page">
                <h1>Page with products</h1>
                <div className="container">
                    <h2 className="category-page__title">
                        {this.props.categoryByDefault}
                    </h2>
                    {/* <ProductCardsGrid products={this.props.products}/> */}
                </div>
            </section>
        )
    }
}

export default CategoryPage;