import {
	SET_STITCH_CLIENT,
	SET_ALERT,
	SET_LOADING
} from '../actions/global';

const initialState = {
	client: null,
	alert: {},
	isLoading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_STITCH_CLIENT:
			return { ...state, client: action.client };
		case SET_ALERT:
			return { ...state, alert: action.alert };
		case SET_LOADING:
			return { ...state, isLoading: action.isLoading };
		default:
			return state;
	}
};
