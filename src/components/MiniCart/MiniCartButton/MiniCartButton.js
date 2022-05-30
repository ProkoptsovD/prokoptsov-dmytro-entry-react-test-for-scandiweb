import React, {Component} from "react";
import PropTypes from 'prop-types';
import Icons from "../../common/Icons";
import { MiniCartBtn } from "./MiniCartButton.styled";
import { connect } from "react-redux";
import { closeCartOverlay, openCartOverlay } from "../../../redux/actions/actions";

class MiniCartButton extends Component {
    handleMiniCartBtnClick = () => {
        const { isOpened, open, close } = this.props;

        isOpened ? close() : open();
    }
    render() {
        const { itemsCount } = this.props;
        
        return (
            <MiniCartBtn
                itemsCount={itemsCount}
                onClick={this.handleMiniCartBtnClick}
            >
                <Icons id="cart"/>
            </MiniCartBtn>
        );
    }
}

MiniCartBtn.propTypes = {
    itemsCount: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
    isOpened: state.cartOverlay.isOpened,
});
const mapDispatchToProps = (dispatch) => ({
    open: () => {
        dispatch(openCartOverlay());
    },
    close: () => {
        dispatch(closeCartOverlay());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartButton);