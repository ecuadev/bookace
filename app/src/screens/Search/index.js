import React, { Component } from 'react';
import { ImageBackground, ScrollView, Text, View, Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import Images from '@assets/images';

import DismissKeyboardView from '../../components/DismissKeyboardView';
import SearchBar from '../../components/SearchBar';
import CategoryGrid from '../../components/CategoryGrid';
import SearchResults from '../../components/SearchResults';
import NoConnection from '../../components/NoConnection';

import { fetchCategories } from '../../actions/books';
import { goToBook, goToCategory } from '../../config/navigation';
import styles from './styles';

const { width } = Dimensions.get('window');

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: '',
			noNetwork: false
		};
	}

	componentDidMount() {
		this.navigationEventListener = Navigation.events().bindComponent(this);
	}

	componentDidUpdate(prevProps, prevState) {
		const { searchValue } = this.state;
		const { isConnected } = this.props;

		if (prevState.searchValue === '' && searchValue) {
			this.resultsView.transitionTo({ left: 0 }, 300, 'linear');
		} else if (prevState.searchValue !== '' && !searchValue) {
			this.resultsView.transitionTo({ left: -width }, 300, 'linear');
		}

		if (!prevProps.isConnected && isConnected) {
			this.setState({ noNetwork: false });
			this.handleCategoryLoad();
		}
	}

	onSearch(value) {
		this.setState({ searchValue: value });
	}

	onCategoryPress(category) {
		goToCategory(category);
	}

	componentDidAppear() {
		this.handleCategoryLoad();
	}

	handleCategoryLoad() {
		const { categories, fetchCategories, client, isConnected } = this.props;

		if (!categories.length) {
			if (isConnected) {
				fetchCategories(client);
			} else {
				this.setState({ noNetwork: true });
			}
		}
	}

	render() {
		const { searchValue, noNetwork } = this.state;
		const { categories, componentId } = this.props;

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
						{noNetwork && <NoConnection />}
						{!noNetwork && (
							<CategoryGrid
								categories={categories}
								onCategoryPress={this.onCategoryPress.bind(this)}
							/>
						)}
					</ScrollView>
					<Animatable.View ref={ref => { this.resultsView = ref; }} style={styles.results}>
						<SearchResults onBookPress={book => goToBook(book, componentId)} />
					</Animatable.View>
				</View>
			</DismissKeyboardView>
		);
	}
}

export default connect(
	state => ({
		client: state.global.client,
		isConnected: state.network.connected,
		categories: state.books.categories
	}),
	{ fetchCategories }
)(Search);
