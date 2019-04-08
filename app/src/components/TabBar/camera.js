import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Images from '@assets/images';

import styles from './styles';

export default class TabBar extends Component {
	handleChooseFromAlbum() {
		ImagePicker.launchImageLibrary({}, response => {
			console.log(response.uri)
		});
	}

	async handleTakePicture() {
		const { takePicture } = this.props;

		const data = await takePicture();
		console.log(data.uri);
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
