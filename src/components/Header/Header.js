import React from "react";
import PropTypes from 'prop-types';
import {HeaderConatiner, HeaderTag} from "./Header.styled.js";


class Header extends React.Component {
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