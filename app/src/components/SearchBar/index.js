import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Images from '@assets/images';

import styles from './styles';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { style } = this.props;

		return (
			<View style={[styles.textBoxWrapper, style]}>
				<TextInput
					onChangeText={text => {}}
					value=""
					autoCapitalize="sentences"
					autoCorrect={false}
					placeholder="Search books"
					placeholderTextColor={EStyleSheet.value('$lightTextColor')}
					style={styles.textBox}
					underlineColorAndroid="rgba(0,0,0,0)"
				/>

				<Image source={Images.searchTabIcon} style={styles.icons} />
			</View>
		);
	}
}

SearchBar.propTypes = {
	style: PropTypes.object
};

SearchBar.defaultProps = {
	style: null
};
