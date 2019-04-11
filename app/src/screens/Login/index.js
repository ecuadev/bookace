/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import {
	UserPasswordCredential
} from 'mongodb-stitch-react-native-sdk';
import { connect } from 'react-redux';
import validator from 'validator';
import Images from '@assets/images';

import {
	setCurrentUser,
	facebookLogin,
	googleLogin
} from '../../actions/user';
import { setAlert } from '../../actions/global';

import DismissKeyboardView from '../../components/DismissKeyboardView';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import TransparentButton from '../../components/Button/TransparentButton';
import { goToSignup, goHome, goToForgotPass } from '../../config/navigation';

import styles from './styles';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			emailError: null,
			password: '',
			passwordError: null
		};
	}

	onEmailPasswordLogin() {
		if (!this.verifyConnection()) {
			return false;
		}

		// Clear errors
		this.setState({ emailError: null, passwordError: null });

		const { email, password } = this.state;

		if (!email) {
			this.setState({ emailError: 'This field is required' });
		} else if (!validator.isEmail(email)) {
			this.setState({ emailError: 'Please enter a valid email address' });
		} else if (!password) {
			this.setState({ passwordError: 'This field is required' });
		} else {
			const credential = new UserPasswordCredential(email, password);
			this.login(credential);
		}
	}

	verifyConnection() {
		const { network, setAlert } = this.props;

		if (network.hasCheckedStatus && !network.connected) {
			setAlert('error', 'Your device is not connected to the internet, please make sure your connection is working.');
			return false;
		}

		return true;
	}

	async handleFacebookLogin() {
		const credential = await facebookLogin();
		this.login(credential);
	}

	async handleGoogleLogin() {
		const credential = await googleLogin();
		this.login(credential);
	}

	async login(credential) {
		const { client, setCurrentUser } = this.props;

		try {
			await client.auth.loginWithCredential(credential);
			setCurrentUser(client);
			goHome();
		} catch (err) {
			console.log(`Failed to log in: ${err}`);
		}
	}

	render() {
		const { email, emailError, password, passwordError } = this.state;

		return (
			<ImageBackground source={Images.authBackground} style={styles.container}>
				<DismissKeyboardView style={styles.inner}>
					<View style={styles.logo}>
						<Image
							source={Images.authLogo}
							resizeMode="contain"
							style={styles.logoImage}
						/>
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
						<Button
							onPress={this.onEmailPasswordLogin.bind(this)}
							style={styles.signinButton}>
							SIGN IN
						</Button>

						<View style={styles.separator}>
							<View style={styles.separatorLine} />
							<Text style={styles.separatorText}>OR</Text>
							<View style={styles.separatorLine} />
						</View>

						<TransparentButton
							onPress={this.handleFacebookLogin.bind(this)}
							icon={Images.facebookAuthIcon}
							style={styles.fbButton}>
							CONTINUE WITH FACEBOOK
						</TransparentButton>
						<TransparentButton
							onPress={this.handleGoogleLogin.bind(this)}
							icon={Images.googleAuthIcon}>
							CONTINUE WITH GOOGLE
						</TransparentButton>

						<View style={styles.bottomLinks}>
							<LinkButton
								style={styles.bottomLink}
								containerStyle={styles.bottomLinkContainer}
								onPress={goToForgotPass}>
								Forgot password
							</LinkButton>
							<LinkButton
								style={styles.bottomLink}
								containerStyle={styles.bottomLinkContainer}
								onPress={goToSignup}>
								Create account
							</LinkButton>
						</View>
					</View>
				</DismissKeyboardView>
			</ImageBackground>
		);
	}
}

export default connect(
	state => ({
		client: state.global.client,
		network: state.network
	}),
	{ setCurrentUser, setAlert }
)(Login);
