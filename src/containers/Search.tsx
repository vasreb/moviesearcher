import { connect } from 'react-redux'
import fetchSearchFilms from '../actions/fetchSearchFilms'
import FilmList from '../components/FilmList/FilmList'
import { AppState } from '../reducers/main'
import * as State from '../reducers/State'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { FilmListProps } from '../models/abstract'

interface StateFromProps {
	filmsSearch: State.SearchFilms;
	error: State.Error;
	currentPage: number;
}

interface DispatchFromProps {
	dispatch: ThunkDispatch<AppState, null, Action<string>>;
}

interface MergeProps extends FilmListProps {
	fetchData: () => void;
	films: State.FavoriteFilms;
	placeholder: string;
	error: State.Error;
}

const mapStateToProps = (state: AppState): StateFromProps => {
	const { filmsSearch, error } = state
	const { currentPage } = filmsSearch
	return {
		filmsSearch,
		error,
		currentPage,
	}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, null, Action<string>>): DispatchFromProps => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps: StateFromProps, dispatchProps: DispatchFromProps): MergeProps => {
	const { dispatch } = dispatchProps
	const { filmsSearch, error, currentPage } = stateProps
	const fetchData = () => {
		dispatch(fetchSearchFilms(currentPage))
	}
	const placeholder = "Let's search something!"
	return {
		fetchData,
		films: filmsSearch,
		placeholder,
		error,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FilmList)
