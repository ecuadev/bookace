import React, { Component } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Config from 'react-native-config';
import { LoginManager } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
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

		GoogleSignin.configure({
			iosClientId: Config.GOOGLE_CLIENT_ID
		});
	}

	onFacebookLogin() {
		// Attempt a login using the Facebook login dialog asking for default permissions.
		LoginManager.logInWithReadPermissions(['public_profile']).then(
			result => {
				if (result.isCancelled) {
					console.log('Login cancelled');
				} else {
					console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
				}
			},
			error => {
				console.log(`Login fail with error: ${error}`);
			}
		);
	}

	async onGoogleLogin() {
		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();
			console.log(userInfo);
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				// user cancelled the login flow
			} else if (error.code === statusCodes.IN_PROGRESS) {
				// operation (f.e. sign in) is in progress already
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				// play services not available or outdated
			} else {
				// some other error happened
			}
		}
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

	render() {
		return (
			<ImageBackground source={Images.authBackground} style={styles.container}>
				<DismissKeyboardView style={styles.inner}>
					<View style={styles.logo}>
						<Image source={Images.authLogo} resizeMode="contain" style={styles.logoImage} />
					</View>


					<View style={styles.form}>
						<TextBox placeholder="Username" ref={this.textInput} />
						<TextBox placeholder="Password" type="password" />
						<Button onPress={goHome} style={styles.signinButton}>SIGN IN</Button>

						<View style={styles.separator}>
							<View style={styles.separatorLine} />
							<Text style={styles.separatorText}>OR</Text>
							<View style={styles.separatorLine} />
						</View>

						<TransparentButton onPress={this.onFacebookLogin} icon={Images.facebookAuthIcon} style={styles.fbButton}>CONTINUE WITH FACEBOOK</TransparentButton>
						<TransparentButton onPress={this.onGoogleLogin} icon={Images.googleAuthIcon}>CONTINUE WITH GOOGLE</TransparentButton>

						<View style={styles.bottomLinks}>
							<LinkButton style={styles.bottomLink} containerStyle={styles.bottomLinkContainer}>Forgot password</LinkButton>
							<LinkButton style={styles.bottomLink} containerStyle={styles.bottomLinkContainer} onPress={this.toSignup}>Create account</LinkButton>
						</View>
					</View>
				</DismissKeyboardView>
			</ImageBackground>
		);
	}
}
