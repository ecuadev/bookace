export const SET_STITCH_CLIENT = 'SET_STITCH_CLIENT';
export const SET_ALERT = 'SET_ALERT';

export const setStitchClient = client => ({
	type: SET_STITCH_CLIENT,
	client
});

export const setAlert = (type, message) => ({
	type: SET_ALERT,
	alert: { type, message }
});
