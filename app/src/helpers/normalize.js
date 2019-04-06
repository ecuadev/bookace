//
// Method to normalize size of fonts across devices
//
// Some code taken from https://jsfiddle.net/97ty7yjk/ &
// https://stackoverflow.com/questions/34837342/font-size-on-iphone-6s-plus
//
// author: @xiaoneng
// date: 14/10/2016
// version: 03
//

import { PixelRatio, Dimensions } from 'react-native';

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


const normalize = size => {
	if (pixelRatio >= 2 && pixelRatio < 3) {
		// iphone 5s and older Androids
		if (deviceWidth < 360) {
			return size * 0.75;
		}

		// iphone 5
		if (deviceHeight < 667) {
			return size * 0.79;
			// iphone 6-6s
		}

		if (deviceHeight >= 667 && deviceHeight <= 735) {
			return size * 0.91;
		}
		// older phablets
		return size * 0.98;
	}

	if (pixelRatio >= 3 && pixelRatio < 3.5) {
		// catch Android font scaling on small machines
		// where pixel ratio / font scale ratio => 3:3
		if (deviceWidth <= 360) {
			return size * 0.79;
		}

		// Catch other weird android width sizings
		if (deviceHeight < 667) {
			return size * 0.91;
			// catch in-between size Androids and scale font up
			// a tad but not too much
		}

		if (deviceHeight >= 667 && deviceHeight <= 735) {
			return size * 0.94;
		}

		// catch larger devices
		// ie iphone 6s plus / 7 plus / mi note 等等
		return size;
	}

	if (pixelRatio >= 3.5) {
		// catch Android font scaling on small machines
		// where pixel ratio / font scale ratio => 3:3
		if (deviceWidth <= 360) {
			return size * 0.79;
			// Catch other smaller android height sizings
		}

		if (deviceHeight < 667) {
			return size * 0.94;
			// catch in-between size Androids and scale font up
			// a tad but not too much
		}

		if (deviceHeight >= 667 && deviceHeight <= 735) {
			return size * 0.98;
		}

		// catch larger phablet devices
		return size * 1.1;
	}

	return size;
};

export default normalize;
