import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
	AccessToken,
	GraphRequest,
	GraphRequestManager
} from 'react-native-fbsdk';

import { goToProfile } from '../../config/navigation';
import { facebookLogin } from '../../actions/user';
import ProfileImage from '../../components/ProfileImage';
import Button from '../../components/Button';
import NoConnection from '../../components/NoConnection';

import styles from './styles';

class Social extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedInWithFB: true
		};

		// Add invitable_friends
		this.FBGraphRequest('friends', response => {
			console.log('------')
			console.log(response)
			console.log('------')
		});
	}

	async FBGraphRequest(fields, callback) {
		const accessData = await AccessToken.getCurrentAccessToken();

		if (!accessData) {
			this.setState({ isLoggedInWithFB: false });
			return;
		}
		// Create a graph request asking for user information
		const infoRequest = new GraphRequest('/me', {
			accessToken: accessData.accessToken,
			parameters: {
				fields: {
					string: fields
				}
			}
		}, callback.bind(this));
		// Execute the graph request created above
		new GraphRequestManager().addRequest(infoRequest).start();
	}

	async handleFacebookLogin() {
		const { facebookLogin } = this.props;
		const credential = await facebookLogin();

		/**
		 * TODO: Link if not linked
		*/

		this.setState({ isLoggedInWithFB: true });
	}

	render() {
		const { network, user } = this.props;
		const { isLoggedInWithFB } = this.state;

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerTitle} numberOfLines={1}>{`Hi, ${user.first_name || user.name || user.email}!`}</Text>

					<View style={styles.user}>
						<View style={styles.userImageContainer}>
							<TouchableOpacity
								onPress={goToProfile}
								style={styles.headerButtonLeft}>
								<ProfileImage picture={user.picture} source={user.pictureSource} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={styles.content}>
					{ !isLoggedInWithFB && (
						<Button onPress={this.handleFacebookLogin.bind(this)} style={styles.facebookButtton}>
							{'Find friends in Facebook'}
						</Button>
					)}
					{ network.hasCheckedStatus && !network.connected && (
						<NoConnection />
					)}
				</View>
			</View>
		);
	}
}

export default connect(
	state => ({
		network: state.network,
		user: state.user.profile
	}),
	{ facebookLogin }
)(Social);
