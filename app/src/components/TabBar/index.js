import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';

import Images from '@assets/images';
import styles from './styles';

export default class TabBar extends Component {
	constructor(props) {
		super(props);
		Navigation.events().bindComponent(this);
		this.state = {
			activeTab: 0
		};
	}

	changeToTab(newIndex) {
		this.setState({ activeTab: newIndex });

		Navigation.mergeOptions('BotomTabs', {
			bottomTabs: {
				currentTabIndex: newIndex
			}
		});
	}

	render() {
		const { activeTab } = this.state;

		return (
			<View style={styles.tabBar}>
				<TouchableOpacity
					activeOpacity={1}
					onPress={() => this.changeToTab(0)}
					style={styles.tab}>
					<Image source={Images.homeTabIcon} style={[styles.image, activeTab === 0 && styles.imageActive]} />
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={1}
					onPress={() => this.changeToTab(1)}
					style={styles.tab}>
					<Image source={Images.searchTabIcon} style={[styles.image, activeTab === 1 && styles.imageActive]} />
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={1}
					onPress={() => this.changeToTab(2)}
					style={[styles.cameraTab, activeTab === 2 && styles.cameraTabActive]}>
					<View style={[styles.cameraTabInner, activeTab === 2 && styles.cameraTabInnerActive]}>
						<Image source={Images.cameraTabIcon} style={[styles.image, styles.cameraImage]} />
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={1}
					onPress={() => this.changeToTab(3)}
					style={styles.tab}>
					<Image source={Images.socialTabIcon} style={[styles.image, activeTab === 3 && styles.imageActive]} />
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={1}
					onPress={() => this.changeToTab(4)}
					style={styles.tab}>
					<Image source={Images.profileTabIcon} style={[styles.image, activeTab === 4 && styles.imageActive]} />
				</TouchableOpacity>
			</View>
		);
	}
}
