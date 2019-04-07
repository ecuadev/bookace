/* eslint-disable implicit-arrow-linebreak */
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Images from '@assets/images';

export const goHome = () => {
	Navigation.setRoot({
		root: {
			bottomTabs: {
				id: 'BotomTabs',
				visible: false,
				...Platform.select({ android: { drawBehind: true } }),
				children: [
					{
						component: {
							id: 'bottomTabHome',
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
							id: 'bottomTabSearch',
							children: [
								{
									component: {
										name: 'bookace.Search'
									}
								}
							],
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
							id: 'bottomTabCamera',
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
							id: 'bottomTabSocial',
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
							id: 'bottomTabProfile',
							children: [
								{
									component: {
										name: 'bookace.Profile'
									}
								}
							],
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

export const goToSignup = () =>
	Navigation.push('AuthStack', {
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

export const goToForgotPass = () =>
	Navigation.push('AuthStack', {
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

export const goToProfile = stack =>
	Navigation.push(stack, {
		component: {
			name: 'bookace.Profile',
			options: {
				topBar: {
					visible: false,
					height: 0
				}
			}
		}
	});

export const goToCategory = category =>
	Navigation.push('bottomTabSearch', {
		component: {
			name: 'bookace.Category',
			passProps: {
				category
			}
		}
	});

export const goToBook = (book, stack) =>
	Navigation.push(stack, {
		component: {
			name: 'bookace.Book',
			passProps: {
				book
			}
		}
	});

export const goToProfileEdit = () =>
	Navigation.push('bottomTabProfile', {
		component: {
			name: 'bookace.ProfileEdit'
		}
	});
