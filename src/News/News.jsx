import { connect } from 'react-redux';
import NewsComponent from './NewsComponent.jsx';

const mapStateToProps = (state, ownProps) => {
	return {
		card: state.card
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {...ownProps}
};

const News = connect(
	mapStateToProps,
	mapDispatchToProps
)(NewsComponent);

export default News;
