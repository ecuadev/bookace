/* eslint-disable import/no-named-as-default-member */
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import ActionSheet from 'react-native-action-sheet';
import Share from 'react-native-share';
import * as Animatable from 'react-native-animatable';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome5';

import BookHeader from '../../components/BookHeader';
import BookHeaderStatic from '../../components/BookHeader/BookHeaderStatic';
import CommentLists from '../../components/Comments/CommentLists';
import CommentInput from '../../components/Comments/CommentInput';
import { isTallIPhone, normalize } from '../../helpers';
import styles from './styles';

class Book extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalVisible: false,
			rating: 0,
		};

		this.setModalVisible = this.setModalVisible.bind(this);
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	handleMenuPress() {
		ActionSheet.showActionSheetWithOptions(
			{
				options: ['Add to my read books', 'Add to my wishlist', 'Share', 'Cancel'],
				cancelButtonIndex: 3,
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
							failOnCancel: false,
						})
							.then(res => {
								console.log(res);
							})
							.catch(err => {
								err && console.log(err);
							});
						break;
					default:
						break;
				}
			},
		);
	}

	render() {
		const { componentId } = this.props;
		const { modalVisible, rating } = this.state;
		return (
			<HeaderImageScrollView
				maxHeight={isTallIPhone() ? 300 : normalize(280)}
				minHeight={isTallIPhone() ? 90 : normalize(75)}
				renderHeader={() => (
					<View style={styles.headerImageContainer}>
						<Image
							source={{
								uri:
									'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg',
							}}
							style={styles.headerImage}
							blurRadius={3}
						/>
					</View>
				)}
				renderFixedForeground={() => (
					<Animatable.View
						style={styles.staticHeader}
						ref={navTitleView => {
							this.navTitleView = navTitleView;
						}}
					>
						<BookHeaderStatic
							onBack={() => Navigation.pop(componentId)}
							onMenu={this.handleMenuPress}
						/>
					</Animatable.View>
				)}
				renderForeground={() => (
					<BookHeader onBack={() => Navigation.pop(componentId)} onMenu={this.handleMenuPress} />
				)}
			>
				<View style={styles.content}>
					<TriggeringView
						onHide={() => this.navTitleView.fadeInUp(200)}
						onDisplay={() => this.navTitleView.fadeOut(100)}
					/>
					<Text ellipsizeMode="tail" numberOfLines={3} style={styles.description}>
						Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great
						destiny proves his worth while attending Hogwarts School for Wizards and Witches.
					</Text>
					<View style={styles.ratingContainer}>
						<TouchableOpacity onPress={() => this.setModalVisible(true)}>
							<Text style={styles.ratingTitle}>
								Rate this Book{' '}
								<Icon name="star-half-alt" size={10} style={styles.headerButtonBackIcon} />
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<CommentLists />

				<CommentInput
					visible={modalVisible}
					rating={rating}
					onSubmit={() => {}}
					setModalVisible={this.setModalVisible}
				/>
			</HeaderImageScrollView>
		);
	}
}

export default Book;
