import React, { Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, View, Modal } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import DismissKeyboardView from '../../components/DismissKeyboardView';
import Button from '../../components/Button';

import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';

import styles from './styles';

export default class CommentInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: undefined,
			rating: this.props,
		};
		this.ratingCompleted = this.ratingCompleted.bind(this);
	}

	ratingCompleted(rating) {
		this.setState({ rating });
	}

	onChangeText = text => {
		this.setState({
			text,
		});
	};
	onSubmitEditing = ({ nativeEvent: { text } }) => {
		this.setState({ text }, this.submit);
	};

	submit = () => {
		const { text, rating } = this.state;
		const { book, componentId } = this.props;
		if (text && rating) {
			this.setState(
				{
					text: undefined,
				},
				() => {
					this.props.onSubmit(text, rating, book);
				},
			);
		} else {
			alert('Please submit a review');
		}
	};

	render() {
		const { visible, setModalVisible, FinishRating } = this.props;
		const { rating } = this.state;

		return (
			<Modal
				animationType="slide"
				transparent
				visible={visible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
				}}
			>
				<View style={styles.modalContainer}>
					{/* <KeyboardAvoidingView behavior="position">
						<DismissKeyboardView style={styles.header}> */}
					<View style={styles.headerButtons}>
						<TouchableOpacity
							onPress={() => setModalVisible(false)}
							style={styles.headerButtonBack}
						>
							<Icon name="times-circle" size={40} style={styles.headerButtonBackIcon} />
						</TouchableOpacity>
					</View>
					{/* </DismissKeyboardView> */}
					<View style={styles.ratingInputContainer}>
						{/* <Rating
							showRating
							fractions={1}
							startingValue={rating}
							onFinishRating={() => this.ratingCompleted(rating)}
							style={{ paddingVertical: 10 }}
						/> */}
						<AirbnbRating
							count={5}
							reviews={['Bad', 'Poor', 'Good', 'Very Good', 'Amazing']}
							defaultRating={2}
							size={40}
							fractions={1}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder="What you think about this book.."
							keyboardType="twitter"
							multiline={true}
							numberOfLines={4}
							autoFocus={true}
							style={styles.input}
							value={this.state.text}
							onChangeText={this.onChangeText}
							onSubmitEditing={this.onSubmitEditing}
						/>
					</View>
					<View style={styles.buttons}>
						<Button onPress={() => {}}>Submit</Button>
					</View>
					{/* </KeyboardAvoidingView> */}
				</View>
			</Modal>
		);
	}
}

CommentInput.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	setModalVisible: PropTypes.func.isRequired,
	book: PropTypes.string.isRequired,
	visible: PropTypes.bool.isRequired,
};
