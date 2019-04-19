import React, { PureComponent, PropTypes } from 'react';
import { Image, Text, View } from 'react-native';
import ProfileImage from '../../components/ProfileImage';
import { Rating } from 'react-native-ratings';
import { connect } from 'react-redux';

import moment from 'moment';
import styles from './styles';

class Comment extends PureComponent {
	render() {
		const { data } = this.props;
		const { comment, created, rating, first_name, last_name } = data;
		const ratingElem = (
			<Rating imageSize={12} readonly startingValue={rating} style={styles.review} />
		);

		return (
			// <View style={styles.container}>
			<View style={styles.commentContainer}>
				<View>
					<Text style={[styles.text, styles.title]}>{`${first_name} ${last_name}`}</Text>
				</View>
				{/* <View style={styles.reviewContainer}> */}

				<View>{ratingElem}</View>
				{/* </View> */}
				<View>
					<Text ellipsizeMode="tail" numberOfLines={2} style={[styles.text, styles.comment]}>
						{comment}
					</Text>
				</View>
				<View>
					<Text style={[styles.text, styles.date]}>{`${moment(created).fromNow()}`}</Text>
				</View>
			</View>
			// </View>
		);
	}
}
const mapStateToProps = state => {
	return {
		network: state.network,
		user: state.user.profile,
	};
};
export default connect(mapStateToProps)(Comment);
