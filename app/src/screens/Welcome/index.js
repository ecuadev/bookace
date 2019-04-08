import React, { Component } from 'react';
import { ImageBackground, ActivityIndicator } from 'react-native';
import Config from 'react-native-config';
import { Stitch } from 'mongodb-stitch-react-native-sdk';
import { connect } from 'react-redux';
import Images from '@assets/images';

import { setStitchClient } from '../../actions/global';
import { setCurrentUser } from '../../actions/user';

import { goToLogin, goHome } from '../../config/navigation';

import styles from './styles';

class Welcome extends Component {
	componentDidMount() {
		const { setStitchClient, setCurrentUser } = this.props;

		Stitch.initializeDefaultAppClient(Config.STITCH_CLIENT_APP_ID).then(client => {
			setStitchClient(client);

			if (client.auth.isLoggedIn) {
				setCurrentUser(client.auth.user);
				goHome();
			} else {
				goToLogin();
			}
		});
	}

	render() {
		return (
			<ImageBackground source={Images.authBackground} style={styles.container}>
				<ActivityIndicator size="large" color="#ffffff" />
			</ImageBackground>
		);
	}
}

export default connect(
	state => ({
		user: state.user.currentUser
	}),
	{ setStitchClient, setCurrentUser }
)(Welcome);
