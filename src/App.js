import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import Actionbar from './components/Actionbar/Actionbar.jsx';
// import CartButtonAction from './components/CartButtonAction/CartButtonAction.jsx';
// import CartOverlay from './components/CartOverlay/CartOverlay';
// import CurrencySwitcher from './components/CurrencySwitcher/CurrencySwitcher.jsx';
// import Header from './components/Header/Header.jsx';
// import Logo from './components/Logo/Logo.jsx';
// import Navbar from './components/Navbar/Navbar.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';
import CategoryPageContainer from './pages/CategoryPage/CategoryPageContainer';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import Header from './components/Header/Header';

class App extends React.Component {
	renderRoutes = (categories) =>
		categories.map(({ name }) => {
			const isCategoryNameAll = name === this.props.categorybyDefault;
			const allCategoryPage = (
				<Route key={name} index element={<CategoryPageContainer />} />
			);
			const otherCategotiesPages = (
				<Route
					key={name}
					path={`/${name}`}
					element={<CategoryPageContainer />}
				/>
			);

			return isCategoryNameAll ? allCategoryPage : otherCategotiesPages;
		});
	render() {
		return (
			<>
				<Header />
				<Switch>
					<Route path="/">
						{this.renderRoutes(this.props.categories)}
						<Route path="*" element={<NotFoundPage />}></Route>
					</Route>
				</Switch>
			</>
		);
	}
}

export default App;
