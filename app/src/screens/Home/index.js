import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setTab } from '../../actions/activeTab';
// import { goToProfile } from '../../config/navigation';
import ProfileImage from '../../components/ProfileImage';
import SingleCarousel from '../../components/Carousel/SingleCarousel';
import StackCarousel from '../../components/Carousel/StackCarousel';
import NoConnection from '../../components/NoConnection';

import { books } from '../../helpers/data';

import styles from './styles';

class Home extends Component {
	goToProfile(newIndex) {
		const { setTab } = this.props;
		setTab(newIndex);
	}

	render() {
		const { network, user, componentId } = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerTitle} numberOfLines={1}>
						{`Hi, ${user.first_name || user.name || user.email}!`}
					</Text>

					<View style={styles.user}>
						<View style={styles.userImageContainer}>
							<TouchableOpacity onPress={() => this.goToProfile(3)} style={styles.headerButtonLeft}>
								<ProfileImage picture={user.picture} source={user.pictureSource} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
				{network.connected && (
					<View style={styles.carouselContainer}>
						<StackCarousel books={books} parentId={componentId} />
						<SingleCarousel books={books} title="Recommended" parentId={componentId} />
					</View>
				)}
				{network.hasCheckedStatus && !network.connected && <NoConnection />}
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		network: state.network,
		user: state.user.profile,
		activeTab: state.activeTab.tab,
	};
};
const mapDispatchToProps = {
	setTab,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);
