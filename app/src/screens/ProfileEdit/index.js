import React, { Component } from 'react';
import { Image, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import Moment from 'moment';
import validator from 'validator';
import Images from '@assets/images';

import DismissKeyboardView from '../../components/DismissKeyboardView';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import ProfileTextBox from '../../components/ProfileTextBox';
import Picker from '../../components/Picker';
import DatePicker from '../../components/DatePicker';
import styles from './styles';

import {
	setUserData,
	updateUser,
	facebookLogin,
	googleLogin,
	loggout
} from '../../actions/user';
import { setAlert } from '../../actions/global';
import { goToLogin } from '../../config/navigation';

class ProfileEdit extends Component {
	constructor(props) {
		super(props);

		const { user } = this.props;

		this.genderOptions = [
			{
				value: '',
				label: ''
			},
			{
				value: 'male',
				label: 'Male'
			},
			{
				value: 'female',
				label: 'Female'
			}
		];

		this.state = {
			form: {
				first_name: user.first_name || '',
				last_name: user.last_name || '',
				email: user.email || '',
				gender: user.gender,
				birthday: user.birthday,
				password: null,
				passwordRewrite: null
			},
			errors: {}
		};


		const { client } = this.props;
		console.log(client.auth.user.identities);
	}

	handleLogout() {
		const { client, loggout } = this.props;

		loggout(client).then(() => {
			goToLogin(true);
		});
	}

	save() {
		const { user, client, updateUser, setAlert } = this.props;
		const { form } = this.state;
		const errors = {};
		let valid = true;

		if (form.email && !validator.isEmail(form.email)) {
			errors.email = 'Invalid email address';
			valid = false;
		}

		this.setState({ errors });

		if (valid) {
			updateUser(user._id, form, client).then(() => {
				setAlert('success', 'Updates succesfully saved.');
			});
		} else {
			setAlert('error', 'Fix your errors and try again.');
		}
	}

	handleInputChange(name, value) {
		const { form } = this.state;
		form[name] = value;

		this.setState({ form });
	}

	async link(credential) {
		const { client } = this.props;
		const { user } = client.auth;

		try {
			await user.linkWithCredential(credential);
		} catch (err) {
			console.log(err);
		}
	}

	async handleLink(service) {
		if (service === 'oauth2-facebook') {
			const credential = await facebookLogin();
			this.link(credential);
		} else if (service === 'oauth2-google') {
			const credential = await googleLogin();
			this.link(credential);
		}
	}

	isLinked(service) {
		const { client } = this.props;
		return !!client.auth.user && !!client.auth.user.identities.find(identity => identity.providerType === service);
	}

	handleChoosePhoto() {
		const options = {
			title: 'Select Profile Picture'
		};

		ImagePicker.showImagePicker(options, response => {
			if (response.uri) {
				this.uploadFile(response.uri);
			}
		});
	}

	render() {
		const { user, componentId } = this.props;
		const { form, errors } = this.state;

		return (
			<View style={styles.container}>
				<DismissKeyboardView style={styles.header}>
					<View style={styles.headerButtons}>
						<TouchableOpacity onPress={() => Navigation.pop(componentId)} style={styles.headerButtonBack}>
							<Image source={Images.backIcon} style={styles.headerButtonBackIcon} />
						</TouchableOpacity>
						<TouchableOpacity style={styles.headerButtonSave} onPress={this.save.bind(this)}>
							<Text style={styles.headerButtonSaveText}>Save</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.imageBorder}>
						<Image
							source={user.picture ? { uri: user.picture } : Images.profilePic}
							style={styles.image}
						/>
					</View>
					<Button style={styles.imageButton} onPress={this.handleChoosePhoto}>Change picture</Button>
				</DismissKeyboardView>
				<ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Personal</Text>
						<View style={styles.sectionForm}>
							<ProfileTextBox
								label="First Name"
								value={form.first_name}
								error={errors.first_name}
								onChange={value => this.handleInputChange('first_name', value)}
							/>
							<ProfileTextBox
								label="Last Name"
								value={form.last_name}
								error={errors.last_name}
								onChange={value => this.handleInputChange('last_name', value)}
							/>
							<ProfileTextBox
								type="email"
								label="Email"
								value={form.email}
								error={errors.email}
								onChange={value => this.handleInputChange('email', value)}
							/>
							<Picker
								label="Gender"
								selectedValue={form.gender}
								onChange={value => this.handleInputChange('gender', value)}
								options={this.genderOptions}
								optionsStyle={styles.pickerOptions}
							/>
							<DatePicker
								label="Birth Date"
								date={form.birthday}
								onDateChange={value => this.handleInputChange('birthday', value)}
								format="MM-DD-YYYY"
								maxDate={Moment().format('MM-DD-YYYY')}
								optionsStyle={styles.pickerOptions}
							/>
						</View>
					</View>

					<View style={styles.section}>
						<Text style={styles.sectionTitle}>Reset password</Text>
						<View style={styles.sectionForm}>
							<ProfileTextBox
								type="password"
								label="New password"
								value={form.password}
								error={errors.password}
								onChange={value => this.handleInputChange('password', value)}
							/>
							<ProfileTextBox
								type="password"
								label="Confirm password"
								value={form.passwordRewrite}
								error={errors.passwordRewrite}
								onChange={value => this.handleInputChange('passwordRewrite', value)}
							/>
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
								<Switch
									value={this.isLinked('oauth2-facebook')}
									disabled={this.isLinked('oauth2-facebook')}
									onValueChange={value => this.handleLink('oauth2-facebook', value)}
								/>
							</View>
							<View style={[styles.sectionField, styles.sectionFieldSocial]}>
								<View style={styles.socialFieldService}>
									<Image source={Images.googleAuthIcon} style={styles.socialFieldIcon} />
									<Text style={styles.socialFieldLabel}>Link with google</Text>
								</View>
								<Switch
									value={this.isLinked('oauth2-google')}
									disabled={this.isLinked('oauth2-google')}
									onValueChange={value => this.handleLink('oauth2-google', value)}
								/>
							</View>
						</View>
						<View style={styles.buttons}>
							<Button onPress={this.handleLogout.bind(this)}>
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
		user: state.user.profile
	}),
	{ setUserData, updateUser, setAlert, loggout }
)(ProfileEdit);
