import React from "react";
import ProductCardsGrid from "../../components/ProductCardsGrid/ProductCardsGrid";
import './CategoryPage.scss';
import { store } from '../../redux/store';
import { fetchCurrencies } from "../../redux/thunks/fetchCurrencies";


class CategoryPage extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }
    componentDidMount() {
        store.dispatch(fetchCurrencies());
        console.log(store.getState());
    }
    render() {
        return (
            <section className="category-page">
                <h1>Page with products</h1>
                <div className="container">
                    <h2 className="category-page__title">
                        {this.props.category}
                    </h2>
                    <ProductCardsGrid products={this.props.products}/>
                </div>
            </section>
        )
    }
}

export default CategoryPage;