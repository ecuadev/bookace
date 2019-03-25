import {
	SET_STITCH_CLIENT,
	SET_ERROR
} from '../actions/global';

const initialState = {
	client: null,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_STITCH_CLIENT:
			return { ...state, client: action.client };
		case SET_ERROR:
			return { ...state, error: action.error };
		default:
			return state;
	}
};
