import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Image, Text, View, Dimensions, Platform } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

import BookHeader from '../../components/BookHeader';
import styles from './styles';

const { height } = Dimensions.get('window');
const isTallIPhone = Platform.OS === 'ios' && height >= 812;

class Book extends Component {
	render() {
		const { componentId } = this.props;
		return (
			<HeaderImageScrollView
				maxHeight={isTallIPhone ? 300 : 280}
				minHeight={isTallIPhone ? 100 : 80}
				renderHeader={() => (
					<View style={styles.headerImageContainer}>
						<Image source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg' }} style={styles.headerImage} blurRadius={3} />
					</View>
				)}
				renderForeground={() => <BookHeader onBack={() => Navigation.pop(componentId)} />}>
				<View style={{ height: 1000 }}>
					<TriggeringView onHide={() => console.log("text hidden")}>
						<Text>Scroll Me!</Text>
					</TriggeringView>
				</View>
			</HeaderImageScrollView>
		);
	}
}

export default Book;
