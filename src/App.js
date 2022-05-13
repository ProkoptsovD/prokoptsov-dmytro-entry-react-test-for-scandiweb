import './App.css';
import Actionbar from './components/Actionbar/Actionbar.jsx';
import CartButtonAction from './components/CartButtonAction/CartButtonAction.jsx';
import CurrencySwitcher from './components/CurrencySwitcher/CurrencySwitcher.jsx';
import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProductCardsGrid from './components/ProductCardsGrid/ProductCardsGrid.jsx';
import CategoryPage from './pages/CategoryPage/CategoryPage.jsx';

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
				<CategoryPage>
					<ProductCardsGrid />
				</CategoryPage>
			</main>
		</div>
	);
}

export default App;
