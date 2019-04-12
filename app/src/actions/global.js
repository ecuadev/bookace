export const SET_STITCH_CLIENT = 'SET_STITCH_CLIENT';
export const SET_ALERT = 'SET_ALERT';
export const SET_LOADING = 'SET_LOADING';

export const setStitchClient = client => ({
	type: SET_STITCH_CLIENT,
	client
});

export const setAlert = (type, message) => ({
	type: SET_ALERT,
	alert: { type, message }
});

export const setLoading = isLoading => ({
	type: SET_LOADING,
	isLoading
});
