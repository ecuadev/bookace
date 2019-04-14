/* eslint-disable implicit-arrow-linebreak */
import { Navigation } from 'react-native-navigation';
import Images from '@assets/images';

export const goHome = () => {
	Navigation.setRoot({
		root: {
			bottomTabs: {
				id: 'BotomTabs',
				children: [
					{
						stack: {
							id: 'bottomTabHome',
							children: [
								{
									component: {
										name: 'bookace.Home',
									},
								},
							],
							options: {
								bottomTab: {
									icon: Images.homeTabIcon,
								},
							},
						},
					},
					{
						stack: {
							id: 'bottomTabSearch',
							children: [
								{
									component: {
										name: 'bookace.Search',
									},
								},
							],
							options: {
								bottomTab: {
									icon: Images.searchTabIcon,
								},
							},
						},
					},
					{
						component: {
							id: 'bottomTabSocial',
							name: 'bookace.Social',
							options: {
								bottomTab: {
									icon: Images.socialTabIcon,
								},
							},
						},
					},
					{
						stack: {
							id: 'bottomTabProfile',
							children: [
								{
									component: {
										name: 'bookace.Profile',
									},
								},
							],
							options: {
								bottomTab: {
									icon: Images.searchTabIcon,
								},
							},
						},
					},
				],
			},
		},
	});

	Navigation.showOverlay({
		component: {
			id: 'mainTabbar',
			name: 'bookace.TabBar',
			options: {
				overlay: {
					interceptTouchOutside: false,
				},
			},
		},
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
									height: 0,
								},
							},
						},
					},
				],
			},
		},
	});
};

export const goToSignup = () =>
	Navigation.push('AuthStack', {
		component: {
			name: 'bookace.Signup',
		},
	});

export const goToForgotPass = () =>
	Navigation.push('AuthStack', {
		component: {
			name: 'bookace.ForgotPass',
		},
	});

// Pass tab index as int
export const goToTab = index => {
	Navigation.dismissAllModals();
	Navigation.popToRoot('bottomTabSearch').catch(err => {
		console.log(err);
	});
	Navigation.popToRoot('bottomTabProfile').catch(err => {
		console.log(err);
	});

	Navigation.mergeOptions('BotomTabs', {
		bottomTabs: {
			currentTabIndex: index,
		},
	});
};

// Pass category as string
export const goToCategory = category =>
	Navigation.push('bottomTabSearch', {
		component: {
			name: 'bookace.Category',
			passProps: {
				category,
			},
		},
	});

export const goToBook = (book, stack) => {
	console.log(stack);
	Navigation.push(stack, {
		component: {
			name: 'bookace.Book',
			passProps: {
				book,
			},
		},
	});
};

export const goToProfileEdit = () =>
	Navigation.push('bottomTabProfile', {
		component: {
			name: 'bookace.ProfileEdit',
		},
	});

export const showCamera = props =>
	Navigation.showModal({
		component: {
			id: 'cameraModal',
			name: 'bookace.Camera',
			passProps: props,
		},
	});

export const hideCamera = () => Navigation.dismissModal('cameraModal');
