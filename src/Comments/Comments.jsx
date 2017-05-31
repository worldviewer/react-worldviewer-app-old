import { connect } from 'react-redux';
import CommentsComponent from './CommentsComponent.jsx';

const mapStateToProps = (state, ownProps) => {
	return {
		card: state.card
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {...ownProps}
};

const Comments = connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentsComponent);

export default Comments;
