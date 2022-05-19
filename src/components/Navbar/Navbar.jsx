import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss';

class Navbar extends React.Component {
    setCurrentCategory = (e) => {
        const category = e.target.pathname.slice(1);
        // this.props.initCurrentCategory(category);
        this.props.setCurrentCategory(category);
    }
    renderLinksMarkup = ({ name: category }) => {
        return (
            <li
                key={category}
                className="navbar__item">
                <NavLink
                    onClick={this.setCurrentCategory}
                    to={`/${category}`}
                    className={`navbar__link`}
                >
                    {category}
                </NavLink>
            </li>
        )
    }
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar__list">
                    {this.props.categories.map(this.renderLinksMarkup)}
                </ul>
            </nav>
        )
    }
}

export default Navbar;