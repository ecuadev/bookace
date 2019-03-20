/* eslint-disable quotes */
import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
	container: {
		flex: 1
	},
	inner: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 30,
		paddingVertical: 10
	},
	logo: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center"
	},
	logoImage: {
		width: 130,
		height: 130,
		tintColor: "$lightTextColor"
	},
	title: {
		fontSize: 40,
		textAlign: "center",
		margin: 10,
		color: "$lightTextColor"
	},
	form: {
		width: "100%"
	},
	signUpButton: {
		marginTop: 10
	},
	separator: {
		flexDirection: "row",
		marginVertical: 25,
		alignItems: "center",
		justifyContent: "center"
	},
	separatorLine: {
		height: 2,
		backgroundColor: "$lightTextColor",
		width: 40
	},
	separatorText: {
		fontSize: 14,
		fontWeight: "700",
		color: "$lightTextColor",
		paddingHorizontal: 20
	},
	fbButton: {
		marginBottom: 15
	},
	bottomLinks: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 20
	},
	bottomLink: {
		color: "$lightTextColor",
		fontWeight: "500"
	},
	bottomLinkContainer: {
		paddingVertical: 10
	},
	backToLogin: {
		color: "$primaryColor",
		fontWeight: "500"
	}
});
