import React from "react";
import ButtonSvgOnly from "../ButtonSvgOnly/ButtonSvgOnly";
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
                className={"currency-switcher__item"}
            >
                <input
                    id={label}
                    name="currency"
                    className={"currency-switcher__input"}
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
                onClick={this.setCurrency}
                className={"currency-switcher"}
                role="group">
                <ButtonSvgOnly
                    onClick={this.showCurrenciesList}
                    className={"currency-switcher__btn"}
                    icon={'#chevron'}
                >
                    <span>
                        {this.state.currency}
                    </span>
                </ButtonSvgOnly>
                <ul aria-label="currency"
                    className={"currency-switcher__list"}
                    data-currencies-list
                >
                    {this.props.currency.map(this.renderCurrency)}
                </ul> 
            </form>
        )
    }
}

export default CurrencySwitcher;