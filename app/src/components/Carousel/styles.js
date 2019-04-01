import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export const colors = {
	black: '#1a1917',
	gray: '#888888',
	background1: '#B721FF',
	background2: '#21D4FD',
};

export default EStyleSheet.create({
	safeArea: {
		// flex: 1,
		backgroundColor: '$darkTextColor',
		flex: 3,
		marginHorizontal: 20,
		paddingBottom: 10,
	},
	container: {
		flex: 1,
		height: '40%',
		backgroundColor: '$screenBackground',
	},
	gradient: {
		...StyleSheet.absoluteFillObject,
	},
	scrollview: {
		flex: 1,
	},
	exampleContainer: {
		paddingVertical: 1,
	},
	exampleContainerDark: {
		backgroundColor: '$darkTextColor',
	},
	exampleContainerLight: {
		backgroundColor: 'white',
	},
	title: {
		// paddingHorizontal: 3,
		backgroundColor: 'transparent',
		// color: 'rgba(255, 255, 255, 0.9)',
		// fontSize: 20,
		// fontWeight: 'bold',
		textAlign: 'left',
		color: '$primaryTextColor',
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 26,
		paddingTop: 8,
	},
	titleDark: {
		color: '$darkTextColor',
	},
	subtitle: {
		marginTop: 5,
		paddingHorizontal: 30,
		backgroundColor: 'transparent',
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: 13,
		fontStyle: 'italic',
		textAlign: 'center',
	},
	slider: {
		marginTop: 5,
		overflow: 'visible', // for custom animations
	},
	sliderContentContainer: {
		paddingVertical: 10, // for custom animation
	},
	paginationContainer: {
		paddingVertical: 8,
	},
	paginationDot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		marginHorizontal: 8,
	},
});
