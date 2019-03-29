import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../../src/components/Button';
import styles from '../../src/components/Button/styles';

it('exports a styles object', () => {
	expect(typeof styles).toBe('object');
});

it('fails to render without children', () => {
	expect.assertions(1);
	try {
		renderer.create(<Button />).toJSON();
	} catch (error) {
		expect(error.message).toMatch(/(Failed prop type)/);
	}
});

it('renders children props', () => {
	const rendered = renderer.create(<Button>Test</Button>).toJSON();
	expect(rendered).toMatchSnapshot();
});

it('uses the specified styles if provided', () => {
	const rendered = renderer.create(
		<Button style={{ backgroundColor: 'red' }}>Test</Button>
	).toJSON();
	expect(rendered).toMatchSnapshot();
});
