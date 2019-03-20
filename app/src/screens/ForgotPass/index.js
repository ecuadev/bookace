/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Images from '@assets/images';
import DismissKeyboardView from '../../components/DismissKeyboardView';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import TransparentButton from '../../components/Button/TransparentButton';
import { goHome } from '../../navigation';
import styles from './styles';

export class ForgotPass extends Component {
	constructor(props) {
		super(props);
		this.email = React.createRef();
	}

	goBack() {
		Navigation.push('AuthStack', {
			component: {
				name: 'bookace.Login',
				options: {
					topBar: {
						visible: false,
						height: 0
					}
				}
			}
		});
	}
	
	// TODO
	// resendEmail(){}

	render() {
		return (
			<ImageBackground source={Images.authBackground} style={styles.container}>
				<DismissKeyboardView style={styles.inner}>
					<View style={styles.heading}>
						<Text style={styles.title}>Forgot Password?</Text>
					</View>
					<View style={styles.form}>

						<TextBox
							placeholder="Email"
							type="email"
							ref={this.email}
						/>

						<Button onPress={this.sendEmail}>SEND EMAIL</Button>

						<View style={styles.bottomLinks}>
							<LinkButton style={styles.bottomLink} containerStyle={styles.bottomLinkContainer} onPress={this.goBack}>Back</LinkButton>
							<LinkButton style={styles.bottomLink} containerStyle={styles.bottomLinkContainer} onPress={this.toSignup}>Resend Email</LinkButton>
						</View>
					</View>
				</DismissKeyboardView>
			</ImageBackground>
		);
	}
}

export default ForgotPass;
