import {
	SET_STITCH_CLIENT,
	SET_ALERT
} from '../actions/global';

const initialState = {
	client: null,
	alert: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_STITCH_CLIENT:
			return { ...state, client: action.client };
		case SET_ALERT:
			return { ...state, alert: action.alert };
		default:
			return state;
	}
};
