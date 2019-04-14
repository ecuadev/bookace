import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

export default class SearchBar extends Component {
	render() {
		const { onChangeText, value, style } = this.props;

		return (
			<View style={[styles.textBoxWrapper, style]}>
				<TextInput
					onChangeText={text => onChangeText(text)}
					value={value}
					autoCapitalize="sentences"
					autoCorrect={false}
					placeholder="Search books"
					placeholderTextColor={EStyleSheet.value('$lightTextColor')}
					style={styles.textBox}
					underlineColorAndroid="rgba(0,0,0,0)"
				/>
				<Icon name="search" size={15} style={styles.icons} />
				{/* <Image source={Images.searchTabIcon} style={styles.icons} /> */}
			</View>
		);
	}
}

SearchBar.propTypes = {
	onChangeText: PropTypes.func,
	value: PropTypes.string,
	style: PropTypes.object,
};

SearchBar.defaultProps = {
	onChangeText: () => {},
	value: '',
	style: null,
};
