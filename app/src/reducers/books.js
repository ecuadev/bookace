import {
	SET_BOOK_CATEGORIES
} from '../actions/books';

const initialState = {
	categories: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_BOOK_CATEGORIES:
			return { ...state, categories: action.categories };
		default:
			return state;
	}
};
