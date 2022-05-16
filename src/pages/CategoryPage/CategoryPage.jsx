import React from "react";
import ProductCardsGrid from "../../components/ProductCardsGrid/ProductCardsGrid";
import './CategoryPage.scss';

class CategoryPage extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.state = {
            res: this.props.state().data
        }
    }
    render() {
        return (
            <section className="category-page">
                <h1>Page with products</h1>
                <div className="container">
                    <h2 className="category-page__title">
                        {this.state.res.data.categories[0].name}
                    </h2>
                    <ProductCardsGrid />
                </div>
            </section>
        )
    }
}

export default CategoryPage;