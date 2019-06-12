import React from 'react'
import { connect } from 'react-redux'
import addGenre from './../actions/addGenre'
import delGenre from './../actions/delGenre'
import changeSort from './../actions/changeSort'
import changeSortDirection from './../actions/changeSortDirection'
import { useRef } from 'react'
import fetchSearchFilms from '../actions/fetchSearchFilms'
import changeSearchQuery from './../actions/changeSearchQuery'
import newSearchRequest from './../actions/newSearchRequest'
import { withRouter } from 'react-router-dom'
import SearchHeader from './../components/SearchHeader'

const mapStateToProps = state => {
	const { genres, isAsc, query, sort } = state.filters
	const { isLoading } = state.filmsSearch
	return { genres, isAsc, query, isLoading, sort }
}
const mapDispatchToProps = dispatch => {
	return { dispatch }
}
const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { genres, isAsc, isLoading, query, sort } = stateProps
	const { dispatch } = dispatchProps
	const doesContainGenre = id => {
		return genres.includes(id)
	}
	const doesThisSort = value => {
		return sort.includes(value)
	}
	const startSearch = async () => {
		if (window.location.pathname !== '/search') {
			ownProps.history.push('/search')
		}
		await dispatch(newSearchRequest())
		await dispatch(fetchSearchFilms())
	}
	const toggleGenre = async id => {
		if (genres.includes(id)) {
			dispatch(delGenre(id))
		} else {
			dispatch(addGenre(id))
		}
		await startSearch()
	}
	const handleChangeSort = async e => {
		await dispatch(changeSort(e.target.value))
		await startSearch()
	}
	const handleSortDirection = async () => {
		await dispatch(changeSortDirection())
		await startSearch()
	}
	const handleSearch = async (e, timer) => {
		clearTimeout(timer.current)
		e.persist()
		const LoadData = async () => {
			if (isLoading) {
				timer.current = setTimeout(LoadData, 1000)
			}
			if (e.target.value.length > 0) {
				await startSearch()
			}
		}
		await dispatch(changeSearchQuery(e.target.value))
		timer.current = setTimeout(LoadData, 1000)
	}
	return {
		doesContainGenre,
		doesThisSort,
		isAsc,
		query,

		toggleGenre,
		handleSearch,
		handleSortDirection,
		handleChangeSort,
	}
}

function HeaderSearchContainer(props) {
	let timer = useRef()
	const handleSearchWrap = e => {
		props.handleSearch(e, timer)
	}
	return <SearchHeader {...props} handleSearch={handleSearchWrap} />
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
		mergeProps
	)(HeaderSearchContainer)
)
