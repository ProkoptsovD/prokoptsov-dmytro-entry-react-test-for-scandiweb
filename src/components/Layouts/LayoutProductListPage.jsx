import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import Actionbar from '../Actionbar/Actionbar';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import CartButtonAction from '../CartButtonAction/CartButtonAction';
import { Outlet } from 'react-router-dom';

class LayoutProductListPage extends React.Component {
	render() {
		return (
			<>
				<Header>
					<Navbar cats={this.props.cats} />
					<Logo />
					<Actionbar>
						<CurrencySwitcher currency={this.props.currency} />
						<CartButtonAction />
					</Actionbar>
				</Header>
				<main>
					<Outlet />
				</main>
			</>
		);
	}
}

export default LayoutProductListPage;
