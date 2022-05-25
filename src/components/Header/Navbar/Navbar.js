import React, {Component} from "react";
import PropTypes from 'prop-types';
import { ListItem, Nav, NavList, StyledNavLink } from "./Navbar.styled";

class Navbar extends Component {
    renderNavbarList = () => {
        return this.props.tabList.map((tabName, idx) => (
            <ListItem key={idx}>
                <StyledNavLink
                    to={`/${tabName}`}>
                    {tabName}
                </StyledNavLink>
            </ListItem>
        ));
    }
    render() {
        return (
            <Nav>
                <NavList>
                    {this.renderNavbarList()}
                </NavList>
            </Nav>
        )
    }
}

Navbar.propTypes = {
    tabList: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Navbar;