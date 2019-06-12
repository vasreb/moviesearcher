import React from 'react'
import { useRef } from 'react'
import { connect } from 'react-redux'
import fetchSearchFilms from '../actions/fetchSearchFilms'
import changeSearchQuery from './../actions/changeSearchQuery'
import newSearchRequest from './../actions/newSearchRequest'
import { withRouter } from 'react-router-dom'
import Header from './../components/Header'

const mapStateToProps = state => {
	const { filmsSearch } = state
	return {
		filmsSearch,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { filmsSearch } = stateProps
	const { isLoading, query } = filmsSearch
	const { dispatch } = dispatchProps
	const handleSearch = async (e, timer) => {
		clearTimeout(timer.current)
		e.persist()
		if (window.location.pathname !== '/search') {
			ownProps.history.push('/search')
		}
		const LoadData = async () => {
			if (isLoading) {
				timer.current = setTimeout(LoadData, 1000)
			}
			if (e.target.value.length > 0) {
				await dispatch(newSearchRequest())
				await dispatch(fetchSearchFilms())
			}
		}
		await dispatch(changeSearchQuery(e.target.value))
		timer.current = setTimeout(LoadData, 1000)
	}
	return {
		query,
		handleSearch,
	}
}

function HeaderContainer(props) {
	let timer = useRef()
	const handleSearchWrap = e => {
		props.handleSearch(e, timer)
	}
	return <Header {...props} handleSearch={handleSearchWrap} />
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
		mergeProps
	)(HeaderContainer)
)
