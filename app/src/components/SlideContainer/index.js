import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, TouchableOpacity, View, Animated } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Images from '@assets/images';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { normalize } from '../../helpers';
import styles from './styles';

export default class SlideContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			borderOpacity: new Animated.Value(0),
			titleOpacity: new Animated.Value(0),
		};
	}

	handleScroll(event) {
		const { borderOpacity, titleOpacity } = this.state;
		const offset = event.nativeEvent.contentOffset.y;

		if (!titleOpacity._value && offset > normalize(40)) {
			Animated.timing(titleOpacity, {
				toValue: 1,
				duration: 100,
			}).start();
		} else if (titleOpacity._value && offset < normalize(40)) {
			Animated.timing(titleOpacity, {
				toValue: 0,
				duration: 50,
			}).start();
		}

		if (!borderOpacity._value && offset > normalize(16)) {
			Animated.timing(borderOpacity, {
				toValue: 1,
				duration: 100,
			}).start();
		} else if (borderOpacity._value && offset < normalize(16)) {
			Animated.timing(borderOpacity, {
				toValue: 0,
				duration: 50,
			}).start();
		}
	}

	render() {
		const { borderOpacity, titleOpacity } = this.state;

		const {
			title,
			children,
			onLeftButtonPress,

			onRightButtonPress,

			style,
			titleStyle,
			stickyHeaderIndices,
		} = this.props;

		const borderBottomColor = borderOpacity.interpolate({
			inputRange: [0, 1],
			outputRange: [EStyleSheet.value('$screenBackground'), EStyleSheet.value('$borderColor')],
		});

		return (
			<View style={styles.container}>
				<Animated.View style={{ ...styles.header, borderBottomColor }}>
					<View style={styles.headerButtonLeftView}>
						{!!onLeftButtonPress && (
							<TouchableOpacity onPress={onLeftButtonPress} style={styles.headerButtonLeft}>
								<Icon name="arrow-left" size={20} style={styles.headerButtonLeftIcon} />
							</TouchableOpacity>
						)}
					</View>
					<Animated.Text style={{ ...styles.headerTitle, opacity: titleOpacity }}>
						{title}
					</Animated.Text>
					<View style={styles.headerButtonRightView}>
						{!!onRightButtonPress && (
							<TouchableOpacity onPress={onRightButtonPress} style={styles.headerButtonRight}>
								<Icon name="arrow-right" size={20} style={styles.headerButtonLeftIcon} />
							</TouchableOpacity>
						)}
					</View>
				</Animated.View>
				<ScrollView
					style={styles.scrollView}
					contentContainerStyle={[styles.content, style]}
					showsVerticalScrollIndicator={false}
					onScroll={this.handleScroll.bind(this)}
					scrollEventThrottle={1}
					stickyHeaderIndices={stickyHeaderIndices.map(i => i + 1)}
				>
					<Text style={[styles.bigTitle, titleStyle]}>{title}</Text>
					{children}
				</ScrollView>
			</View>
		);
	}
}

SlideContainer.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
	leftIcon: PropTypes.number,
	onLeftButtonPress: PropTypes.func,
	rightIcon: PropTypes.number,
	onRightButtonPress: PropTypes.func,
	stickyHeaderIndices: PropTypes.arrayOf(PropTypes.number),
	style: PropTypes.object,
	titleStyle: PropTypes.object,
};

SlideContainer.defaultProps = {
	title: '',
	children: null,
	leftIcon: Images.backIcon,
	onLeftButtonPress: undefined,
	rightIcon: Images.menuIcon,
	onRightButtonPress: undefined,
	stickyHeaderIndices: [],
	style: null,
	titleStyle: null,
};
