import React from 'react';
import { View, Text, Image } from 'react-native';
import Images from '@assets/images';
import styles from './styles';

const NoConnection = () => (
	<View style={styles.noInternet}>
		<Image source={Images.noInternet} style={styles.noInternetImage} />
		<Text style={styles.noInternetTitle}>No internet connection available</Text>
		<Text style={styles.noInternetMessage}>Your device is not connect to internet, please make sure your connection is working.</Text>
	</View>
);

export default NoConnection;
