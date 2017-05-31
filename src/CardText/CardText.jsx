import { connect } from 'react-redux';
import CardTextComponent from './CardTextComponent.jsx';

const mapStateToProps = (state, ownProps) => {
	return {
		card: state.card
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {...ownProps}
};

const CardText = connect(
	mapStateToProps,
	mapDispatchToProps
)(CardTextComponent);

export default CardText;
