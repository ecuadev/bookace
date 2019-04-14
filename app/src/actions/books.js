import {
	RemoteMongoClient
} from 'mongodb-stitch-react-native-sdk';

export const SET_BOOK_CATEGORIES = 'SET_BOOK_CATEGORIES';

export const fetchCategories = client => async dispatch => {
	const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-books').db('bookace');
	const categoriesDb = db.collection('categories');
	const categories = await categoriesDb.find().toArray();
	return dispatch({ type: 'SET_BOOK_CATEGORIES', categories });
};
