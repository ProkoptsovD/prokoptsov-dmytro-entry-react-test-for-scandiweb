import { Component } from "react";
import PropTypes from 'prop-types';
import { HeaderConatiner, HeaderTag } from "./Header.styled.js";


class Header extends Component {
    render() {
        const { children } = this.props;

        return (
            <HeaderTag>
                <HeaderConatiner>
                    {children}
                </HeaderConatiner>
            </HeaderTag>
        )
    }
}

Header.propTypes = {
    children: PropTypes.node,
}

export default Header;