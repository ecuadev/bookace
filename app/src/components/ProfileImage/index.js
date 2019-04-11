import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Images from '@assets/images';
import binaryToBase64 from 'binaryToBase64';

const ProfileImage = ({ picture, source }) => {
	let image;
	if (source === 's3') {
		if (typeof picture === 'string') {
			image = { uri: `data:image/png;base64,${picture}` }
		} else {
			image = { uri: `data:image/png;base64,${binaryToBase64(picture.buffer)}`}
		}
	} else {
		image = picture ? { uri: picture } : Images.profilePic;
	}

	return (
		<Image
			source={image}
			style={{ width: '100%', height: '100%' }}
		/>
	);
};

ProfileImage.propTypes = {
	picture: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	source: PropTypes.string
};

ProfileImage.defaultProps = {
	picture: '',
	source: ''
};

export default ProfileImage;
