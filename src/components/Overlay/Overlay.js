import React, {Component} from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { Modal, Wrapper } from "./Overlay.styled";
import {refs} from '../../constants/refs';

class Overlay extends Component {
    static defaultProps = {
        onClick: () => {},
    };

    onOverlayClick = (e) => {
        const elementId = e.target.id;
        const isOverlayClicked = elementId === this.OVERLAY_ID;

        if(!isOverlayClicked) return;

        this.props.closeMiniCart();
        this.body.classList.remove('noscroll');
    }
    render() {
        return createPortal(
            (<Wrapper
                onClick={() => {}}
            >
                <Modal>
                    {this.props.children}
                </Modal>
            </Wrapper>),
            refs.overlayContainer
        );
    }
}

Overlay.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
}

export default Overlay;