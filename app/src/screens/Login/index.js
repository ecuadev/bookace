/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import Config from "react-native-config";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { GoogleSignin, statusCodes } from "react-native-google-signin";
import {
	UserPasswordCredential,
	FacebookCredential,
	GoogleCredential
} from "mongodb-stitch-react-native-sdk";
import { connect } from "react-redux";
import validator from "validator";
import Images from "@assets/images";

import { setCurrentUser } from "../../actions/user";
import { setError } from "../../actions/global";

import DismissKeyboardView from "../../components/DismissKeyboardView";
import TextBox from "../../components/TextBox";
import Button from "../../components/Button";
import LinkButton from "../../components/LinkButton";
import TransparentButton from "../../components/Button/TransparentButton";
import { goToSignup, goHome, goToForgotPass } from "../../config/navigation";

import styles from "./styles";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			emailError: null,
			password: "",
			passwordError: null
		};
	}

	componentDidMount() {
		GoogleSignin.configure({
			iosClientId: Config.GOOGLE_CLIENT_ID
		});
	}

	async onFacebookLogin() {
		if (!this.verifyConnection()) {
			return false;
		}

		try {
			const result = await LoginManager.logInWithReadPermissions([
				"public_profile"
			]);

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
		if (!this.verifyConnection()) {
			return false;
		}

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
		if (!this.verifyConnection()) {
			return false;
		}

		// Clear errors
		this.setState({ emailError: null, passwordError: null });

		const { email, password } = this.state;

		if (!email) {
			this.setState({ emailError: "This field is required" });
		} else if (!validator.isEmail(email)) {
			this.setState({ emailError: "Please enter a valid email address" });
		} else if (!password) {
			this.setState({ passwordError: "This field is required" });
		} else {
			const credential = new UserPasswordCredential(email, password);
			this.login(credential);
		}
	}

	onNavigateToSignup() {}

	verifyConnection() {
		const { network, setError } = this.props;

		if (network.hasCheckedStatus && !network.connected) {
			setError(
				"Your device is not connected to the internet, please make sure your connection is working."
			);
			return false;
		}

		return true;
	}

	login(credential) {
		const { client, setCurrentUser, setError } = this.props;

		client.auth
			.loginWithCredential(credential)
			.then(user => {
				setCurrentUser(user);
				goHome();
			})
			.catch(err => {
				console.log(`Failed to log in anonymously: ${err}`);
				setCurrentUser(null);
			});
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
							style={styles.signinButton}
						>
							SIGN IN
						</Button>

						<View style={styles.separator}>
							<View style={styles.separatorLine} />
							<Text style={styles.separatorText}>OR</Text>
							<View style={styles.separatorLine} />
						</View>

						<TransparentButton
							onPress={this.onFacebookLogin.bind(this)}
							icon={Images.facebookAuthIcon}
							style={styles.fbButton}
						>
							CONTINUE WITH FACEBOOK
						</TransparentButton>
						<TransparentButton
							onPress={this.onGoogleLogin.bind(this)}
							icon={Images.googleAuthIcon}
						>
							CONTINUE WITH GOOGLE
						</TransparentButton>

						<View style={styles.bottomLinks}>
							<LinkButton
								style={styles.bottomLink}
								containerStyle={styles.bottomLinkContainer}
								onPress={goToForgotPass}
							>
								Forgot password
							</LinkButton>
							<LinkButton
								style={styles.bottomLink}
								containerStyle={styles.bottomLinkContainer}
								onPress={goToSignup}
							>
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
	{ setCurrentUser, setError }
)(Login);
