import { connect } from 'react-redux';
import HomeComponent from './HomeComponent.jsx';

const mapStateToProps = (state, ownProps) => {
	return {
		card: state.card
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {...ownProps}
};

const Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeComponent);

export default Home;
