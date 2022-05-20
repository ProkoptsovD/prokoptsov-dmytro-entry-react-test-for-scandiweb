import { appAPI } from '../../api/appAPI';
import { initApp } from '../actions/actions';

export const initAppThunk = () => {
	return (dispatch) => {
		appAPI.getDataToInitApp().then(data => {
			const { categories, currencies } = data;
			dispatch(initApp({ categories, currencies }));
		})
	};
};
