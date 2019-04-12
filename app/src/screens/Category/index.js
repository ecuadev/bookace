import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { View } from 'react-native';
import { connect } from 'react-redux';

import SlideContainer from '../../components/SlideContainer';
import BookGrid from '../../components/BookGrid';
import NoConnection from '../../components/NoConnection';

import { goToBook } from '../../config/navigation';
import styles from './styles';

class Category extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: [],
			noNetwork: false
		};
	}

	componentDidMount() {
		this.navigationEventListener = Navigation.events().bindComponent(this);
	}

	componentDidUpdate(prevProps, prevState) {
		const { isConnected } = this.props;

		if (!prevProps.isConnected && isConnected) {
			this.setState({ noNetwork: false });
			this.handleBookListLoad();
		}
	}

	componentDidAppear() {
		this.handleBookListLoad();
	}

	async handleBookListLoad() {
		const { client, category, isConnected } = this.props;
		const { books } = this.state;

		if (!books.length) {
			if (isConnected) {
				const result = await client.callFunction('findBooksBySubject', [category.name]);
				console.log('---------')
				console.log(result)
				console.log('---------')
				this.setState({ books: result });
			} else {
				this.setState({ noNetwork: true });
			}
		}
	}

	render() {
		const { componentId, category } = this.props;
		const { books, noNetwork } = this.state;

		return (
			<SlideContainer
				title={`${category.name} Books`}
				onLeftButtonPress={() => Navigation.pop(componentId)}
				style={styles.container}>
				<View>
					{noNetwork && (
						<NoConnection />
					)}
					{!noNetwork && (
						<BookGrid books={books} onBookPress={book => goToBook(book, componentId)} />
					)}
				</View>
			</SlideContainer>
		);
	}
}

export default connect(
	state => ({
		client: state.global.client,
		isConnected: state.network.connected
	}),
	{ }
)(Category);
