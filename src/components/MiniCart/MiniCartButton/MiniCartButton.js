import React, {Component} from "react";
import PropTypes from 'prop-types';
import Icons from "../../common/Icons";
import { MiniCartBtn } from "./MiniCartButton.styled";

class MiniCartButton extends Component {
    static defaultProps = {
        onClick: () => {},
    }

    render() {
        const { itemsCount } = this.props;
        
        return (
            <MiniCartBtn
                itemsCount={itemsCount}
                onClick={this.props.onClick}
            >
                <Icons id="cart"/>
            </MiniCartBtn>
        )
    }
}

MiniCartBtn.propTypes = {
    itemsCount: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default MiniCartButton;