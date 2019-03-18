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

export default class Signup extends Component {
	signup() {
		goHome();
	}

	toLogin() {
		Navigation.popToRoot('AuthStack');
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Signup Page</Text>
				<TextBox label="Username" />
				<TextBox label="Password" type="password" />
				<TextBox label="Confirm Password" type="password" />
				<Button onPress={this.signup}>Create Account</Button>
				<FacebookButton onPress={this.signup}>Signup with Facebook</FacebookButton>
				<GoogleButton onPress={this.signup}>Signup with Google</GoogleButton>
				<LinkButton onPress={this.toLogin}>Already have an account</LinkButton>
			</View>
		);
	}
}
