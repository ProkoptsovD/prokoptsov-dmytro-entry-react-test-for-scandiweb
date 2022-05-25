import React from "react";
import PropTypes from 'prop-types';
import Icons from "../../common/Icons";
import { CurrencyList, ListItem, CurrencySellectionBtn, Wrapper, OpenCloseSwitcherBtn, ActualCurrency } from "./CurrencySwitcher.styled";

class CurrencySwitcher extends React.Component {
    static defaultProps = {
        isOpened: false,
        onClick: () => {},
        currencyList: [{symbol: '$', label: 'USD'}],
    }
    renderCurrencies = () => this.props.currencyList.map(({ symbol, label }, idx) => {
        return (
            <ListItem key={label}>
                <CurrencySellectionBtn id={idx}>
                    {`${symbol} ${label}`}
                </CurrencySellectionBtn>
            </ListItem>
        );
    });
    handleFormInputClick = (e) => {
        const CURRENCY_INPUT = 'currency-input';
        const isInputClicked = e.target.dataset.js === CURRENCY_INPUT;
        const currencyToSet = {
            label: e.target.id,
            symbol: e.target.value,
        }
        if (!isInputClicked) return;

        this.props.switchActualCurrency(currencyToSet);
        this.props.updateCurrencyInCart(currencyToSet);
        this.props.sumTotalPriceInCart();
        this.rotateArrow();
        this.toggleCurrenciesVisibility();
    }
    render() {
        const isOpened = true;
        return (        
            <Wrapper>
                <OpenCloseSwitcherBtn isOpened={isOpened}>
                    <ActualCurrency>
                        $
                    </ActualCurrency>
                    <Icons id="chevron"/>
                </OpenCloseSwitcherBtn>
                <CurrencyList>
                    {isOpened && this.renderCurrencies()}
                </CurrencyList>
            </Wrapper>
        )
    }
}

CurrencySwitcher.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    currencyList: PropTypes.arrayOf(PropTypes.shape({
            symbol: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })),
}

export default CurrencySwitcher;