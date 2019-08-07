import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchFavoriteCard from '../actions/fetchFavoriteCard'
import clearFavorites from '../actions/clearFavorites'
import FilmList from '../components/FilmList/FilmList'
import { AppState } from '../reducers/main'
import * as State from '../reducers/State'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { FilmListProps, FilmList as IFilmList } from '../models/abstract'

interface StateFromProps {
	favoriteIds: State.FavoriteIds;
	filmsFavorite: IFilmList;
	error: State.Error;
}

interface DispatchFromProps {
	dispatch: ThunkDispatch<AppState, null, Action<string>>;
}

interface MergeProps extends FilmListProps {
	fetchData: () => void;
	clearFavs: () => void;
	error: State.Error;
}

const mapStateToProps = (state: AppState): StateFromProps => {
	const { favoriteIds, filmsFavorite, error } = state
	return {
		favoriteIds,
		filmsFavorite,
		error,
	}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, null, Action<string>>): DispatchFromProps => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps: StateFromProps, dispatchProps: DispatchFromProps): MergeProps => {
	const { filmsFavorite, favoriteIds, error } = stateProps
	const { dispatch } = dispatchProps
	const fetchData = () => {
		favoriteIds.data
			.concat()
			.reverse()
			.forEach(id => {
				dispatch(fetchFavoriteCard(id))
			})
	}
	const clearFavs = () => dispatch(clearFavorites())
	return {
		fetchData,
		films: filmsFavorite,
		clearFavs,
		error,
	}
}

function FetchDataWrapper(props: MergeProps) {
	useEffect(() => {
		props.fetchData()
		return () => props.clearFavs()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps
	return <FilmList {...props} />
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FetchDataWrapper)
