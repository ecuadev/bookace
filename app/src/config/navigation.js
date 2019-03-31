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
						stack: {
							id: 'SearchStack',
							children: [{
								component: {
									name: 'bookace.Search'
								}
							}],
							options: {
								topBar: {
									visible: false,
									height: 0
								},
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
						stack: {
							id: 'ProfileStack',
							children: [{
								component: {
									name: 'bookace.Profile'
								}
							}],
							options: {
								topBar: {
									visible: false,
									height: 0
								},
								bottomTab: {
									icon: Images.searchTabIcon
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
			id: 'mainTabbar',
			name: 'bookace.TabBar',
			options: {
				overlay: {
					interceptTouchOutside: false
				}
			}
		}
	});
};

export const goToLogin = dismissTabBar => {
	if (dismissTabBar) {
		Navigation.dismissOverlay('mainTabbar');
	}

	Navigation.setRoot({
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
};

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

export const goToForgotPass = () => Navigation.push('AuthStack', {
	component: {
		name: 'bookace.ForgotPass',
		options: {
			topBar: {
				visible: false,
				height: 0
			}
		}
	}
});

export const goToCategory = category => Navigation.push('SearchStack', {
	component: {
		name: 'bookace.Category',
		passProps: {
			category
		}
	}
});

export const goToBook = (book, stack) => Navigation.push(stack, {
	component: {
		name: 'bookace.Book',
		passProps: {
			book
		}
	}
});

export const goToProfileEdit = () => Navigation.push('ProfileStack', {
	component: {
		name: 'bookace.ProfileEdit'
	}
});
