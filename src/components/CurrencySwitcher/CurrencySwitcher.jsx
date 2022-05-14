import React from "react";
import icons from '../../icons/icons.svg';
import './CurrencySwitcher.scss';

class CurrencySwitcher extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.state = {
            currency: '$',
        };
    }

    renderCurrency = ({symbol, label}) => {
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
                    defaultChecked={symbol === '$'}
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
    }
    setCurrency = (e) => {
        const currenciesList = document.querySelector('[data-currencies-list]');
        currenciesList.classList.remove('show-currencies');

        if (e.target.nodeName === 'INPUT') {
            const currency = e.target.value;

            this.setState({
                currency,
            });
        };
    }
    showCurrenciesList = () => {
        const currenciesList = document.querySelector('[data-currencies-list]');
        currenciesList.classList.add('show-currencies');
    }
    render() {
        return (        
            <form
                className="currency-switcher"
                role="group">
                <button
                    className="button-svg-only currency-switcher__btn"
                    type="button"
                >
                    <svg>
                        <use href={`${icons}#chevron`}></use>
                    </svg>
                    <span>
                        {this.state.currency}
                    </span>
                </button>
                <ul aria-label="currency"
                    className="currency-switcher__list"
                    data-currencies-list
                >
                    {this.props.currency.map(this.renderCurrency)}
                </ul> 
            </form>
        )
    }
}

export default CurrencySwitcher;