import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import FilmCard from './FilmCard'
import fetchTopFilms from '../actions/fetchTopFilms.js'
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

function FilmList(props) {
	const { fetchData, films } = props
	const { data, isLoading, error, currentPage, totalPages } = films
	useEffect(() => fetchData(), []) // eslint-disable-line react-hooks/exhaustive-deps
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
			loadMore={() => fetchData()}
			hasMore={isLoading ? false : currentPage <= totalPages ? true : false}
			loader={<div key={-1}>wait...</div>}
			initialLoad={false}
		>
			<FilmsWrapper>{filmCards}</FilmsWrapper>
		</InfiniteScroll>
	)
}

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

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FilmList)