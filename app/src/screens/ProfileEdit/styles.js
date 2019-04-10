import EStyleSheet from 'react-native-extended-stylesheet';
import { isTallIPhone, normalize } from '../../helpers';

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
		alignItems: 'center',
		marginBottom: 20
	},
	headerButtonBack: {
		padding: 5
	},
	headerButtonBackIcon: {
		width: normalize(22),
		height: normalize(22),
		tintColor: '$primaryColor'
	},
	headerButtonSave: {
		padding: 5
	},
	headerButtonSaveText: {
		fontFamily: 'Montserrat',
		fontSize: normalize(16),
		color: '$primaryColor'
	},
	imageBorder: {
		width: normalize(120),
		height: normalize(120),
		borderRadius: normalize(100),
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: '100%'
	},
	imageButton: {
		width: 'auto',
		height: normalize(30),
		paddingHorizontal: 15,
		marginTop: 15
	},
	sectionTitle: {
		fontFamily: 'Montserrat-SemiBold',
		color: '$primaryTextColor',
		paddingHorizontal: 20,
		fontSize: normalize(16),
		paddingTop: 35,
		paddingBottom: 15
	},
	sectionForm: {
		borderTopWidth: 0.3,
		borderColor: '$borderColor',
		backgroundColor: '$screenBackground'
	},
	sectionField: {
		justifyContent: 'space-between',
		height: normalize(65),
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
		top: normalize(10),
		paddingHorizontal: 20,
		fontFamily: 'Montserrat-SemiBold',
		fontSize: normalize(14),
		color: '$secondaryTextColor'
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
		fontSize: normalize(14)
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
