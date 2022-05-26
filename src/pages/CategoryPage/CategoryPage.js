import React from "react";
import Section from "../../components/common/Section/";
import PropTypes from 'prop-types';
import FlexGrid from "../../components/common/FlexGrid/";
import { CategoryName } from "./CategoryPage.styled";
import PreviewCard from "../../components/PreviewCard/PreviewCard";


class CategoryPage extends React.Component {
    static defaultProps = {
        name: 'Category name',
    }
    renderProductList = () => {
        return this.props.productList.map((product, idx) => (
            <PreviewCard 
                key={idx}
                product={product} 
                currency={{label: 'USD', symbol: '$'}}
                />
        ));
    }
    render() {
        return (
            <Section>
                <CategoryName>
                    {this.props.name}
                </CategoryName>
                <FlexGrid>
                    {this.renderProductList()}
                </FlexGrid>
            </Section>
        )
    }
};

CategoryPage.propTypes = {
    name: PropTypes.string.isRequired,
};

export default CategoryPage;