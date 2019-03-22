import { Navigation } from 'react-native-navigation';
import Images from '@assets/images';

export const goHome = () => {
	Navigation.setRoot({
		root: {
			bottomTabs: {
				id: 'BotomTabs',
				children: [
					{
						component: {
							name: 'bookace.Home',
							options: {
								bottomTab: {
									icon: Images.homeTabIcon
								}
							}
						}
					},
					{
						component: {
							name: 'bookace.Search',
							options: {
								bottomTab: {
									icon: Images.searchTabIcon
								}
							}
						}
					},
					{
						component: {
							name: 'bookace.Camera',
							options: {
								bottomTab: {
									icon: Images.cameraTabIcon
								}
							}
						}
					},
					{
						component: {
							name: 'bookace.Social',
							options: {
								bottomTab: {
									icon: Images.socialTabIcon
								}
							}
						}
					},
					{
						component: {
							name: 'bookace.Profile',
							options: {
								bottomTab: {
									icon: Images.profileTabIcon
								}
							}
						}
					}
				]
			}
		}
	});

	Navigation.showOverlay({
		component: {
			name: 'bookace.TabBar',
			options: {
				overlay: {
					interceptTouchOutside: false
				}
			}
		}
	});
};

export const goToLogin = () => Navigation.setRoot({
	root: {
		stack: {
			id: 'AuthStack',
			children: [
				{
					component: {
						name: 'bookace.Login',
						options: {
							topBar: {
								visible: false,
								height: 0
							}
						}
					}
				}
			]
		}
	}
});

export const goToSignup = () => Navigation.push('AuthStack', {
	component: {
		name: 'bookace.Signup',
		options: {
			topBar: {
				visible: false,
				height: 0
			}
		}
	}
});
