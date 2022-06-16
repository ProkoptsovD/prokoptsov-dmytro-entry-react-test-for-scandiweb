import { Component, Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { initAppThunk } from './redux/thunks/initAppThunk';
import { generateHash } from './helpers/generateHash';
import { ReactComponent as Logo } from './icons/logo.svg';

import Header from './components/Header';
import Navbar from './components/Header/Navbar/';
import Actionbar from './components/Header/Actionbar';
import CurrencySwitcher from './components/Header/CurrencySwitcher';
import Cart from './components/Cart/';
import MiniCartButton from './components/MiniCartButton';
import CategoryPage from './pages/CategoryPage/';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage/';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage/TermsAndConditionsPage';
import Toaster from './components/Toaster/';
import Overlay from './components/Overlay/';
import Alert from './components/common/Alert/Alert';
import storage from './services/storage-api';
import './App.css';
import { clearCartAfterOrderSubmit, setCartDataAfterReload, switchActualCurrency } from './redux/actions/actions';
// =============== selectors ================//
import { getCart, getTotalItemsInCart } from './redux/selectors/cart-selector';
import { getIntitalCategories, getIntitalCurrencies } from './redux/selectors/app-selector';
import { getOverlayState } from './redux/selectors/overlay-selector';
import { getAllToasts } from './redux/selectors/toast-selector';
import { getAlertState } from './redux/selectors/alert-selector';
import { getActualCurrency } from './redux/selectors/currency-selector';

class App extends Component {
	componentDidMount () {
		const { initApp, setCart, clearCart, setCurrency, currency } = this.props;
		const cartFromLocalStorage = storage.load('cart');
		const currencyFromLocalStorage = storage.load('currency');
		
		initApp();
		cartFromLocalStorage
						? setCart(cartFromLocalStorage)
						: clearCart();
		setCurrency( currencyFromLocalStorage || currency);
	}
	renderRoutes = () => {
		const { categories } = this.props;
		
		return categories.map(({ name }) => {
			return (
				<Fragment key={generateHash()}>
					<Route
						path={`/${name}/:id`}
						element={<ProductPage />}
					/>
					<Route
						path={`/${name}`}
						element={<CategoryPage />}
					/>
				</Fragment>)
		});
	}
	render() {
		const { categories, isOverlayOpened, itemsCount, toastList, showAlert } = this.props;
		const isThereAnyToast = toastList.length !== 0;

		return (
			<>
				<Header>
					<Navbar tabList={categories}/>
					<Logo />
					<Actionbar>
						<CurrencySwitcher />
						<MiniCartButton itemsCount={itemsCount}/>
					</Actionbar>
				</Header>
				<main>
					<Routes>
						{this.renderRoutes()}
						<Route path='/cart/:id' element={<OrderPage />} />
						<Route path='/cart' element={<CartPage title="Cart"/>} />
						<Route path='/terms-and-conditions' element={<TermsAndConditionsPage />} />
						<Route path='/' element={<Navigate to="/all" replace={true}/>} />
					</Routes>
				</main>
				{
					isThereAnyToast
						? <Toaster toastList={toastList} delay={2000}/>
						: null
				}
				{
					isOverlayOpened ?   <Overlay key='mini-cart' modalType='mini-cart'>
											<Cart
												cartType="mini"
												galleryType="mini"
												optionPickerType="mini"
												quantatyPanelType="mini"
												productCardType="mini"
											/>
										</Overlay>
									: 	null
				}
				{
					showAlert 	? 	<Alert
										to='/'
										controlsText={'Back home'}
									/>
								: 	null
				}
			</>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        categories: getIntitalCategories(state),
        currencies: getIntitalCurrencies(state),
        itemsCount: getTotalItemsInCart(state),
		isOverlayOpened: getOverlayState(state),
		toastList: getAllToasts(state),
		showAlert: getAlertState(state),
		cart: getCart(state),
		currency: getActualCurrency(state),
    }
}
const mapDispatchToProps = (dispatch) => ({
    initApp: () => {
        dispatch(initAppThunk())
    },
	setCart: (cart) => {
		dispatch(setCartDataAfterReload(cart));
	},
	clearCart: () => {
		dispatch(clearCartAfterOrderSubmit());
	},
	setCurrency: (newCurrency) => {
		dispatch(switchActualCurrency(newCurrency));
	}
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
