import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Images from '@assets/images';

import Button from '../../components/Button';

import { setCurrentUser } from '../../actions/user';
import { goToLogin } from '../../config/navigation';
import styles from './styles';

class Profile extends Component {
	logout() {
		const { client } = this.props;

		client.auth
			.logout()
			.then(user => {
				setCurrentUser(null);
				goToLogin(true);
			})
			.catch(err => {
				console.log(`Failed to log in anonymously: ${err}`);
			});
	}

	render() {
		const { user } = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.topContainer}>
					<View style={styles.header}>
						<Text style={styles.title}>My Profile</Text>
						<TouchableOpacity style={styles.edit}>
							<Image source={Images.profileEditIcon} style={styles.editIcon} />
						</TouchableOpacity>
					</View>
					<View style={styles.user}>
						<View style={styles.userImageContainer}>
							<Image source={user.profile.pictureUrl ? { uri: user.profile.pictureUrl } : Images.profilePic} style={styles.userImage} />
						</View>
						<View style={styles.userInfoContainer}>
							<Text style={styles.userName}>{user.profile.name}</Text>
							<Text style={styles.userEmail}>{user.profile.email}</Text>
						</View>
					</View>
					<View style={styles.scores}>
						<View style={styles.scoreItem}>
							<Text style={styles.scoreItemTitle}>+20K</Text>
							<Text style={styles.scoreItemValue}>Followers</Text>
						</View>
						<View style={styles.scoreItem}>
							<Text style={styles.scoreItemTitle}>392</Text>
							<Text style={styles.scoreItemValue}>Follow</Text>
						</View>
						<View style={styles.scoreItem}>
							<Text style={styles.scoreItemTitle}>258</Text>
							<Text style={styles.scoreItemValue}>Reviews</Text>
						</View>
					</View>
				</View>
				<View style={styles.bottomContainer}>
					<Text>List of books</Text>
					<Button onPress={this.logout.bind(this)}>Sign out</Button>
				</View>
			</View>
		);
	}
}

export default connect(
	state => ({
		client: state.global.client,
		user: state.user.currentUser
	}),
	{ setCurrentUser }
)(Profile);
