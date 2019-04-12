import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles';

const Loading = ({ isLoading }) => (
	<Spinner
		visible={isLoading}
		textContent="Loading..."
		textStyle={styles.spinnerTextStyle}
	/>
);

Loading.propTypes = {
	isLoading: PropTypes.bool
};

Loading.defaultProps = {
	isLoading: false
};

export default connect(
	state => ({
		isLoading: state.global.isLoading
	})
)(Loading);
