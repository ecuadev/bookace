import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import Images from '@assets/images';
import Config from 'react-native-config';
import uuidv1 from 'uuid/v1';

import styles from './styles';
import { setAlert } from '../../actions/global';

class TabBar extends Component {
	handleChooseFromAlbum() {
		const options = {
			quality: 0.5,
			base64: true
		};

		ImagePicker.launchImageLibrary(options, response => {
			this.uploadImage(response);
		});
	}

	async handleTakePicture() {
		const { takePicture } = this.props;

		const data = await takePicture();
		this.uploadImage(data);
	}

	uploadImage(image) {
		const { setAlert, client } = this.props;
		const filename = `${Config.AWS_BOOKS_PICTURES_FOLDER_NAME}${uuidv1()}.${image.fileName.split('.').pop()}`;

		client.callFunction('uploadPicture', [
			image.data,
			filename,
			image.type
		]).then(result => {
			setAlert('success', 'Image succesfully uploaded.');
		}).catch(error => {
			console.log('error', error)
			setAlert('error', 'There was an error uploading the image.');
		});
	}

	render() {
		const { handleClose } = this.props;

		return (
			<View style={[styles.tabBar, styles.tabBarCamera]} ref={ref => { this.tabBar = ref; }}>
				<TouchableOpacity
					onPress={handleClose}
					style={styles.tab}>
					<Image source={Images.cameraBackIcon} style={styles.image} />
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={1}
					onPress={this.handleTakePicture.bind(this)}
					style={[styles.cameraTab, styles.cameraTabActive]}>
					<View style={[styles.cameraTabInner, styles.cameraTabInnerActive]}>
						<Image source={Images.cameraTabIcon} style={[styles.image, styles.cameraImage]} />
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={this.handleChooseFromAlbum.bind(this)}
					style={styles.tab}>
					<Image source={Images.cameraPhotoLibrary} style={styles.image} />
				</TouchableOpacity>
			</View>
		);
	}
}

export default connect(
	null,
	{ setAlert }
)(TabBar);
