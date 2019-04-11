import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { goToProfile } from '../../config/navigation';
import ProfileImage from '../../components/ProfileImage';
import SingleCarousel from '../../components/Carousel/SingleCarousel';
import StackCarousel from '../../components/Carousel/StackCarousel';
import NoConnection from '../../components/NoConnection';

import { books } from '../../helpers/data';

import styles from './styles';

class Home extends Component {
	render() {
		const { network, user, componentId } = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>{`Hi, ${user.first_name || user.name || user.email}!`}</Text>

					<View style={styles.user}>
						<View style={styles.userImageContainer}>
							<TouchableOpacity
								onPress={() => goToProfile(componentId)}
								style={styles.headerButtonLeft}>
								<ProfileImage picture={user.picture} source={user.pictureSource} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
				{network.connected && (
					<View style={styles.carouselContainer}>
						<StackCarousel books={books} />
						<SingleCarousel
							books={books}
							title="Categories"
							componentId={componentId}
						/>
					</View>
				)}
				{network.hasCheckedStatus && !network.connected && <NoConnection />}
			</View>
		);
	}
}

export default connect(state => ({
	network: state.network,
	user: state.user.profile
}))(Home);
