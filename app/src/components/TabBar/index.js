import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { setTab } from '../../actions/activeTab';
import { isTallIPhone } from '../../helpers';
import { showCamera, hideCamera } from '../../config/navigation';
import styles from './styles';

class TabBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tabs: ['home', 'search', 'camera', 'user-friends', 'user-alt'],
		};
	}

	handleTabClick(newIndex) {
		const { setTab } = this.props;
		setTab(newIndex);
	}

	handleCameraClick() {
		showCamera({
			handleClose: this.handleCameraBack.bind(this),
		});
		this.tabBar.transitionTo({ bottom: isTallIPhone() ? -95 : -60 }, 300, 'ease');
	}

	handleCameraBack() {
		hideCamera();

		this.tabBar.transitionTo({ bottom: 0 }, 300, 'ease');
	}

	render() {
		const { activeTab } = this.props;
		const { tabs } = this.state;

		return (
			<Animatable.View
				style={styles.tabBar}
				ref={ref => {
					this.tabBar = ref;
				}}
			>
				{tabs.map(tab => {
					let tabIndex = tabs.indexOf(tab);
					// this is because camera is not a tab but it is included in the array
					if (tabIndex >= 2) {
						tabIndex -= 1;
					}
					return tab === 'camera' ? (
						<TouchableOpacity
							activeOpacity={1}
							onPress={this.handleCameraClick.bind(this)}
							style={[styles.cameraTab]}
							key={tabIndex}
						>
							<View style={[styles.cameraTabInner]}>
								<Icon name={`${tab}`} size={30} style={[styles.image, styles.cameraImage]} />
							</View>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							activeOpacity={1}
							onPress={() => this.handleTabClick(tabIndex)}
							style={styles.tab}
							key={tab}
						>
							<View>
								<Icon
									name={`${tab}`}
									size={15}
									style={[styles.image, activeTab === tabIndex && styles.imageActive]}
								/>
							</View>
						</TouchableOpacity>
					);
				})}
			</Animatable.View>
		);
	}
}

function mapStateToProps(state) {
	return {
		activeTab: state.activeTab.tab,
	};
}
const mapDispatchToProps = {
	setTab,
};
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TabBar);
