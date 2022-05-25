import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {ReactComponent as Logo} from './icons/logo.svg';

import Actionbar from './components/Header/Actionbar';
import Header from './components/Header';
import CurrencySwitcher from './components/Header/CurrencySwitcher';
import MiniCartButton from './components/Header/MiniCartButton/';
import Navbar from './components/Header/Navbar/';
import IconButton from './components/common/IconButton';
import Icons from './components/common/Icons';

import './App.css';

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
						<MiniCartButton itemsCount={'1'}/>
					</Actionbar>
				</Header>
				<IconButton>
					<Icons id="cart" />
				</IconButton>
				<Routes>
					<Route path='/' element={<div>Hello</div>}/>
				</Routes>
			</>
		)
	}
}

export default App;
