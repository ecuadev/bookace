import { SET_ACTIVE_TAB } from '../actions/activeTab';

const initialState = {
	tab: 0,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVE_TAB:
			return { ...state, tab: action.index };

		default:
			return state;
	}
};
