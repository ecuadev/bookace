import {
	RemoteMongoClient,
	UserPasswordCredential,
	FacebookCredential,
	GoogleCredential
} from 'mongodb-stitch-react-native-sdk';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import Config from 'react-native-config';

GoogleSignin.configure({
	webClientId: Config.GOOGLE_CLIENT_WEB_ID,
	offlineAccess: true,
	iosClientId: Config.GOOGLE_CLIENT_IOS_ID
});


export const SET_USER_PROFILE = 'SET_USER_PROFILE';

const setUserData = data => ({
	type: SET_USER_PROFILE,
	data
});

export const setCurrentUser = client => dispatch => {
	const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-books').db('bookace');
	const users = db.collection('users');

	return users.findOne({}, { _id: 0 }).then(async data => {
		if (data) {
			// user exists
			if (data.pictureSource === 's3') {
				data.picture = await client.callFunction('getPicture', [data.picture]);
			}

			dispatch(setUserData(data));
		} else {
			// user does not exist
			dispatch(createUser(client));
		}
	});
};

export const createUser = client => dispatch => {
	const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-books').db('bookace');
	const users = db.collection('users');

	return users.insertOne({ ...client.auth.user.profile.data, owner_id: client.auth.user.id })
		.then(() => {
			dispatch(setUserData(client.auth.user.profile.data));
		});
};

export const updateUser = (id, data, client) => dispatch => {
	const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-books').db('bookace');
	const users = db.collection('users');

	return users.updateOne({ _id: id }, { $set: { ...data } })
		.then(() => {
			dispatch(setUserData(data));
		});
};

export const updateUserPicture = (id, data, client) => dispatch => {
	const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-books').db('bookace');
	const users = db.collection('users');

	return users.updateOne({ _id: id }, { $set: { ...data, pictureSource: 's3' } })
		.then(async () => {
			data.picture = await client.callFunction('getPicture', [data.picture]);
			dispatch(setUserData({ ...data, pictureSource: 's3' }));
		});
};

export const facebookLogin = async () => {
	try {
		const result = await LoginManager.logInWithReadPermissions([
			'public_profile'
		]);

		if (!result.isCancelled) {
			const token = await AccessToken.getCurrentAccessToken();
			return new FacebookCredential(token.accessToken);
		}
	} catch (error) {
		console.log(`Login fail with error: ${error}`);
	}
};

export const googleLogin = async () => {
	try {
		await GoogleSignin.hasPlayServices();
		const userInfo = await GoogleSignin.signIn();
		const { serverAuthCode } = userInfo;

		if (serverAuthCode === null) {
			throw new Error('Failed to get serverAuthCode!');
		}

		return new GoogleCredential(serverAuthCode);
	} catch (error) {
		if (error.code === statusCodes.SIGN_IN_CANCELLED) {
			// user cancelled the login flow
		} else if (error.code === statusCodes.IN_PROGRESS) {
			// operation (f.e. sign in) is in progress already
		} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
			// play services not available or outdated
		} else {
			// some other error happened
		}
	}
};


export const loggout = client => async dispatch => {
	await GoogleSignin.revokeAccess();
	await GoogleSignin.signOut();
	await client.auth.logout();

	return dispatch(setUserData({}));
};
