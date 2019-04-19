import React, { Component } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Comment from './Comment';
import { reviews } from '../../helpers/data';
// import commentInput from './CommentInput';
import styles from './styles';

export default class CommentLists extends Component {
	state = {
		refreshing: false,
	};

	onRefresh() {
		// do another fetch here
		alert('Refresehd');
	}

	render() {
		return (
			// <ScrollView
			// 	ref={scrollView => {
			// 		this._scrollView = scrollView;
			// 	}}
			// 	refreshControl={
			// 		<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
			// 	}
			// >
			<View style={styles.listContainer}>
				{reviews.map(item => (
					<ListItem
						contentContainerStyle={styles.listContentContainer}
						key={item.id}
						leftAvatar={{ source: { uri: item.avatar } }}
						avatarStyle={styles.avatar}
						subtitle={<Comment data={item} />}
						rightContentContainerStyle={styles.rightContentContainerStyle}
						chevron
					/>
				))}
			</View>
			// </ScrollView>
		);
	}
}
