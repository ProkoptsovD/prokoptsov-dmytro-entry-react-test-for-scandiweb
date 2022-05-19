import React from "react";
import './Actionbar.scss';
import CurrencySwitcherContainer from '../CurrencySwitcher/CurrencySwitcherContainer';
import CartButtonAction from '../CartButtonAction/CartButtonAction';

class Actionbar extends React.Component {
    render() {
        return (
            <ul className="action-bar">
                <li className="action-bar__item">
                    <CurrencySwitcherContainer />
                </li>
                <li className="action-bar__item">
                    <CartButtonAction />
                </li>
            </ul>
        )
    }
}

export default Actionbar;