import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchBestFilms from '../actions/fetchBestFilms'
import newBestRequest from '../actions/newBestRequest'
import FilmList from '../components/FilmList/FilmList'
import { AppState } from '../reducers/main'
import * as State from '../reducers/State'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { FilmListProps, FilmList as IFilmList } from '../models/abstract'

interface StateFromProps {
	filmsBest: IFilmList;
	error: State.Error;
}

interface DispatchFromProps {
	dispatch: ThunkDispatch<AppState, null, Action<string>>;
}

interface MergeProps extends FilmListProps {
	fetchData: () => void;
	resetBestPage: () => void;
	error: State.Error;
}

const mapStateToProps = (state: AppState): StateFromProps => {
	const { filmsBest, error } = state
	return {
		filmsBest,
		error,
	}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, null, Action<string>>): DispatchFromProps => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps: StateFromProps, dispatchProps: DispatchFromProps): MergeProps => {
	const { filmsBest, error } = stateProps
	const { dispatch } = dispatchProps
	const fetchData = () => {
		dispatch(fetchBestFilms(filmsBest.currentPage))
	}
	const resetBestPage = () => {
		dispatch(newBestRequest())
	}
	return {
		fetchData,
		films: filmsBest,
		resetBestPage,
		error,
	}
}

function FetchDataWrapper(props: MergeProps) {
	useEffect(() => {
		props.fetchData()
		return () => props.resetBestPage()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps
	return <FilmList {...props} />
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FetchDataWrapper)
