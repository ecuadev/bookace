import React, { Component } from 'react';
import { Animated, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { setError } from '../../actions/global';

import styles from './styles';

const { height } = Dimensions.get('window');

class Alert extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contentHeight: height,
			message: null
		};

		this.animatedOffset = new Animated.Value(0);
	}

	componentDidUpdate(prevProps) {
		const { error } = this.props;

		if (error !== prevProps.error && error) {
			this.showAlert(error);
		}
	}

	showAlert(message) {
		const { setError } = this.props;
		this.setState({ message },
			() => {
				this.open().then(() => {
					setTimeout(() => {
						this.close();
						setError(null);
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
		const { contentHeight, message } = this.state;

		const containerStyles = [
			styles.container,
			styles.error,
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
		error: state.global.error
	}),
	{ setError }
)(Alert);
