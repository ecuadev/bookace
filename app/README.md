# bookace - React Native App

## Requirements
- [Node](https://nodejs.org/) >= 10.15.3
- [npm](https://npmjs.com) >= 6.4.1


## Tools
| Name             | Description   |
| -------------- |--------------|
| [React Native](https://facebook.github.io/react-native/) |  Build Native Mobile Apps using JavaScript and React. |
| [React Native Navigation](https://github.com/wix/react-native-navigation) | App-wide support for 100% native navigation with an easy cross-platform interface. |
| [React Native Extended StyleSheet](https://github.com/vitalets/react-native-extended-stylesheet) | Drop-in replacement of React Native StyleSheet with media-queries, variables, dynamic themes, relative units, percents, math operations, scaling and other styling stuff. |
| [React Native Camera](https://github.com/react-native-community/react-native-camera) | A Camera component for React Native. |
| [Redux](https://redux.js.org/) | Predictable state container for JavaScript apps. |
| [Redux Thunk](https://github.com/wix/react-native-navigation) | Thunk middleware for Redux. |
| [MongoDB Stitch React Native SDK](https://www.npmjs.com/package/mongodb-stitch-react-native-sdk) | The official MongoDB Stitch React Native SDK for JavaScript/TypeScript. |


## Installation

Clone this repo

```sh
git clone https://github.com/ecuadev/bookace.git
cd bookace/app
yarn install
```

### Configure Facebook SDK on iOS

- Download the Facebook SDK for iOS from https://origincache.facebook.com/developers/resources/?id=facebook-ios-sdk-current.zip and uncompress it under __~/Documents/FacebookSDK__.

- Open /ios/app/Info.plist file and update FacebookDisplayName, FacebookDisplayName and CFBundleURLSchemes values.

https://developers.facebook.com/docs/ios/getting-started/#xcode

> Note: If you get this error: **Fix FBSDKCoreKit/FBSDKCoreKit.h file not found on React Native** double click on Framework Search Path under the build settings tab of your project, and replace \*~/Documents/FacebookSDK\* with to \*$(HOME)/Documents/FacebookSDK\*

### Configure Facebook SDK on Android
Open /android/app/src/main/res/values/strings.xml and update facebook_app_id value.

https://developers.facebook.com/quickstarts/?platform=android

### Configure Google SDK on iOS

- Download the GoogleSignIn SDK for iOS from https://developers.google.com/identity/sign-in/ios/sdk/ and uncompress it under __~/Documents/GoogleSDK__.
- Follow [this](https://github.com/react-native-community/react-native-google-signin/blob/master/docs/get-config-file.md) guide to get the configuration file.
- Download the GoogleService-Info.plist file and copy the reversed client id value and the google client id.
- Open /ios/app/Info.plist file and update the CFBundleURLSchemes value corresponding to the REVERSED_CLIENT_ID.
- Create .env file and set your GOOGLE_CLIENT_ID.

### Configure Google SDK on Android

- Follow [this](https://github.com/react-native-community/react-native-google-signin/blob/924b152f2f8c76ec2fd24c268edfdfc4b0fb346e/docs/get-config-file.md) guide to get the google project configuration file.
- Place the generated configuration file (google-services.json) into /android/app

### Congigure Stitch App

Set your MongoDB Stitch App Id (STITCH_CLIENT_APP_ID) in the .env file.


## Development

- This project uses EditorConfig to standarize text editor configuration.
Visit http://editorconfig.org for details.

- This project uses ESLint to detect suspicious code in JavascriptFiles.
Visit http://eslint.org for details.

To run the project on ios:
```sh
react-native run-ios
```

To run the project on android:
```sh
react-native run-android
```


### Testing

- This project uses [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) for testing.

To execute tests:

```bash
yarn test
```
