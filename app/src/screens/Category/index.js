import React, { Component } from 'react';
import { Text } from 'react-native';

import SlideContainer from '../../components/SlideContainer';
import BookGrid from '../../components/BookGrid';

import { backToSearch } from '../../config/navigation';
import styles from './styles';

class Category extends Component {
	render() {
		const { category } = this.props;

		return (
			<SlideContainer
				title={`${category} Books`}
				onLeftButtonPress={backToSearch}
				style={styles.container}>
				<BookGrid />
			</SlideContainer>
		);
	}
}

export default Category;
