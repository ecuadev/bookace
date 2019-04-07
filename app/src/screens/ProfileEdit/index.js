import React, { Component } from 'react';
import { Image, ScrollView, Switch, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import Images from '@assets/images';

import DismissKeyboardView from '../../components/DismissKeyboardView';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import Picker from '../../components/Picker';
import DatePicker from '../../components/DatePicker';
import styles from './styles';

import { setCurrentUser } from '../../actions/user';
import { goToLogin } from '../../config/navigation';

class ProfileEdit extends Component {
	constructor(props) {
		super(props);
	}

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

	handleChoosePhoto() {
		const options = {
			title: 'Select Profile Picture',
		};

		ImagePicker.showImagePicker(options, response => {
			if (response.uri) {
				// send picture
			}
		});
	}

	render() {
		const { user, componentId } = this.props;

		return (
			<View style={styles.container}>
				<DismissKeyboardView style={styles.header}>
					<View style={styles.headerButtons}>
						<TouchableOpacity onPress={() => Navigation.pop(componentId)} style={styles.headerButtonBack}>
							<Image source={Images.backIcon} style={styles.headerButtonBackIcon} />
						</TouchableOpacity>
						{ false && (
							<TouchableOpacity style={styles.headerButtonMenu}>
								<Image source={Images.cogIcon} style={styles.headerButtonMenuIcon} />
							</TouchableOpacity>
						)}
					</View>
					<View style={styles.imageBorder}>
						<Image
							source={user.profile.pictureUrl ? { uri: user.profile.pictureUrl } : Images.profilePic}
							style={styles.image}
						/>
					</View>
					<Button style={styles.imageButton} onPress={this.handleChoosePhoto}>Change picture</Button>
				</DismissKeyboardView>
				<ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Personal</Text>
						<View style={styles.sectionForm}>
							<View style={styles.sectionField}>
								<Text style={styles.sectionLabel}>First Name</Text>
								<TextInput value={user.profile.firstName} style={[styles.sectionInput, Platform.OS === 'android' && styles.sectionInputAndroid]} />
							</View>
							<View style={styles.sectionField}>
								<Text style={styles.sectionLabel}>Last Name</Text>
								<TextInput value={user.profile.lastName} style={[styles.sectionInput, Platform.OS === 'android' && styles.sectionInputAndroid]} />
							</View>
							<View style={styles.sectionField}>
								<Text style={styles.sectionLabel}>Email</Text>
								<TextInput value={user.profile.email} style={[styles.sectionInput, Platform.OS === 'android' && styles.sectionInputAndroid]} />
							</View>
							<Picker
								label="Gender"
								options={[
									{
										value: 'male',
										label: 'Male'
									},
									{
										value: 'female',
										label: 'Female'
									}
								]}
								optionsStyle={styles.pickerOptions}
							/>
							<DatePicker label="Birth Date" optionsStyle={styles.pickerOptions} />
						</View>
					</View>
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Social</Text>
						<View style={styles.sectionForm}>
							<View style={[styles.sectionField, styles.sectionFieldSocial]}>
								<View style={styles.socialFieldService}>
									<Image source={Images.facebookAuthIcon} style={styles.socialFieldIcon} />
									<Text style={styles.socialFieldLabel}>Link with facebook</Text>
								</View>
								<Switch />
							</View>
							<View style={[styles.sectionField, styles.sectionFieldSocial]}>
								<View style={styles.socialFieldService}>
									<Image source={Images.googleAuthIcon} style={styles.socialFieldIcon} />
									<Text style={styles.socialFieldLabel}>Link with google</Text>
								</View>
								<Switch />
							</View>
						</View>
						<View style={styles.buttons}>
							<Button onPress={this.logout.bind(this)}>
								{'Sign out'}
							</Button>
							<LinkButton containerStyle={styles.deleteAccountLink} style={styles.deleteAccountText}>
								{'Delete account'}
							</LinkButton>
						</View>
					</View>
				</ScrollView>
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
)(ProfileEdit);
