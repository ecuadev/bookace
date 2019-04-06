import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Images from '@assets/images';

import SlideContainer from '../../components/SlideContainer';
import styles from './styles';

import { goToProfileEdit } from '../../config/navigation';

class Profile extends Component {
	render() {
		const { user } = this.props;

		return (
			<SlideContainer
				title="My Profile"
				onRightButtonPress={goToProfileEdit}
				rightIcon={Images.profileEditIcon}
				style={styles.container}
				titleStyle={styles.title}
				stickyHeaderIndices={[0]}>
				<View style={styles.topContainer}>
					<View style={styles.user}>
						<View style={styles.userImageContainer}>
							<Image
								source={user.profile.pictureUrl ? { uri: user.profile.pictureUrl } : Images.profilePic}
								style={styles.userImage}
							/>
						</View>
						<View style={styles.userInfoContainer}>
							<Text style={styles.userName}>{user.profile.name || user.profile.email}</Text>
							{ user.profile.name && user.profile.email && (
								<Text style={styles.userEmail}>{user.profile.email}</Text>
							)}
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
				</View>
			</SlideContainer>
		);
	}
}

export default connect(
	state => ({
		client: state.global.client,
		user: state.user.currentUser
	})
)(Profile);
