/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import {
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
	Image,
	Animated
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Images from '@assets/images';
import DismissKeyboardView from '../../components/DismissKeyboardView';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import styles from './styles';

export class ForgotPass extends Component {
	constructor(props) {
		super(props);
		this.email = React.createRef();
	}

	// TODO

	// sendEmail(){}

	render() {
		const { componentId } = this.props;

		return (
			<ImageBackground source={Images.authBackground} style={styles.container}>
				<DismissKeyboardView style={styles.inner}>
					<Animated.View style={{ ...styles.header }}>
						<View style={styles.headerButtonLeftView}>
							<TouchableOpacity
								onPress={() => Navigation.pop(componentId)}
								style={styles.headerButtonLeft}>
								<Image
									source={Images.backIcon}
									style={styles.headerButtonLeftIcon}
								/>
							</TouchableOpacity>
						</View>
					</Animated.View>

					<View style={styles.heading}>
						<Text style={styles.title}>Forgot Password?</Text>
					</View>
					<View style={styles.form}>
						<View style={styles.formFields}>
							<TextBox placeholder="Email" type="email" ref={this.email} />

							<Button onPress={this.sendEmail}>SEND EMAIL</Button>
						</View>
					</View>
				</DismissKeyboardView>
			</ImageBackground>
		);
	}
}

export default ForgotPass;
