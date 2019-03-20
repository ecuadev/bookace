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
| [Redux](https://nodejs.org/) | Predictable state container for JavaScript apps. |
| [Redux Thunk](https://github.com/wix/react-native-navigation) | Thunk middleware for Redux. |

## Installation

Clone this repo

```sh
git clone https://github.com/ecuadev/bookace.git
cd bookace/app
yarn install
```

### Configure Facebook SDK on iOS

Download the Facebook SDK for iOS from https://origincache.facebook.com/developers/resources/?id=facebook-ios-sdk-current.zip  and uncompress it under __~/Documents/FacebookSDK__.

Open /bookace/app/ios/app/Info.plist file and update FacebookDisplayName, FacebookDisplayName and CFBundleURLSchemes values.

https://developers.facebook.com/docs/ios/getting-started/#xcode

### Configure Facebook SDK on Android
Open /bookace/app/android/app/src/main/res/values/strings.xml and update facebook_app_id value.

https://developers.facebook.com/quickstarts/?platform=android


## Development

This project uses EditorConfig to standarize text editor configuration.
Visit http://editorconfig.org for details.

This project uses ESLint to detect suspicious code in JavascriptFiles.
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

This project uses Jest for testing.
Visit https://jestjs.io/ for details.

To execute tests:

```bash
yarn test
```
