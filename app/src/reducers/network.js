import { CHANGE_CONNECTION_STATUS } from '../actions/network';

const initialState = {
	connected: false,
	hasCheckedStatus: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_CONNECTION_STATUS:
			return {
				...state,
				hasCheckedStatus: true,
				connected: action.status !== 'none'
			};
		default:
			return state;
	}
};
