import React, { Component } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Images from '@assets/images';

import { setCurrentUser } from '../../actions/user';

import DismissKeyboardView from '../../components/DismissKeyboardView';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import TransparentButton from '../../components/Button/TransparentButton';
import { goToSignup, goHome } from '../../config/navigation';

import styles from './styles';


class Login extends Component {
	constructor(props) {
		super(props);
		this.textInput = React.createRef();
	}

	login() {
		goHome();
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
	}

	login(credential) {
		const { client, setCurrentUser } = this.props;

		client.auth.loginWithCredential(credential).then(user => {
			setCurrentUser(user);
			goHome();
		}).catch(err => {
			console.log(`Failed to log in anonymously: ${err}`);
			setCurrentUser(null);
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
						<LinkButton style={styles.bottomLink} containerStyle={styles.bottomLinkContainer}>Forgot password</LinkButton>
						<LinkButton style={styles.bottomLink} containerStyle={styles.bottomLinkContainer} onPress={goToSignup}>Create account</LinkButton>
					</View>
				</View>

			</ImageBackground >
		);
	}
}

export default connect(
	state => ({
		client: state.global.client
	}),
	{ setCurrentUser }
)(Login);
