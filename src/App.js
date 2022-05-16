import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Actionbar from './components/Actionbar/Actionbar.jsx';
import CartButtonAction from './components/CartButtonAction/CartButtonAction.jsx';
import CartOverlay from './components/CartOverlay/CartOverlay';
import CurrencySwitcher from './components/CurrencySwitcher/CurrencySwitcher.jsx';
import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';
import CategoryPage from './pages/CategoryPage/CategoryPage.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import { fetchData } from './redux/thunks/fetchData';

const cats = [{ name: 'all' }, { name: 'tech' }, { name: 'clothes' }];
const currency = [
	{
		symbol: '$',
		label: 'USD',
	},
	{
		symbol: '£',
		label: 'GBP',
	},
	{
		symbol: 'A$',
		label: 'AUD',
	},
	{
		symbol: '¥',
		label: 'JPY',
	},
	{
		symbol: '₽',
		label: 'RUB',
	},
];

class App extends React.Component {
	constructor(props) {
		super(props);

		this.props = props;
		// this.props.store.dispatch(fetchData());
	}

	render() {
		return (
			<div>
				<Header>
					<Navbar cats={cats} />
					<Logo />
					<Actionbar>
						<CurrencySwitcher currency={currency} />
						<CartButtonAction />
					</Actionbar>
				</Header>
				<main>
					<Routes>
						<Route path="/category" element={<ProductPage />}></Route>
						<Route
							path="/"
							element={<CategoryPage state={this.props.store.getState} />}
						></Route>
						<Route path="/cart" element={<CartPage />}></Route>
						{/* <CartOverlay /> */}
					</Routes>
				</main>
			</div>
		);
	}
}

export default App;
