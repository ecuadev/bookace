import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Images from '@assets/images';

import ProfileScores from '../../components/ProfileScores';
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
				stickyHeaderIndices={[0]}
			>
				<View style={styles.topContainer}>
					<View style={styles.user}>
						<View style={styles.userImageContainer}>
							<Image
								source={user.picture ? { uri: user.picture } : Images.profilePic}
								style={styles.userImage}
							/>
						</View>
						<View style={styles.userInfoContainer}>
							<Text style={styles.userName}>{user.name || user.email}</Text>
							{ !!user.name && !!user.email && (
								<Text style={styles.userEmail}>{user.email}</Text>
							)}
						</View>
					</View>
					<ProfileScores />
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
		user: state.user.profile
	})
)(Profile);
