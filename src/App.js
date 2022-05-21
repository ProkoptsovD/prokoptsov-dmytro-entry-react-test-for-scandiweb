import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import CategoryPageContainer from './pages/CategoryPage/CategoryPageContainer';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CartOverlay from './components/CartOverlay/CartOverlay';

class App extends React.Component {
	renderRoutes = (categories) =>
		categories.map(({ name }) => (
		<Route
			key={name}
			path={`/${name}`}
			element={<CategoryPageContainer key={name} id={name} />}
		/>
		)

);
	render() {
		return (
			<>
				<Header {...this.props} />
				<main>
					<Routes>
						<Route
							path="/"
							element={
								<Navigate replace to={`/${this.props.categorybyDefault}`} />
							}
						/>
						{this.renderRoutes(this.props.categories)}
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
					<CartOverlay
						isOpened={this.props.isMiniCartOpened}
						closeMiniCart={this.props.closeMiniCart}
						cart={this.props.cart}
					/>
				</main>
			</>
		);
	}
}

export default App;
