import React, { Component } from 'react';
import { ImageBackground, ScrollView, Text, View} from 'react-native';
import Images from '@assets/images';

import DismissKeyboardView from '../../components/DismissKeyboardView';
import SearchBar from '../../components/SearchBar';
import CategoryGrid from '../../components/CategoryGrid';

import styles from './styles';

export default class Search extends Component {
	render() {
		return (
			<DismissKeyboardView style={styles.container}>
				<ImageBackground source={Images.searchBackground} style={styles.searchBackground}>
					<View style={styles.searchWrapper}>
						<SearchBar style={styles.searchBar} />
					</View>
				</ImageBackground>
				<ScrollView style={styles.categories} showsVerticalScrollIndicator={false}>
					<Text style={styles.title}>Categories</Text>
					<CategoryGrid />
				</ScrollView>
			</DismissKeyboardView>
		);
	}
}
