import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Images from '@assets/images';

import styles from './styles';

export default class Profile extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.topContainer}>
					<View style={styles.header}>
						<Text style={styles.title}>My Profile</Text>
						<TouchableOpacity>
							<Image source={Images.profileEditIcon} style={styles.editIcon} />
						</TouchableOpacity>
					</View>
					<View style={styles.user}>
						<View style={styles.userImageContainer}>
							<Image source={Images.profilePic} style={styles.userImage} />
						</View>
						<View style={styles.userInfoContainer}>
							<Text style={styles.userName}>David Bergmann</Text>
							<Text style={styles.userEmail}>davidbepa@gmail.com</Text>
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
			</View>
		);
	}
}
