import React from "react";
import { connect } from "react-redux";
import { initCurrencySwitcher, switchActualCurrency } from "../../redux/actions/actions";
import { fetchCurrencies } from "../../redux/thunks/fetchCurrencies";
import CurrencySwitcher from "./CurrencySwitcher";

class CurrencySwitcherContainer extends React.Component { 
    componentDidMount() {
         const {currencyByDefault } = this.props;
        this.props.initSwitcher(currencyByDefault);
    }
    render() {
        return <CurrencySwitcher {...this.props} />
    }
}
const mapStateToProps = (state) => {
    const { default: { currency: currencyByDefault }, currencies: allCurrencies } = state.initial;
    const { actualCurrency } = state.currency;

    return {
        currencyByDefault,
        allCurrencies,
        actualCurrency,
    };
}
const mapDispatchToProps = (dispatch) => ({
    initSwitcher: (currenciesList, actualCurrency) => {
        dispatch(initCurrencySwitcher(currenciesList, actualCurrency));
    },
    switchActualCurrency: (currencyToSet) => {
        dispatch(switchActualCurrency(currencyToSet));
    },
})


export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcherContainer);