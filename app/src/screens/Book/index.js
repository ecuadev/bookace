import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Image, Text, View } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';

import { isTallIPhone, normalize } from '../../helpers';
import BookHeader from '../../components/BookHeader';
import BookHeaderStatic from '../../components/BookHeader/BookHeaderStatic';
import styles from './styles';

class Book extends Component {
	render() {
		const { componentId } = this.props;
		return (
			<HeaderImageScrollView
				maxHeight={isTallIPhone() ? 300 : normalize(280)}
				minHeight={isTallIPhone() ? 90 : normalize(75)}
				renderHeader={() => (
					<View style={styles.headerImageContainer}>
						<Image source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg' }} style={styles.headerImage} blurRadius={3} />
					</View>
				)}
				renderFixedForeground={() => (
					<Animatable.View
						style={styles.staticHeader}
						ref={navTitleView => {
							this.navTitleView = navTitleView;
						}}>
						<BookHeaderStatic onBack={() => Navigation.pop(componentId)} />
					</Animatable.View>
				)}
				renderForeground={() => <BookHeader onBack={() => Navigation.pop(componentId)} />}>
				<View style={styles.content}>
					<TriggeringView
						onHide={() => this.navTitleView.fadeInUp(200)}
						onDisplay={() => this.navTitleView.fadeOut(100)}
					/>
					<Text style={styles.description}>Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Wizards and Witches.</Text>
				</View>
			</HeaderImageScrollView>
		);
	}
}

export default Book;
