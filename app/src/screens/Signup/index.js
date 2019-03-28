import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Images from '@assets/images';
import DismissKeyboardView from '../../components/DismissKeyboardView';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import TransparentButton from '../../components/Button/TransparentButton';
import { goHome } from '../../config/navigation';

import styles from './styles';

export default class Signup extends Component {
	constructor(props) {
		super(props);
		this.user = React.createRef();
		this.password = React.createRef();
		this.confirmPassword = React.createRef();
	}

	verifyPasswords() {
		// TODO
	}

	signup() {
		goHome();
	}

	render() {
		const { componentId } = this.props;

		return (
			<ImageBackground source={Images.authBackground} style={styles.container}>
				<DismissKeyboardView style={styles.inner}>
					<View style={styles.logo}>
						<Text style={styles.title}>Create Account</Text>
					</View>
					<View style={styles.form}>
						<TextBox placeholder="Username" ref={this.user} />
						<TextBox
							placeholder="Password"
							type="password"
							ref={this.password}
						/>
						<TextBox
							placeholder="Confirm Password"
							type="password"
							ref={this.confirmPassword}
						/>
						<Button onPress={this.signUpButton}>CREATE MY ACCOUNT</Button>

						<View style={styles.separator}>
							<View style={styles.separatorLine} />
							<Text style={styles.separatorText}>OR</Text>
							<View style={styles.separatorLine} />
						</View>

						<TransparentButton
							onPress={this.login}
							icon={Images.facebookAuthIcon}
							style={styles.fbButton}>
							CONTINUE WITH FACEBOOK
						</TransparentButton>

						<TransparentButton
							onPress={this.login}
							icon={Images.googleAuthIcon}>
							CONTINUE WITH GOOGLE
						</TransparentButton>

						<View style={styles.bottomLinks}>
							<LinkButton
								style={styles.bottomLink}
								containerStyle={styles.bottomLinkContainer}
								onPress={() => Navigation.pop(componentId)}>
								Already have an account
							</LinkButton>
						</View>
					</View>
				</DismissKeyboardView>
			</ImageBackground>
		);
	}
}
