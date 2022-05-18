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
import { getProductById } from './api/query';
import { makeRequest, serverURL } from './api/makeRequest';

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
	renderLayoutProductListPageRoutes = (categories) =>
		categories.map(({ name }) => {
			const isCategoryNameAll = name === this.props.categorybyDefault;
			const allCategoryPage = (
				<Route key={name} index element={<CategoryPage />} />
			);
			const otherCategotiesPages = (
				<Route key={name} path={`/${name}`} element={<CategoryPage />} />
			);

			return isCategoryNameAll ? allCategoryPage : otherCategotiesPages;
		});
	componentDidMount() {
		this.props.getDataToInitApp(this.props.categorybyDefault);
	}
	render() {
		return (
			<Routes>
				<Route path="/" element={<LayoutProductListPage />}>
					{/* {this.renderLayoutProductListPageRoutes(this.props.categories)} */}
					<Route path="*" element={<NotFoundPage />}></Route>
				</Route>
			</Routes>
		);
	}
}

export default App;
