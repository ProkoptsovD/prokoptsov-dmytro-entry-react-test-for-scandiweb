import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutProductListPage from './components/Layouts/LayoutProductListPage';
// import Actionbar from './components/Actionbar/Actionbar.jsx';
// import CartButtonAction from './components/CartButtonAction/CartButtonAction.jsx';
// import CartOverlay from './components/CartOverlay/CartOverlay';
// import CurrencySwitcher from './components/CurrencySwitcher/CurrencySwitcher.jsx';
// import Header from './components/Header/Header.jsx';
// import Logo from './components/Logo/Logo.jsx';
// import Navbar from './components/Navbar/Navbar.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';
import CategoryPage from './pages/CategoryPage/CategoryPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
// import { fetchData } from './redux/thunks/fetchData';
import response from './server/dataFromServer.js';

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
	renderLayoutProductListPageRoutes = ({ name, products }) => {
		const isCategoryNameAll = name === 'all';
		const filteredByCategory = products.filter(
			({ category }) => category === name
		);
		const allCategoryPage = (
			<Route
				key={name}
				index
				element={
					<CategoryPage
						category={name}
						products={isCategoryNameAll ? products : filteredByCategory}
					/>
				}
			></Route>
		);
		const otherCategotiesPages = (
			<Route
				key={name}
				path={`/${name}`}
				element={
					<CategoryPage
						category={name}
						products={isCategoryNameAll ? products : filteredByCategory}
					/>
				}
			></Route>
		);

		return isCategoryNameAll ? allCategoryPage : otherCategotiesPages;
	};

	render() {
		return (
			<Routes>
				<Route
					path="/"
					element={<LayoutProductListPage cats={cats} currency={currency} />}
				>
					{response.data.categories.map(this.renderLayoutProductListPageRoutes)}
					<Route path="*" element={<NotFoundPage />}></Route>
				</Route>
			</Routes>
		);
	}
}

export default App;
