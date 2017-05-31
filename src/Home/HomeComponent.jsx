import React, { Component } from 'react';
import './Home.scss';

// Permits HTML markup encoding in feed text
import { Parser as HtmlToReactParser } from 'html-to-react';

class HomeComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};

		this.props = props;
	}

	render() {
		return (
			<div>
				<h3><code>{location.pathname}</code></h3>
			</div>
		);
	}

}

export default HomeComponent;
