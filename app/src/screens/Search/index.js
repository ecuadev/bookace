import React, { Component } from 'react';
import { ImageBackground, ScrollView, Text, View, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Images from '@assets/images';

import DismissKeyboardView from '../../components/DismissKeyboardView';
import SearchBar from '../../components/SearchBar';
import CategoryGrid from '../../components/CategoryGrid';
import SearchResults from '../../components/SearchResults';

import { goToBook, goToCategory } from '../../config/navigation';
import styles from './styles';

const { width } = Dimensions.get('window');

export default class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: ''
		};
	}

	componentDidUpdate(prevProps, prevState) {
		const { searchValue } = this.state;
		if (prevState.searchValue === '' && searchValue) {
			this.resultsView.transitionTo({ right: 0 }, 200, 'ease');
		} else if (prevState.searchValue !== '' && !searchValue) {
			this.resultsView.transitionTo({ right: width }, 200, 'ease');
		}
	}

	onSearch(value) {
		this.setState({ searchValue: value });
	}

	onCategoryPress(category) {
		goToCategory(category);
	}

	render() {
		const { searchValue } = this.state;
		const { componentId } = this.props;

		return (
			<DismissKeyboardView style={styles.container}>
				<ImageBackground source={Images.searchBackground} style={styles.searchBackground}>
					<View style={styles.searchWrapper}>
						<SearchBar
							value={searchValue}
							onChangeText={this.onSearch.bind(this)}
							style={styles.searchBar}
						/>
					</View>
				</ImageBackground>
				<View style={styles.paginator}>
					<ScrollView style={styles.categories} showsVerticalScrollIndicator={false} keyboardDismissMode="on-drag">
						<Text style={styles.title}>Categories</Text>
						<CategoryGrid onCategoryPress={this.onCategoryPress.bind(this)} />
					</ScrollView>
					<Animatable.View ref={ref => { this.resultsView = ref; }} style={styles.results}>
						<SearchResults onBookPress={book => goToBook(book, componentId)} />
					</Animatable.View>
				</View>
			</DismissKeyboardView>
		);
	}
}
