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

import data from './server/dataFromServer.js';
console.log(data);

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

function App() {
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
				{/* <CategoryPage />
				<ProductPage data={data} /> */}
				<CartOverlay />
				{/* <CartPage /> */}
			</main>
		</div>
	);
}

export default App;
