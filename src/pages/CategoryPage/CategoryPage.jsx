import React from "react";
import './CategoryPage.scss';

class CategoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <section className="page">
                <div className="container">
                    <h2 className="page__title">
                        Category name
                    </h2>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default CategoryPage;