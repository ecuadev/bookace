import React, { Component } from 'react';
import { Animated, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { setAlert } from '../../actions/global';

import styles from './styles';

const { height } = Dimensions.get('window');

class Alert extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contentHeight: height,
			type: null,
			message: null
		};

		this.animatedOffset = new Animated.Value(0);
	}

	componentDidUpdate(prevProps) {
		const { alert } = this.props;

		if (alert !== prevProps.alert && alert.message) {
			this.showAlert(alert);
		}
	}

	showAlert(alert) {
		const { setAlert } = this.props;

		this.setState({ ...alert },
			() => {
				this.open().then(() => {
					setTimeout(() => {
						this.close().then(() => {
							setAlert({});
						});
					}, 3000);
				});
			});
	}

	measureContent({ nativeEvent }) {
		this.setState({
			contentHeight: Math.ceil(nativeEvent.layout.height)
		});
	}

	open() {
		return new Promise(resolve => {
			Animated.timing(this.animatedOffset, {
				toValue: 1,
				useNativeDriver: true
			}).start(() => resolve());
		});
	}

	close() {
		return new Promise(resolve => {
			Animated.timing(this.animatedOffset, {
				toValue: 0,
				useNativeDriver: true
			}).start(() => resolve());
		});
	}

	render() {
		const { contentHeight, type, message } = this.state;

		const containerStyles = [
			styles.container,
			styles[type],
			{
				transform: [
					{
						translateY: this.animatedOffset.interpolate({
							inputRange: [0, 1],
							outputRange: [-contentHeight, 0]
						})
					}
				]
			}
		];

		return (
			<Animated.View style={containerStyles} onLayout={this.measureContent.bind(this)}>
				<TouchableOpacity onPress={this.close}>
					<SafeAreaView>
						<Text style={styles.messageText}>{message}</Text>
					</SafeAreaView>
				</TouchableOpacity>
			</Animated.View>
		);
	}
}

export default connect(
	state => ({
		alert: state.global.alert
	}),
	{ setAlert }
)(Alert);
