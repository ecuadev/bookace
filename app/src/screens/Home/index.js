import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Images from '@assets/images';
import { goToProfile } from '../../config/navigation';
import SingleCarousel from '../../components/Carousel/SingleCarousel/SingleCarousel';
import StackCarousel from '../../components/Carousel/StackCarousel/StackCarousel';
import NoConnection from '../../components/NoConnection';

import { books } from '../../helpers/data';

import styles from './styles';

class Home extends Component {
	render() {
		const { network, user, componentId } = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>
						{user.profile.firstName
							? `Hi, ${user.profile.firstName}`
							: 'Welcome'}
					</Text>

					<View style={styles.user}>
						<View style={styles.userImageContainer}>
							<TouchableOpacity
								onPress={() => goToProfile(componentId)}
								style={styles.headerButtonLeft}
							>
								<Image
									source={
										user.profile.pictureUrl
											? { uri: user.profile.pictureUrl }
											: Images.profilePic
									}
									style={styles.userImage}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				{network.connected && (
					<View style={styles.carouselContainer}>
						<View style={{ flex: 4 }}>
							<StackCarousel
								books={books}
								title="Best Sellers"
								componentId={componentId}
							/>
						</View>
						<View style={{ flex: 3 }}>
							<SingleCarousel
								books={books}
								title="Categories"
								componentId={componentId}
							/>
						</View>
					</View>
				)}
				{network.hasCheckedStatus && !network.connected && <NoConnection />}
			</View>
		);
	}
}

export default connect(state => ({
	network: state.network,
	user: state.user.currentUser
}))(Home);
