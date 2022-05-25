import React, {Component} from "react";
import PropTypes from 'prop-types';
import {ContainerDiv} from './Container.styled.js';


class Container extends Component {
    render () {
        return (
            <ContainerDiv>
                {this.props.children}
            </ContainerDiv>
        )
    }
}

Container.propTypes = {
    children: PropTypes.node,
}

export default Container;