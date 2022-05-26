import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {ReactComponent as Logo} from './icons/logo.svg';

import Actionbar from './components/Header/Actionbar';
import Header from './components/Header';
import CurrencySwitcher from './components/Header/CurrencySwitcher';
import MiniCartButton from './components/MiniCart/MiniCartButton';
import Navbar from './components/Header/Navbar/';
import Overlay from './components/Overlay/';
import MiniCart from './components/MiniCart/';
import CategoryPage from './pages/CategoryPage/';

import './App.css';
import {product} from './api/product';
import Gallery from './components/Gallery/Gallery';

class App extends React.Component {
// 	renderRoutes = (categories) =>
// 		categories.map(({ name }) => (
// 		<Route
// 			key={name}
// 			path={`/${name}`}
// 			element={<CategoryPageContainer key={name} id={name} />}
// 		/>
// 		)

// );
	render() {
		const names = ['all', 'clothes', 'tech'];

		return (
			<>
				<Header>
					<Navbar tabList={names}/>
					<Logo />
					<Actionbar>
						<CurrencySwitcher />
						<MiniCartButton itemsCount={'0'}/>
					</Actionbar>
				</Header>
				<main>
					<Routes>
						<Route path='/' element={
							<CategoryPage productList={product}/>
							}
						/>
					</Routes>
				</main>
				<Gallery />

				{null && <Overlay>
							<MiniCart />
						</Overlay>}
			</>
		)
	}
}

export default App;
