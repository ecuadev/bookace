import React, { Component } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Config from 'react-native-config';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';


import { Stitch, UserPasswordCredential, FacebookCredential, GoogleCredential } from 'mongodb-stitch-react-native-sdk';


import validator from 'validator';
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

		this.state = {
			email: '',
			emailError: null,
			password: '',
			passwordError: null,
			currentUserId: undefined,
			client: undefined
		};
	}

	componentDidMount() {
		GoogleSignin.configure({
			iosClientId: Config.GOOGLE_CLIENT_ID
		});

		Stitch.initializeDefaultAppClient(Config.STITCH_CLIENT_APP_ID).then(client => {
			this.setState({ client });

			if (client.auth.isLoggedIn) {
				this.setState({ currentUserId: client.auth.user.id });
				console.log(`User signed in: ${client.auth.user.id}`);
				goHome();
			}
		});
	}

	async onFacebookLogin() {
		try {
			const result = await LoginManager.logInWithReadPermissions(['public_profile']);

			if (!result.isCancelled) {
				const token = await AccessToken.getCurrentAccessToken();
				const credential = new FacebookCredential(token.accessToken);
				this.login(credential);
			}
		} catch (error) {
			console.log(`Login fail with error: ${error}`);
		}
	}

	async onGoogleLogin() {
		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();
			const credential = new GoogleCredential(userInfo.accessToken);
			this.login(credential);
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

	onEmailPasswordLogin() {
		// Clear errors
		this.setState({ emailError: null, passwordError: null });

		const { email, password } = this.state;

		if (!email) {
			this.setState({ emailError: 'Este campo es requerido' })
		} else if (!validator.isEmail(email)) {
			this.setState({ emailError: 'Ingresa un correo electrónico válido' })
		} else if (!password) {
			this.setState({ passwordError: 'Este campo es requerido' })
		} else {
			const credential = new UserPasswordCredential(email, password);
			this.login(credential);
		}
	}

	onNavigateToSignup() {
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

	login(credential) {
		const { client } = this.state;

		client.auth.loginWithCredential(credential).then(user => {
			console.log(`Successfully logged in as user ${user.id}`);
			this.setState({ currentUserId: user.id });
			goHome();
		}).catch(err => {
			console.log(`Failed to log in anonymously: ${err}`);
			this.setState({ currentUserId: undefined });
		});
	}

	render() {
		const { email, emailError, password, passwordError } = this.state;

		return (
			<ImageBackground source={Images.authBackground} style={styles.container}>
				<DismissKeyboardView style={styles.inner}>
					<View style={styles.logo}>
						<Image source={Images.authLogo} resizeMode="contain" style={styles.logoImage} />
					</View>


					<View style={styles.form}>
						<TextBox
							type="email"
							placeholder="Email"
							value={email}
							onChange={value => this.setState({ email: value })}
							error={emailError}
						/>

						<TextBox
							type="password"
							placeholder="Password"
							value={password}
							onChange={value => this.setState({ password: value })}
							error={passwordError}
						/>
						<Button onPress={this.onEmailPasswordLogin.bind(this)} style={styles.signinButton}>SIGN IN</Button>

						<View style={styles.separator}>
							<View style={styles.separatorLine} />
							<Text style={styles.separatorText}>OR</Text>
							<View style={styles.separatorLine} />
						</View>

						<TransparentButton onPress={this.onFacebookLogin.bind(this)} icon={Images.facebookAuthIcon} style={styles.fbButton}>CONTINUE WITH FACEBOOK</TransparentButton>
						<TransparentButton onPress={this.onGoogleLogin.bind(this)} icon={Images.googleAuthIcon}>CONTINUE WITH GOOGLE</TransparentButton>

						<View style={styles.bottomLinks}>
							<LinkButton style={styles.bottomLink} containerStyle={styles.bottomLinkContainer}>Forgot password</LinkButton>
							<LinkButton style={styles.bottomLink} containerStyle={styles.bottomLinkContainer} onPress={this.onNavigateToSignup}>Create account</LinkButton>
						</View>
					</View>
				</DismissKeyboardView>
			</ImageBackground>
		);
	}
}
