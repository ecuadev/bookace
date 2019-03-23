import { SET_STITCH_CLIENT } from '../actions/global';

const initialState = {
	client: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_STITCH_CLIENT:
			return {
				...state,
				client: action.client
			};
		default:
			return state;
	}
};
