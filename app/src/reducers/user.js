import { SET_USER_PROFILE } from '../actions/user';

const initialState = {
	profile: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_PROFILE:
			return {
				...state,
				profile: {
					...state.profile,
					...action.data
				}
			};
		default:
			return state;
	}
};
