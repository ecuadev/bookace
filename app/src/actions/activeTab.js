import { goToTab, goToCategory } from '../config/navigation';

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';

export const setActiveTab = index => ({
	type: SET_ACTIVE_TAB,
	index,
});

// SET THE CURRENT TAB AND UPDATES REDUX TAB STATE
export function setTab(index, title) {
	return dispatch => {
		goToTab(index);
		dispatch(setActiveTab(index));
		if (typeof title !== 'undefined') {
			goToCategory(title);
		}
	};
}
