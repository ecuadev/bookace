import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Images from '@assets/images';

import styles from './styles';

export default class Camera extends Component {
	async takePicture() {
		if (this.camera) {
			const options = { quality: 0.5, base64: true };
			const data = await this.camera.takePictureAsync(options);
			console.log(data.uri);
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<RNCamera
					ref={ref => { this.camera = ref; }}
					style={styles.preview}
					type={RNCamera.Constants.Type.back}
					flashMode={RNCamera.Constants.FlashMode.on}
					onGoogleVisionBarcodesDetected={({ barcodes }) => {
						console.log(barcodes);
					}}
				/>
				<Image source={Images.cameraOverlay} style={styles.overlay} resizeMode="contain" />
			</View>
		);
	}
}
