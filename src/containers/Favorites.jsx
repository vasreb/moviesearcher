import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchFavoriteCard from '../actions/fetchFavoriteCard.js'
import clearFavorites from '../actions/clearFavorites.js'
import FilmList from '../components/FilmList.jsx'

const mapStateToProps = state => {
	const { favoriteIds, filmsFavorite } = state
	return {
		favoriteIds,
		filmsFavorite,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { filmsFavorite, favoriteIds } = stateProps
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
		...ownProps,
		fetchData,
		films: filmsFavorite,
		clearFavs,
	}
}

function FetchDataWrapper(props) {
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