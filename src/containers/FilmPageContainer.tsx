import { connect } from 'react-redux'
import FilmPage from '../components/FilmPage/FilmPage'
import fetchMovie from '../actions/fetchMovie'
import { AppState } from '../reducers/main'
import * as State from '../reducers/State'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { RouteComponentProps, match } from 'react-router-dom'

interface StateFromProps {
	movie: State.Movie;
	error: State.Error;
}

interface DispatchFromProps {
	dispatch: ThunkDispatch<AppState, null, Action<string>>;
}

interface RouterParams {
	id?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps extends RouteComponentProps {}

export interface MergeProps {
	movie: State.Movie;
	error: State.Error;
	fetchData: (id: number) => void;
	match: match<RouterParams>;
}

const mapStateToProps = (state: AppState): StateFromProps => {
	const { movie, error } = state
	return {
		movie,
		error,
	}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, null, Action<string>>): DispatchFromProps => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps: StateFromProps, dispatchProps: DispatchFromProps, ownProps: OwnProps): MergeProps => {
	const { dispatch } = dispatchProps
	const { movie, error } = stateProps
	const { match } = ownProps
	const fetchData = (id: number) => {
		dispatch(fetchMovie(id))
	}
	return {
		movie,
		error,
		fetchData,
		match,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FilmPage)
