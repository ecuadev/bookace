import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Picker } from 'react-native';
import styles from './styles';

class ModalPicker extends Component {
	constructor(props) {
		super(props);

		const { selectedValue } = this.props;

		this.state = { selectedValue };
		this.onChange = this.onChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const { selectedValue } = this.props;

		if (nextProps.selectedValue !== selectedValue) {
			this.setState({ selectedValue: nextProps.selectedValue });
		}
	}

	onStartShouldSetResponder(e) {
		return true;
	}

	onMoveShouldSetResponder(e) {
		return true;
	}

	onChange(itemValue) {
		const { onChange } = this.props;

		this.setState({ selectedValue: itemValue });
		onChange(itemValue);
	}

	getLabel(val) {
		const { options } = this.props;
		const selectecObject = options.find(el => el.value === val);

		return selectecObject ? selectecObject.label : '';
	}

	render() {
		const { label, options, placeholder, disabled, style } = this.props;
		const { selectedValue } = this.state;

		return (
			<View style={[styles.wrapper, style]}>
				{!!label && <Text style={styles.label}>{label}</Text>}
				<View style={[styles.textBoxWrapper, styles.textBoxWrapperAndroid, disabled && styles.disabled]}>
					<Picker
						selectedValue={selectedValue}
						onValueChange={this.onChange}
						style={styles.pickerAndroid}
						enabled={!disabled}
						mode="dropdown"
						prompt={placeholder}>
						{ options.map(option => <Picker.Item key={option.value} value={option.value} label={option.label} />) }
					</Picker>
				</View>
			</View>
		);
	}
}

ModalPicker.propTypes = {
	label: PropTypes.string,
	options: PropTypes.array,
	selectedValue: PropTypes.string,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	style: PropTypes.object
};

ModalPicker.defaultProps = {
	label: null,
	options: [],
	selectedValue: null,
	disabled: false,
	onChange: () => {},
	placeholder: null,
	style: null
};

export default ModalPicker;
