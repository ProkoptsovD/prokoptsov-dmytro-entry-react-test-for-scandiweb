import React from 'react';
import { Route, Routes, parsePath } from 'react-router-dom';
import './App.css';
import LayoutProductListPage from './components/Layouts/LayoutProductListPage.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';
import CategoryPageContainer from './pages/CategoryPage/CategoryPageContainer';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

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
					path={`/:${name}`}
					element={<CategoryPageContainer />}
				/>
			);

			return isCategoryNameAll ? allCategoryPage : otherCategotiesPages;
		});
	render() {
		return (
			<Routes>
				<Route path="/" element={<LayoutProductListPage {...this.props} />}>
					{this.renderRoutes(this.props.categories)}
					<Route path="*" element={<NotFoundPage />}></Route>
				</Route>
			</Routes>
		);
	}
}

export default App;
