import React from 'react';
import PropTypes from 'prop-types';
import { RefreshControl, ScrollView, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

const DismissKeyboardView = ({ children, scrollable, onRefresh, refreshing, style }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{!scrollable ? (
			<View style={style}>{children}</View>
		) : (
			<ScrollView
				contentContainerStyle={style}
				showsVerticalScrollIndicator={false}
				refreshControl={
					onRefresh && <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}>
				{children}
			</ScrollView>
		)}
	</TouchableWithoutFeedback>
);

DismissKeyboardView.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	]),
	scrollable: PropTypes.bool,
	onRefresh: PropTypes.func,
	refreshing: PropTypes.bool,
	style: PropTypes.object
};

DismissKeyboardView.defaultProps = {
	children: null,
	scrollable: false,
	onRefresh: undefined,
	refreshing: false,
	style: null
};

export default DismissKeyboardView;
