import { StyleSheet, Platform, Dimensions } from 'react-native';

const isTallIPhone = Platform.OS === "ios" && Dimensions.get('window').height >= 812;

export default StyleSheet.create({
	tabBar: {
		position: 'absolute',
		bottom: 0,
		width: "100%",
		height: isTallIPhone ? 83 : 49,
		backgroundColor: "#f9fafb",
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderTopWidth: 0.3,
		borderTopColor: "#b1b2b3"
	},
	tab: {
		width: "20%",
		height: 49,
		alignItems: "center",
		justifyContent: "center"
	},
	image: {
		width: 20,
		height: 20,
		tintColor: '#b1b2b3'
	},
	imageActive: {
		tintColor: '#000000'
	},
	cameraTab: {
		backgroundColor: '#f9fafb',
		borderWidth: 1,
		borderColor: "#b1b2b3",
		borderRadius: 50,
		width: 60,
		height: 60,
		padding: 3,
		top: -10
	},
	cameraTabInner: {
		backgroundColor: "#b1b2b3",
		borderRadius: 50,
		width: 52,
		height: 52,
		alignItems: "center",
		justifyContent: "center"
	},
	cameraImage: {
		tintColor: '#f9fafb'
	},
	cameraTabActive: {
		borderColor: "#000000"
	},
	cameraTabInnerActive: {
		backgroundColor: "#000000"
	}
});
