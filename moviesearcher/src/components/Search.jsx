import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import FilmCard from './FilmCard'
import fetchSearchFilms from '../actions/fetchSearchFilms.js'
import InfiniteScroll from 'react-infinite-scroller'

const FilmsWrapper = styled.ul`
	list-style: none;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(355px, 1fr));
	grid-gap: 20px;
	align-items: center;
	padding: 25px 0;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`
function Search(props) {
	const { searchFilms, fetchSearchData } = props
	const { data, isLoading, error, currentPage, totalPages } = searchFilms
	const filmCards = data.map(film => (
		<li key={film.id}>
			<FilmCard film={film} />
		</li>
	))
	if (error.isError) {
		return <div>Error: {error.error}</div>
	}
	return (
		<InfiniteScroll
			pageStart={0}
			loadMore={() => fetchSearchData()}
			hasMore={isLoading ? false : currentPage <= totalPages ? true : false}
			loader={<div key={-1}>wait...</div>}
			initialLoad={false}
		>
			<FilmsWrapper>{filmCards}</FilmsWrapper>
		</InfiniteScroll>
	)
}

const mapStateToProps = state => {
	const { searchFilms } = state
	return {
		searchFilms,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { dispatch } = dispatchProps
	const { query, currentPage } = stateProps.searchFilms
	const fetchSearchData = () => {
		dispatch(fetchSearchFilms(currentPage, query))
	}
	return {
		...ownProps,
		...stateProps,
		fetchSearchData,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(Search)
