import React from 'react'
import styled from 'styled-components'
import FilmCard from './FilmCard'
import InfiniteScroll from 'react-infinite-scroller'
import PropTypes from 'prop-types'
import Page404 from './Page404.jsx'

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
const EmptyPlaceholder = styled.h2`
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 30px;
`

export default function FilmList(props) {
	const { fetchData, films } = props
	const { data, isLoading, error, currentPage, totalPages } = films
	const filmCards = data.map(film => (
		<li key={film.id}>
			<FilmCard film={film} />
		</li>
	))
	if (isLoading) {
		const Preloader = Array(10)
			.fill(1)
			.map((a, index) => {
				return <FilmCard key={index} preload />
			})
		return <FilmsWrapper>{filmCards.concat(Preloader)}</FilmsWrapper>
	}
	if (filmCards.length === 0) {
		return <EmptyPlaceholder>{props.placeholder}</EmptyPlaceholder>
	}
	if (error.isError) {
		return <Page404 error={error.error} />
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

FilmList.propTypes = {
	fetchData: PropTypes.func.isRequired,
	films: PropTypes.shape({
		data: PropTypes.array.isRequired,
		isLoading: PropTypes.bool.isRequired,
		error: PropTypes.shape({
			error: PropTypes.any,
			isError: PropTypes.bool.isRequired,
		}),
		currentPage: PropTypes.number.isRequired,
		totalPages: PropTypes.number,
	}),
	placeholder: PropTypes.string,
}
