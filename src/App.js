import './App.css';
import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ProductCardsGrid from './components/ProductCardsGrid/ProductCardsGrid.jsx';
import CategoryPage from './pages/CategoryPage/CategoryPage.jsx';

const cats = [{ name: 'all' }, { name: 'tech' }, { name: 'clothes' }];

function App() {
	return (
		<div>
			<Header>
				<Navbar cats={cats} />
				<Logo />
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
