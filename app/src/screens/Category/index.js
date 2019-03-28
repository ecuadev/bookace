import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';

import SlideContainer from '../../components/SlideContainer';
import BookGrid from '../../components/BookGrid';

import { goToBook } from '../../config/navigation';
import styles from './styles';

class Category extends Component {
	render() {
		const { componentId, category } = this.props;

		return (
			<SlideContainer
				title={`${category} Books`}
				onLeftButtonPress={() => Navigation.pop(componentId)}
				style={styles.container}>
				<BookGrid onBookPress={book => goToBook(book, componentId)} />
			</SlideContainer>
		);
	}
}

export default Category;
