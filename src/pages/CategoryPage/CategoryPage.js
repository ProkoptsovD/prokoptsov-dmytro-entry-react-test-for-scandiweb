import React from "react";
import Section from "../../components/common/Section/";
import PropTypes from 'prop-types';
import FlexGrid from "../../components/common/FlexGrid/";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import { CategoryName } from "./CategoryPage.styled";


class CategoryPage extends React.Component {
    static defaultProps = {
        name: 'Category name',
    }
    renderProductList = (productList) => {
        return productList.map((product, idx) => (
            <PreviewCard 
                key={idx}
                product={product} 
                currency={{label: 'USD', symbol: '$'}}
                />
        ));
    }
    render() {
        const { productList, categoryName } = this.props;

        return (
            <Section>
                <CategoryName>
                    {categoryName}
                </CategoryName>
                <FlexGrid>
                    {this.renderProductList(productList)}
                </FlexGrid>
            </Section>
        )
    }
};

CategoryPage.propTypes = {
    categoryName: PropTypes.string.isRequired,
    productList: PropTypes.arrayOf(PropTypes.object),
};

export default CategoryPage;