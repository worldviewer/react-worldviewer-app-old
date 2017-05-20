import React from 'react';
import ReactDOM from 'react-dom';
import Controversy from './Controversy';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Controversy />, div);
});
