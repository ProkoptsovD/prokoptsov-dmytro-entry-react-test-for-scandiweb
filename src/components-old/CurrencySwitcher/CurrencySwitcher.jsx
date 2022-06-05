import React from "react";
import icons from '../../icons/icons.svg';
import './CurrencySwitcher.scss';

class CurrencySwitcher extends React.Component {
    renderCurrencies = (currenciesArr) => currenciesArr.map(({ symbol, label }) => {
        return (
            <li key={label}
                className="currency-switcher__item"
            >
                <input
                    id={label}
                    name="currency"
                    className="currency-switcher__input"
                    type="radio"
                    value={symbol}
                    defaultChecked={symbol === this.props.actualCurrency.symbol}
                    data-js='currency-input'
                />
                <label
                    htmlFor={label}
                    name="currency"
                    className={"currency-switcher__label"}
                >
                    {`${symbol} ${label}`}
                </label>
            </li>
        )
    });
    toggleCurrenciesVisibility = () => {
        const currenciesList = document.querySelector('[data-currencies-list]');   
        currenciesList.classList.toggle('show-currencies');
    }
    rotateArrow = () => {
        const UP = 'up';
        const DOWN = 'down';

        const arrow = document.querySelector('[data-arrow]');
        const arrowPosition = arrow.dataset.arrow;

        switch (arrowPosition) {
            case UP:
                arrow.classList.remove('rotate-arrow');
                arrow.dataset.arrow = DOWN;
                break;
            case DOWN:
                arrow.classList.add('rotate-arrow');
                arrow.dataset.arrow = UP;
                break;
            default:
                return;
        }
    }
    handleBtnClick = () => {
        this.rotateArrow();
        this.toggleCurrenciesVisibility();
    }
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
            <form
                onClick={this.handleFormInputClick}
                className="currency-switcher"
                role="group">
                <button
                    className="button-svg-only currency-switcher__btn"
                    type="button"
                    onClick={this.handleBtnClick}
                >
                    <svg data-arrow="down">
                        <use href={`${icons}#chevron`}></use>
                    </svg>
                    <span>
                        {this.props.actualCurrency.symbol}
                    </span>
                </button>
                <ul
                    aria-label="currency"
                    className="currency-switcher__list"
                    data-currencies-list
                >
                    {this.renderCurrencies(this.props.allCurrencies)}
                </ul> 
            </form>
        )
    }
}

export default CurrencySwitcher;