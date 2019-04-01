import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, Modal, TouchableHighlight, Picker, Animated, Keyboard } from 'react-native';
import Images from '@assets/images';

import styles from './styles';

class ModalPicker extends Component {
	constructor(props) {
		super(props);

		const { selectedValue } = this.props;

		this.state = {
			selectedValue,
			modalVisible: false,
			animatedHeight: new Animated.Value(0),
			allowPointerEvents: true
		};

		this.onDisplayPicker = this.onDisplayPicker.bind(this);
		this.onPressCancel = this.onPressCancel.bind(this);
		this.onPressConfirm = this.onPressConfirm.bind(this);
		this.setModalVisible = this.setModalVisible.bind(this);
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

	onDisplayPicker() {
		Keyboard.dismiss();
		this.setModalVisible(true);
	}

	onPressCancel() {
		this.setModalVisible(false)
	}

	onPressConfirm() {
		const { onChange } = this.props;
		const { selectedValue } = this.state;

		if (typeof onChange === 'function') {
			onChange(selectedValue);
		}

		this.setModalVisible(false);
	}

	onChange(itemValue) {
		this.setState({ allowPointerEvents: false, selectedValue: itemValue })
		const timeoutId = setTimeout(() => {
			this.setState({ allowPointerEvents: true });
			clearTimeout(timeoutId);
		}, 200);
	}

	getTitleElement() {
		const { selectedValue, placeholder } = this.props;

		if (!selectedValue && placeholder) {
			return (<Text style={[styles.valueText, styles.placeholderText]}>{ placeholder }</Text>);
		}
		return (<Text style={styles.valueText}>{this.getLabel(selectedValue)}</Text>);
	}

	setModalVisible(visible) {
		const { animatedHeight } = this.state;

		if (visible) {
			this.setState({ modalVisible: visible });
			return Animated.timing(animatedHeight, {
				toValue: 259, // component height: 216(Picker) + 1(borderTop) + 42(marginTop), IOS only
				duration: 300
			}).start();
		}

		return Animated.timing(animatedHeight, {
			toValue: 0,
			duration: 300
		}).start(() => {
			this.setState({ modalVisible: visible });
		});
	}

	getLabel(val) {
		const { options } = this.props;
		const selectecObject = options.find(el => el.value === val);

		return selectecObject ? selectecObject.label : '';
	}

	render() {
		const {
			label,
			options,
			disabled,
			style,
			optionsStyle
		} = this.props;

		const {
			modalVisible,
			animatedHeight,
			allowPointerEvents,
			selectedValue
		} = this.state;

		return (
			<TouchableHighlight style={[styles.wrapper, style]} underlayColor="transparent" onPress={!disabled && this.onDisplayPicker}>
				<View>
					{!!label && <Text style={styles.label}>{label}</Text>}
					<View style={[styles.textBoxWrapper, disabled && styles.disabled]}>
						{this.getTitleElement()}
						<Image source={Images.caretDown} resizeMode="contain" style={styles.icon} />
					</View>
					<Modal transparent animationType="none" visible={modalVisible} onRequestClose={() => this.setModalVisible(false)}>
						<View style={{ flex: 1 }}>
							<TouchableHighlight style={styles.pickerMask} activeOpacity={1} underlayColor="#00000077" onPress={this.onPressCancel}>
								<TouchableHighlight underlayColor="#fff" style={{ flex: 1 }}>
									<Animated.View style={[styles.pickerContainer, optionsStyle, { height: animatedHeight }]}>
										<View pointerEvents={allowPointerEvents ? 'auto' : 'none'}>
											<Picker selectedValue={selectedValue} onValueChange={this.onChange} style={styles.picker}>
												{options.map(option => <Picker.Item key={option.value} value={option.value} label={option.label} />)}
											</Picker>
										</View>
										<TouchableHighlight underlayColor="transparent" onPress={this.onPressCancel} style={[styles.btnText, styles.btnCancel]}>
											<Text style={styles.btnTextCancel}>Cancel</Text>
										</TouchableHighlight>
										<TouchableHighlight underlayColor="transparent" onPress={this.onPressConfirm} style={[styles.btnText, styles.btnConfirm]}>
											<Text style={styles.btnTextConfirm}>Confirm</Text>
										</TouchableHighlight>
									</Animated.View>
								</TouchableHighlight>
							</TouchableHighlight>
						</View>
					</Modal>
				</View>
			</TouchableHighlight>
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
	style: PropTypes.object,
	optionsStyle: PropTypes.object
};

ModalPicker.defaultProps = {
	label: null,
	options: [],
	selectedValue: null,
	disabled: false,
	onChange: () => {},
	placeholder: null,
	style: null,
	optionsStyle: null
};

export default ModalPicker;
