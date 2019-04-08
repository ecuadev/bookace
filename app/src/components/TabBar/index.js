import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import * as Animatable from 'react-native-animatable';
import Images from '@assets/images';

import { isTallIPhone } from '../../helpers';
import { showCamera, hideCamera } from '../../config/navigation';
import styles from './styles';

export default class TabBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: 0
		};
	}

	handleTabClick(newIndex) {
		this.setState({ activeTab: newIndex });

		Navigation.dismissAllModals();

		Navigation.popToRoot('bottomTabSearch').catch(err => {
			console.log(err);
		});
		Navigation.popToRoot('bottomTabProfile').catch(err => {
			console.log(err);
		});

		Navigation.mergeOptions('BotomTabs', {
			bottomTabs: {
				currentTabIndex: newIndex
			}
		});
	}

	handleCameraClick() {
		showCamera({
			handleClose: this.handleCameraBack.bind(this)
		});
		this.tabBar.transitionTo({ bottom: isTallIPhone() ? -95 : -60 }, 300, 'ease');
	}

	handleCameraBack() {
		hideCamera();

		this.tabBar.transitionTo({ bottom: 0 }, 300, 'ease');
	}

	render() {
		const { activeTab } = this.state;

		return (
			<Animatable.View style={styles.tabBar} ref={ref => { this.tabBar = ref; }}>
				<TouchableOpacity
					activeOpacity={1}
					onPress={() => this.handleTabClick(0)}
					style={styles.tab}>
					<Image source={Images.homeTabIcon} style={[styles.image, activeTab === 0 && styles.imageActive]} />
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={1}
					onPress={() => this.handleTabClick(1)}
					style={styles.tab}>
					<Image source={Images.searchTabIcon} style={[styles.image, activeTab === 1 && styles.imageActive]} />
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={1}
					onPress={this.handleCameraClick.bind(this)}
					style={[styles.cameraTab]}>
					<View style={[styles.cameraTabInner]}>
						<Image source={Images.cameraTabIcon} style={[styles.image, styles.cameraImage]} />
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={1}
					onPress={() => this.handleTabClick(2)}
					style={styles.tab}>
					<Image source={Images.socialTabIcon} style={[styles.image, activeTab === 2 && styles.imageActive]} />
				</TouchableOpacity>

				<TouchableOpacity
					activeOpacity={1}
					onPress={() => this.handleTabClick(3)}
					style={styles.tab}>
					<Image source={Images.profileTabIcon} style={[styles.image, activeTab === 3 && styles.imageActive]} />
				</TouchableOpacity>
			</Animatable.View>
		);
	}
}
