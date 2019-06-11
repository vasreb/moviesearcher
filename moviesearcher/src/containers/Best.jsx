import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchTopFilms from '../actions/fetchTopFilms.js'
import FilmList from '../components/FilmList.jsx'

const mapStateToProps = state => {
	const { films } = state
	return {
		films,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { films } = stateProps
	const fetchData = () => {
		dispatchProps.dispatch(fetchTopFilms(films.currentPage))
	}
	return {
		...ownProps,
		fetchData,
		films,
	}
}

function FetchDataWrapper(props) {
	useEffect(() => props.fetchData(), []) // eslint-disable-line react-hooks/exhaustive-deps
	return <FilmList {...props} />
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FetchDataWrapper)
