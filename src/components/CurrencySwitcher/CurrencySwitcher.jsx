import React from "react";
import icons from '../../icons/icons.svg';
import ButtonSvgOnly from "../ButtonSvgOnly/ButtonSvgOnly";
import './CurrencySwitcher.scss';

class CurrencySwitcher extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    renderCurrency = ({symbol, label}) => {
        return (
            <option
                key={label}
                value={label}
                defaultValue={symbol === '$'}
                className={"currency-switcher__option"}
            >
                {symbol}
            </option>
        )
    }

    render() {
        return (        
                <ButtonSvgOnly
                    className={"currency-switcher__btn"}
                    icon={'#chevron'}
                />
        )
    }
}

export default CurrencySwitcher;