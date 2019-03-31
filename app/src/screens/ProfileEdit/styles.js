import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone } from '../../helpers';

export default EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '$grayBackground',
		marginBottom: isTallIPhone() ? 83 : 49
	},
	header: {
		paddingHorizontal: 15,
		paddingTop: isTallIPhone() ? 42 : 21,
		paddingBottom: 20,
		alignItems: 'center',
		backgroundColor: '$screenBackground',
		borderBottomWidth: 0.3,
		borderColor: '$borderColor'
	},
	headerButtons: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20
	},
	headerButtonBack: {
		padding: 5
	},
	headerButtonBackIcon: {
		width: 22,
		height: 22,
		tintColor: '$primaryColor'
	},
	headerButtonMenu: {
		padding: 5
	},
	headerButtonMenuIcon: {
		width: 22,
		height: 22,
		tintColor: '$primaryColor'
	},
	imageBorder: {
		width: 120,
		height: 120,
		borderRadius: 100,
		overflow: 'hidden',
		marginRight: 15
	},
	image: {
		width: '100%',
		height: '100%'
	},
	imageButton: {
		width: 'auto',
		height: 30,
		paddingHorizontal: 15,
		marginTop: 15
	},
	sectionTitle: {
		fontFamily: 'Montserrat-SemiBold',
		color: '$primaryTextColor',
		paddingHorizontal: 20,
		fontSize: 16,
		paddingTop: 35,
		paddingBottom: 15,
		borderBottomWidth: 0.5,
		borderColor: '$borderColor'
	},
	sectionForm: {
		borderTopWidth: 0.3,
		borderColor: '$borderColor',
		backgroundColor: '$screenBackground'
	},
	sectionField: {
		justifyContent: 'space-between',
		height: 65,
		borderBottomWidth: 0.3,
		borderColor: '$borderColor'
	},
	sectionFieldSocial: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20
	},
	sectionLabel: {
		position: 'absolute',
		top: 10,
		paddingHorizontal: 20,
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 14,
		color: '$secondaryTextColor'
	},
	sectionInput: {
		flex: 1,
		fontFamily: 'Montserrat',
		fontSize: 14,
		color: '$primaryTextColor',
		height: 65,
		paddingTop: 20,
		paddingHorizontal: 20
	},
	pickerOptions: {
		marginBottom: isTallIPhone() ? 83 : 49
	},
	socialFieldService: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	socialFieldIcon: {
		marginRight: 15
	},
	socialFieldLabel: {
		fontFamily: 'Montserrat-Medium',
		color: '$primaryTextColor',
		fontSize: 14
	},
	buttons: {
		paddingHorizontal: 20,
		paddingTop: 40,
		paddingBottom: 60
	},
	deleteAccountLink: {
		marginTop: 20
	},
	deleteAccountText: {
		color: '$primaryColor'
	}
});
