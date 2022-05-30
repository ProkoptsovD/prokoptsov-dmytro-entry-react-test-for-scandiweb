import React, {Component} from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { Modal, Wrapper } from "./Overlay.styled";
import {refs} from '../../constants/refs';
import { connect } from "react-redux";
import { closeCartOverlay, openCartOverlay } from "../../redux/actions/actions";

class Overlay extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleEscapeKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscapeKeyDown);
    }
    handleEscapeKeyDown = (e) => {
        const ESCAPE_KEY_CODE = 'Escape';
        const { closeOverlay } = this.props;
        const isEscapePressed = e.key === ESCAPE_KEY_CODE;

        isEscapePressed && closeOverlay();
    }
    handleOverlayClick = (e) => {
        const { closeOverlay } = this.props;
        const isOverlayClicked = e.target === e.currentTarget;

        if (!isOverlayClicked) return;

        closeOverlay();
        // this.body.classList.remove('noscroll');
    }
    render() {
        return createPortal(
            (<Wrapper
                onClick={this.handleOverlayClick}
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
    children: PropTypes.node,
}

const mapDispatchToProps = (dispatch) => ({
    closeOverlay: () => {
        dispatch(closeCartOverlay());
    },
});

export default connect(null, mapDispatchToProps)(Overlay);