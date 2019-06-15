import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchBestFilms from '../actions/fetchBestFilms'
import newBestRequest from '../actions/newBestRequest'
import FilmList from '../components/FilmList/FilmList'

const mapStateToProps = state => {
	const { filmsBest, error } = state
	return {
		filmsBest,
		error,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { filmsBest, error } = stateProps
	const { dispatch } = dispatchProps
	const fetchData = () => {
		dispatch(fetchBestFilms(filmsBest.currentPage))
	}
	const resetBestPage = () => {
		dispatch(newBestRequest())
	}
	return {
		...ownProps,
		fetchData,
		films: filmsBest,
		resetBestPage,
		error,
	}
}

function FetchDataWrapper(props) {
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
