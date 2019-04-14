import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { goToBook } from '../../../config/navigation';

class StackSlider extends Component {
	redirectToBook(category, book) {
		goToBook(book, category);
	}

	render() {
		const { book, parentId } = this.props;
		return (
			<TouchableOpacity
				activeOpacity={1}
				style={styles.slideInnerContainer}
				onPress={() => this.redirectToBook(parentId, book)}
			>
				<Image
					source={{
						uri:
							'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg',
					}}
					style={styles.image}
				/>
			</TouchableOpacity>
		);
	}
}

StackSlider.propTypes = {
	book: PropTypes.object.isRequired,
	parentId: PropTypes.string.isRequired,
};

StackSlider.defaultProps = {
	// eslint-disable-next-line react/default-props-match-prop-types
	goToBook: () => {},
};

export default StackSlider;
