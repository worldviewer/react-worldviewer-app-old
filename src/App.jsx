import { connect } from 'react-redux';
import { fetchCard, fetchCardRequest, fetchCardSuccess, fetchCardError,
	setLoaded, setDiscourseLevel, activateSwipeOverlay,
	deactivateSwipeOverlay, setSwipeOverlaySize } from './redux';
import AppStateless from './AppStateless.jsx';

const mapStateToProps = (state, ownProps) => {
	return {
		card: state.card,
		base: state.base,
		discourse: state.discourse
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchCard: (id, url) => {
			return dispatch(fetchCard(id, url));
		},
		fetchCardRequest: (id) => {
			return dispatch(fetchCardRequest(id));
		},
		fetchCardSuccess: (json) => {
			return dispatch(fetchCardSuccess(json));
		},
		fetchCardError: (error) => {
			return dispatch(fetchCardError(error));
		},
		setLoaded: () => {
			return dispatch(setLoaded());
		},
		setDiscourseLevel: (level, direction) => {
			return dispatch(setDiscourseLevel(level, direction));
		},
		activateSwipeOverlay: (timeoutId) => {
			return dispatch(activateSwipeOverlay(timeoutId));
		},
		deactivateSwipeOverlay: () => {
			return dispatch(deactivateSwipeOverlay());
		},
		setSwipeOverlaySize: (isFullScreen) => {
			return dispatch(setSwipeOverlaySize(isFullScreen));
		}
	};
};

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppStateless);

export default App;