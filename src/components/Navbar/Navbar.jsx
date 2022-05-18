import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss';

class Navbar extends React.Component {
    renderLinksMarkup = ({ name: category }) => {
        return (
            <li
                key={category}
                className="navbar__item">
                <NavLink
                    to={category === 'all' ? '/' : category}
                    className={`navbar__link`}
                >
                    {category}
                </NavLink>
            </li>
        )
    }
    componentDidMount() {
        // this.props.setCategories();
    }
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar__list">
                    {
                        this.props.categories.map(this.renderLinksMarkup)
                    }
                </ul>
            </nav>
        )
    }
}

export default Navbar;