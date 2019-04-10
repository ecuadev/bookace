import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';

import styles from './styles';

class ProfileTextBox extends Component {
	constructor(props) {
		super(props);

		const { type } = this.props;

		this.state = {
			secure: type === 'password'
		};

		switch (type) {
			case 'email':
				this.keyBoardType = 'email-address';
				break;
			case 'number':
				this.keyBoardType = 'numbers-and-punctuation';
				break;
			default:
				this.keyBoardType = 'default';
				break;
		}
	}

	changeSecurity() {
		const { secure } = this.state;
		this.setState({ secure: !secure });
	}

	render() {
		const { label, value, type, onChange, error, style } = this.props;
		const { secure } = this.state;

		return (
			<View style={[styles.wrapper, style]}>
				<Text style={styles.label}>{label}</Text>
				{ !!error && <Text style={styles.error}>{error}</Text> }
				<TextInput
					value={value}
					onChangeText={onChange}
					autoCapitalize={type === 'email' ? 'none' : 'sentences'}
					autoCorrect={false}
					keyboardType={this.keyBoardType}
					secureTextEntry={secure}
					underlineColorAndroid="rgba(0,0,0,0)"
					style={[styles.input, Platform.OS === 'android' && styles.inputAndroid]}
				/>
				{ type === 'password' && (
					<TouchableOpacity style={styles.showPassword} onPress={this.changeSecurity.bind(this)}>
						<Text style={styles.showPasswordText}>
							{secure ? 'SHOW' : 'HIDE'}
						</Text>
					</TouchableOpacity>
				)}
			</View>
		);
	}
}

ProfileTextBox.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	type: PropTypes.string,
	onChange: PropTypes.func,
	error: PropTypes.string,
	style: PropTypes.object
};

ProfileTextBox.defaultProps = {
	label: '',
	value: '',
	type: 'text',
	onChange: () => {},
	error: '',
	style: null
};

export default ProfileTextBox;
