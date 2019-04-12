import React from 'react';
import Placeholder from 'rn-placeholder';
import { View, Dimensions } from 'react-native';
import styles from './styles';

const { width } = Dimensions.get('window');

const LoadingBook = ({ index }) => (
	<View style={[styles.loadingBook, index % 2 !== 0 ? styles.loadingBookOdd : null]}>
		<Placeholder.Box
			width="100%"
			height={width * 0.65}
			radius={8}
			animate="fade"
		/>
		<View style={styles.loadingBookText}>
			<Placeholder.Paragraph
				lineNumber={3}
				textSize={16}
				lineSpacing={5}
				animate="fade"
				width="100%"
				lastLineWidth="70%"
				firstLineWidth="50%"
			/>
		</View>
	</View>
);

export default LoadingBook;
