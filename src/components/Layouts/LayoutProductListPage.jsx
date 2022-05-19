import React from 'react';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Actionbar from '../Actionbar/Actionbar';
import CartButtonAction from '../CartButtonAction/CartButtonAction';
import { Outlet } from 'react-router-dom';
import CurrencySwitcherContainer from '../CurrencySwitcher/CurrencySwitcherContainer';

class LayoutProductListPage extends React.Component {
	render() {
		return (
			<>
				<Header {...this.props}/>
				<main>
					<Outlet />
				</main>
			</>
		);
	}
}

export default LayoutProductListPage;
