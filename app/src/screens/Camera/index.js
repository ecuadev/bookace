import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { RNCamera } from 'react-native-camera';
import Images from '@assets/images';

import styles from './styles';

export default class Camera extends Component {
	constructor(props) {
		super(props);

		this.state = {
			accessCamera: false
		};
	}

	componentDidMount() {
		this.navigationEventListener = Navigation.events().bindComponent(this);
	}

	componentWillUnmount() {
		if (this.navigationEventListener) {
			this.navigationEventListener.remove();
		}
	}

	componentDidAppear() {
		this.setState({ accessCamera: true });
	}

	componentDidDisappear() {
		this.setState({ accessCamera: false });
	}

	async takePicture() {
		if (this.camera) {
			const options = { quality: 0.5, base64: true };
			const data = await this.camera.takePictureAsync(options);
			console.log(data.uri);
		}
	}

	render() {
		const { accessCamera } = this.state;
		return (
			<View style={styles.container}>
				{ accessCamera && (
					<RNCamera
						ref={ref => { this.camera = ref; }}
						style={styles.preview}
						type={RNCamera.Constants.Type.back}
						flashMode={RNCamera.Constants.FlashMode.on}
						captureAudio={false}
					/>
				)}
				<Image source={Images.cameraOverlay} style={styles.overlay} resizeMode="contain" />
			</View>
		);
	}
}
