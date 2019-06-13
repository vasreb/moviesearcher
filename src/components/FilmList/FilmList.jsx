import React from 'react'
import FilmCard from '../FilmCard/FilmCard'
import InfiniteScroll from 'react-infinite-scroller'
import PropTypes from 'prop-types'
import ErrorPage from '../ErrorPage/ErrorPage.jsx'
import { FilmsWrapper, EmptyListPlaceholder } from './style.js'
import ReactLoading from 'react-loading'

export default function FilmList(props) {
	const { fetchData, films, error } = props
	const { data, isLoading, currentPage, totalPages } = films
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
	if (error.isError) {
		return <ErrorPage error={error.error} />
	}
	if (filmCards.length === 0) {
		return <EmptyListPlaceholder>{props.placeholder}</EmptyListPlaceholder>
	}
	return (
		<InfiniteScroll
			pageStart={0}
			loadMore={() => fetchData()}
			hasMore={isLoading ? false : currentPage <= totalPages ? true : false}
			loader={<ReactLoading key={-1} type="bubbles" color="black" />}
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
