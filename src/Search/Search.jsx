import { connect } from 'react-redux';
import SearchComponent from './SearchComponent.jsx';

const mapStateToProps = (state, ownProps) => {
	return {
		card: state.card
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {...ownProps}
};

const Search = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchComponent);

export default Search;
