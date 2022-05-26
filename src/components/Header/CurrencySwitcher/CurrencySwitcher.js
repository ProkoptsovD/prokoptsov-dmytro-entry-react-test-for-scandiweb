import React from "react";
import PropTypes from 'prop-types';
import Icons from "../../common/Icons";
import { DropdownList, ListItem, CurrencySellectionBtn, Wrapper, OpenCloseSwitcherBtn, ActualCurrency } from "./CurrencySwitcher.styled";

const currList = [
    {
      label: "USD",
      symbol: "$"
    },
    {
      label: "GBP",
      symbol: "£"
    },
    {
      label: "AUD",
      symbol: "A$"
    },
    {
      label: "JPY",
      symbol: "¥"
    },
    {
      label: "RUB",
      symbol: "₽"
    }
  ]


class CurrencySwitcher extends React.Component {
    static defaultProps = {
        isOpened: false,
        onClick: () => {},
        currencyList: currList,
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
        return (        
            <Wrapper>
                <OpenCloseSwitcherBtn isOpened={this.props.isOpened}>
                    <ActualCurrency>
                        $
                    </ActualCurrency>
                    <Icons id="chevron"/>
                </OpenCloseSwitcherBtn>
                <DropdownList>
                    {this.props.isOpened && this.renderCurrencies()}
                </DropdownList>
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