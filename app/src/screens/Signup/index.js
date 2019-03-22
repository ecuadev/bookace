import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Images from '@assets/images';

import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import TransparentButton from '../../components/Button/TransparentButton';
import { goHome } from '../../config/navigation';

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
				<TransparentButton onPress={this.login} icon={Images.facebookAuthIcon} style={styles.fbButton}>CONTINUE WITH FACEBOOK</TransparentButton>
				<TransparentButton onPress={this.login} icon={Images.googleAuthIcon}>CONTINUE WITH GOOGLE</TransparentButton>
				<LinkButton onPress={this.toLogin}>Already have an account</LinkButton>
			</View>
		);
	}
}
