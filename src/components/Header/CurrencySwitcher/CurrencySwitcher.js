import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Icons from "../../common/Icons";
import { DropdownList, ListItem, CurrencySellectionBtn, Wrapper, OpenCloseSwitcherBtn, ActualCurrency } from "./CurrencySwitcher.styled";

import {initCurrencySwitcher, switchActualCurrency, updateActualCurrencyInCart, sumTotalPrice, openCurrencyList, closeCurrencyList} from '../../../redux/actions/actions'

class CurrencySwitcher extends Component {
    static defaultProps = {
        isOpened: false,
        currencyList: [{}],
        actualCurrency: 0,
    }
    renderCurrencies = () => {
        const { currencyList } = this.props;
        
        return currencyList.map(({ symbol, label }, idx) => 
                <ListItem key={label}>
                    <CurrencySellectionBtn
                        value={idx}
                        onClick={this.handleSelectionBtnClick}
                    >
                        {`${symbol} ${label}`}
                    </CurrencySellectionBtn>
                </ListItem>
           );
    }
    handleOpenCloseBtnClick = () => {
        const { isOpened, open, close } = this.props;

        isOpened ? close() : open();
    }
    handleSelectionBtnClick = (e) => {
        const { switchActualCurrency, actualCurrency, close } = this.props;
        const picked = +e.currentTarget.value;

        picked !== actualCurrency && switchActualCurrency(picked);
        close();
    }
    render() {
        const { currencyList, actualCurrency, isOpened } = this.props;
        const symbol = currencyList[actualCurrency]?.symbol

        return (        
            <Wrapper>
                <OpenCloseSwitcherBtn
                    onClick={this.handleOpenCloseBtnClick}
                >
                    <ActualCurrency>
                        {symbol}
                    </ActualCurrency>
                    <Icons id="chevron"/>
                </OpenCloseSwitcherBtn>
                {
                    isOpened &&  <DropdownList>
                                    {this.renderCurrencies()}
                                </DropdownList>
                }
            </Wrapper>
        )
    }
}

CurrencySwitcher.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    currencyList: PropTypes.arrayOf(PropTypes.shape({
            symbol: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })),
    actualCurrency: PropTypes.number.isRequired,
    switchActualCurrency: PropTypes.func,
    open: PropTypes.func,
    close: PropTypes.func,
}

const mapStateToProps = (state) => ({
    currencyList: state.initial.currencies,
    actualCurrency: state.currency.actualCurrency.index,
    isOpened: state.currency.isOpened,
});

const mapDispatchToProps = (dispatch) => ({
    switchActualCurrency: (currencyToSet) => {
        dispatch(switchActualCurrency(currencyToSet));
    },
    open: () => {
        dispatch(openCurrencyList());
    },
    close: () => {
        dispatch(closeCurrencyList());
    },
    updateCurrencyInCart: (currency) => {
        dispatch(updateActualCurrencyInCart(currency));
    },
    sumTotalPriceInCart: () => {
        dispatch(sumTotalPrice());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);