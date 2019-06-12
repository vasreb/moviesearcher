import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchBestFilms from '../actions/fetchBestFilms.js'
import newBestRequest from '../actions/newBestRequest.js'
import FilmList from '../components/FilmList.jsx'

const mapStateToProps = state => {
	const { filmsBest } = state
	return {
		filmsBest,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { filmsBest } = stateProps
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
