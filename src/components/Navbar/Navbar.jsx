import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        
        this.props = props;
    }

    renderLinksMarkup = ({ name: category }, index) => {
        return (
            <li
                key={category}
                className="navbar__item">
                <NavLink
                    to={category}
                    className={`navbar__link ${!index ? 'current' : ''}`}
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
                    {
                        this.props.cats.map(this.renderLinksMarkup)
                    }
                </ul>
            </nav>
        )
    }
}

export default Navbar;