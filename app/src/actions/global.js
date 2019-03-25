export const SET_STITCH_CLIENT = 'SET_STITCH_CLIENT';
export const SET_ERROR = 'SET_ERROR';

export const setStitchClient = client => ({
	type: SET_STITCH_CLIENT,
	client
});

export const setError = error => ({
	type: SET_ERROR,
	error
});
