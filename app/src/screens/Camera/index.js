import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Images from '@assets/images';

import TabBar from '../../components/TabBar/camera';

import styles from './styles';

export default class Camera extends Component {
	takePicture() {
		if (this.camera) {
			const options = {
				quality: 0.5,
				base64: true
			};
			return this.camera.takePictureAsync(options);
		}
	}

	render() {
		const { handleClose } = this.props;

		return (
			<View style={styles.container}>
				<RNCamera
					ref={ref => { this.camera = ref; }}
					style={styles.preview}
					type={RNCamera.Constants.Type.back}
					flashMode={RNCamera.Constants.FlashMode.on}
					captureAudio={false}
				/>
				<Image source={Images.cameraOverlay} style={styles.overlay} resizeMode="contain" />
				<TabBar takePicture={this.takePicture.bind(this)} handleClose={handleClose} />
			</View>
		);
	}
}
