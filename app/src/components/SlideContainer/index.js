import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, Text, TouchableOpacity, View, Animated } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Images from '@assets/images';

import styles from './styles';

export default class SlideContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			borderOpacity: new Animated.Value(0),
			titleOpacity: new Animated.Value(0)
		};
	}

	handleScroll(event) {
		const { borderOpacity, titleOpacity } = this.state;
		const offset = event.nativeEvent.contentOffset.y;

		if (!titleOpacity._value && offset > 40) {
			Animated.timing(titleOpacity, {
				toValue: 1,
				duration: 100
			}).start();
		} else if (titleOpacity._value && offset < 40) {
			Animated.timing(titleOpacity, {
				toValue: 0,
				duration: 50
			}).start();
		}

		if (!borderOpacity._value && offset > 16) {
			Animated.timing(borderOpacity, {
				toValue: 1,
				duration: 100
			}).start();
		} else if (borderOpacity._value && offset < 16) {
			Animated.timing(borderOpacity, {
				toValue: 0,
				duration: 50
			}).start();
		}
	}

	render() {
		const { borderOpacity, titleOpacity } = this.state;

		const {
			title,
			children,
			onLeftButtonPress,
			leftIcon,
			onRightButtonPress,
			rightIcon,
			style
		} = this.props;

		const borderBottomColor = borderOpacity.interpolate({
			inputRange: [0, 1],
			outputRange: [EStyleSheet.value('$screenBackground'), EStyleSheet.value('$borderColor')]
		});

		return (
			<View style={styles.container}>
				<Animated.View style={{ ...styles.header, borderBottomColor }}>
					<View style={styles.headerButtonLeftView}>
						{!!onLeftButtonPress && (
							<TouchableOpacity onPress={onLeftButtonPress} style={styles.headerButtonLeft}>
								<Image source={leftIcon} style={styles.headerButtonLeftIcon} />
							</TouchableOpacity>
						)}
					</View>
					<Animated.Text style={{ ...styles.headerTitle, opacity: titleOpacity }}>
						{title}
					</Animated.Text>
					<View style={styles.headerButtonRightView}>
						{!!onRightButtonPress && (
							<TouchableOpacity onPress={onRightButtonPress} style={styles.headerButtonRight}>
								<Image source={rightIcon} style={styles.headerButtonRightIcon} />
							</TouchableOpacity>
						)}
					</View>
				</Animated.View>
				<ScrollView
					style={styles.scrollView}
					contentContainerStyle={[styles.content, style]}
					showsVerticalScrollIndicator={false}
					onScroll={this.handleScroll.bind(this)}
					scrollEventThrottle={1}>
					<Text style={styles.bigTitle}>{title}</Text>
					{children}
				</ScrollView>
			</View>
		);
	}
}

SlideContainer.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	]),
	leftIcon: PropTypes.number,
	onLeftButtonPress: PropTypes.func,
	rightIcon: PropTypes.number,
	onRightButtonPress: PropTypes.func,
	style: PropTypes.object
};

SlideContainer.defaultProps = {
	title: '',
	children: null,
	leftIcon: Images.backIcon,
	onLeftButtonPress: () => {},
	rightIcon: Images.menuIcon,
	onRightButtonPress: () => {},
	style: null
};
