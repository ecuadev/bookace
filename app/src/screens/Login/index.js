import React, { Component } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Images from '@assets/images';

import DismissKeyboardView from '../../components/DismissKeyboardView';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import TransparentButton from '../../components/Button/TransparentButton';
import { goHome } from '../../navigation';

import styles from './styles';


export default class Login extends Component {
	constructor(props) {
		super(props);
		this.textInput = React.createRef();
	}

	login() {
		goHome();
	}

	toSignup() {
		Navigation.push('AuthStack', {
			component: {
				name: 'bookace.Signup',
				options: {
					topBar: {
						visible: false,
						height: 0
					}
				}
			}
		});
	}

	forgotPassword() {
		Navigation.push('AuthStack', {
			component: {
				name: 'bookace.ForgotPass',
				options: {
					topBar: {
						visible: false,
						height: 0
					}
				}
			}
		});
	}

	render() {
		return (
			<ImageBackground source={Images.authBackground} style={styles.container}>
				<View style={styles.logo}>
					<Image source={Images.authLogo} resizeMode="contain" style={styles.logoImage} />
				</View>


				<View style={styles.form}>
					<TextBox placeholder="Username" ref={this.textInput} />
					<TextBox placeholder="Password" type="password" />
					<Button onPress={this.login} style={styles.signinButton}>SIGN IN</Button>

					<View style={styles.separator}>
						<View style={styles.separatorLine} />
						<Text style={styles.separatorText}>OR</Text>
						<View style={styles.separatorLine} />
					</View>

					<TransparentButton onPress={this.login} icon={Images.facebookAuthIcon} style={styles.fbButton}>CONTINUE WITH FACEBOOK</TransparentButton>
					<TransparentButton onPress={this.login} icon={Images.googleAuthIcon}>CONTINUE WITH GOOGLE</TransparentButton>

					<View style={styles.bottomLinks}>
						<LinkButton style={styles.bottomLink} containerStyle={styles.bottomLinkContainer} onPress={this.forgotPassword}>Forgot password</LinkButton>
						<LinkButton style={styles.bottomLink} containerStyle={styles.bottomLinkContainer} onPress={this.toSignup}>Create account</LinkButton>
					</View>
				</View>
			</ImageBackground>
		);
	}
}
