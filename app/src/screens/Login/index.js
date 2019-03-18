import React, { Component } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Images from '@assets/images';

import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import FacebookButton from '../../components/Button/FacebookButton';
import GoogleButton from '../../components/Button/GoogleButton';
import { goHome } from '../../navigation';

import styles from './styles';


export default class Login extends Component {
	login() {
		goHome();
	}

	toSignup() {
		Navigation.push('AuthStack', {
			component: {
				name: 'bookace.Signup',
				options: {
					topBar: {
						visible: false
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
					<TextBox placeholder="Username" />
					<TextBox placeholder="Password" type="password" />
					<Button onPress={this.login} style={styles.signinButton}>SIGN IN</Button>

					<View style={styles.separator}>
						<View style={styles.separatorLine} />
						<Text style={styles.separatorText}>OR</Text>
						<View style={styles.separatorLine} />
					</View>

					<FacebookButton onPress={this.login} style={styles.fbButton}>CONTINUE WITH FACEBOOK</FacebookButton>
					<GoogleButton onPress={this.login}>CONTINUE WITH GOOGLE</GoogleButton>

					<View style={styles.bottomLinks}>
						<LinkButton style={styles.bottomLink}>Forgot password</LinkButton>
						<LinkButton style={styles.bottomLink} onPress={this.toSignup}>Create account</LinkButton>
					</View>
				</View>
			</ImageBackground>
		);
	}
}
