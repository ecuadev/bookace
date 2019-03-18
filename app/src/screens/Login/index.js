import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

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
			<View style={styles.container}>
				<Text style={styles.title}>Login Page</Text>
				<TextBox label="Username" />
				<TextBox label="Password" type="password" />
				<Button onPress={this.login}>Login</Button>
				<LinkButton>Forgot password</LinkButton>
				<FacebookButton onPress={this.login}>Login with Facebook</FacebookButton>
				<GoogleButton onPress={this.login}>Login with Google</GoogleButton>
				<LinkButton onPress={this.toSignup}>Create account</LinkButton>
			</View>
		);
	}
}
