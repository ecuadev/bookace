import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import RNDatePicker from 'react-native-datepicker';
import Images from '@assets/images';

import styles from './styles';

const DatePicker = ({
	date,
	format,
	label,
	placeholder,
	minDate,
	maxDate,
	onDateChange,
	error,
	style,
	optionsStyle
}) => (
	<View style={[styles.wrapper, style]}>
		{ !!label && <Text style={styles.label}>{label}</Text>}
		<RNDatePicker
			date={date}
			style={styles.datePickerWrapper}
			mode="date"
			placeholder={placeholder}
			format={format}
			minDate={minDate}
			maxDate={maxDate}
			confirmBtnText="Confirm"
			cancelBtnText="Cancel"
			iconSource={Images.calendarIcon}
			customStyles={{
				dateTouchBody: styles.dateTouchBody,
				dateIcon: styles.dateIcon,
				dateInput: [styles.dateInput, error && styles.dateInputError],
				dateText: styles.dateText,
				datePickerCon: optionsStyle,
				datePicker: styles.datePicker,
				btnTextConfirm: styles.btnTextConfirm,
				btnTextCancel: styles.btnTextCancel
			}}
			onDateChange={date => onDateChange(date)}
		/>
		{!!error && <Text style={styles.error}>{error}</Text>}
	</View>
);

DatePicker.propTypes = {
	date: PropTypes.string,
	format: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	minDate: PropTypes.string,
	maxDate: PropTypes.string,
	onDateChange: PropTypes.func,
	error: PropTypes.string,
	style: PropTypes.object,
	optionsStyle: PropTypes.object
};

DatePicker.defaultProps = {
	date: '',
	format: 'YYYY-MM-DD',
	label: null,
	placeholder: ' ',
	minDate: null,
	maxDate: null,
	onDateChange: () => {},
	error: null,
	style: null,
	optionsStyle: null
};

export default DatePicker;
