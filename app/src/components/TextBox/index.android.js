import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './styles';

class TextBox extends Component {
	constructor(props) {
		super(props);

		const { type } = this.props;

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

	render() {
		const { type, label, onChange, value, placeholder, style, error } = this.props;

		return (
			<View style={[styles.wrapper, style]}>
				{ label && <Text style={styles.label}>{label}</Text> }
				<View style={[styles.textBoxWrapper, styles.textBoxWrapperAndroid, error && styles.textBoxWrapperError]}>
					<TextInput
						onChangeText={text => onChange(text)}
						value={value}
						autoCapitalize={type === 'email' ? 'none' : 'sentences'}
						autoCorrect={false}
						keyboardType={this.keyBoardType}
						placeholder={placeholder}
						placeholderTextColor={EStyleSheet.value('$lightTextColor')}
						style={[styles.textBox, type === 'password' && styles.password]}
						secureTextEntry={type === 'password'}
						underlineColorAndroid="rgba(0,0,0,0)"
					/>
				</View>
				{ !!error && <Text style={styles.error}>{ error }</Text> }
			</View>
		);
	}
}

TextBox.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	style: PropTypes.object,
	error: PropTypes.string
};

TextBox.defaultProps = {
	type: 'text',
	label: null,
	onChange: () => {},
	value: null,
	placeholder: null,
	style: null,
	error: null
};

export default TextBox;
