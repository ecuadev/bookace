import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Image, Text, View } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import ActionSheet from 'react-native-action-sheet';
import Share from 'react-native-share';
import * as Animatable from 'react-native-animatable';

import { isTallIPhone, normalize } from '../../helpers';
import BookHeader from '../../components/BookHeader';
import BookHeaderStatic from '../../components/BookHeader/BookHeaderStatic';
import styles from './styles';

class Book extends Component {
	handleMenuPress() {
		ActionSheet.showActionSheetWithOptions({
			options: [
				'Add to my read books',
				'Add to my wishlist',
				'Share',
				'Cancel'
			],
			cancelButtonIndex: 3
		},
		buttonIndex => {
			switch (buttonIndex) {
				case 0:
					break;
				case 1:
					break;
				case 2:
					Share.open({
						title: 'Look at this book',
						message: 'I like this book',
						failOnCancel: false
					})
						.then(res => { console.log(res) })
						.catch(err => { err && console.log(err); });
					break;
				default:
					break;
			}
		});
	}

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
						<BookHeaderStatic
							onBack={() => Navigation.pop(componentId)}
							onMenu={this.handleMenuPress}
						/>
					</Animatable.View>
				)}
				renderForeground={() => (
					<BookHeader
						onBack={() => Navigation.pop(componentId)}
						onMenu={this.handleMenuPress}
					/>
				)}>
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
