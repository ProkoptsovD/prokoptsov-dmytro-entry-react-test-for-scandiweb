import React from "react";
import { connect } from "react-redux";
import { switchActualCurrency } from "../../redux/actions/actions";
import { fetchCurrencies } from "../../redux/thunks/fetchCurrencies";
import CurrencySwitcher from "./CurrencySwitcher";

class CurrencySwitcherContainer extends React.Component { 
    render() {
        return <CurrencySwitcher {...this.props} />
    }
}
const mapStateToProps = (state) => {
    const { actualCurrency, allCurrencies } = state.currency;
    
    return {
        actualCurrency,
        allCurrencies,
    };
}
const mapDispatchToProps = (dispatch) => ({
    setCurrencies: () => {
        dispatch(fetchCurrencies());
    },
    switchActualCurrency: (currencyToSet) => {
        dispatch(switchActualCurrency(currencyToSet));
    },
})


export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcherContainer);