import React from 'react'
import FilmCard from '../FilmCard/FilmCard'
import InfiniteScroll from 'react-infinite-scroller'
import { FilmsWrapper, EmptyListPlaceholder } from './style'
import ReactLoading from 'react-loading'
import { FilmListProps } from '../../models/abstract'

export default function FilmList(props: FilmListProps) {
	const { fetchData, films, error } = props
	const { data, isLoading, currentPage, totalPages } = films
	if (error.isError) {
		throw Error(error.error)
	}
	const filmCards = data.map(film => (
		<li key={film.id}>
			<FilmCard film={film} />
		</li>
	))
	const Preloader = Array(10)
		.fill(1)
		.map((a, index) => {
			return (
				<li key={index}>
					<FilmCard />
				</li>
			)
		})
	if (filmCards.length === 0) {
		return <EmptyListPlaceholder>{props.placeholder}</EmptyListPlaceholder>
	}
	return (
		<InfiniteScroll
			pageStart={0}
			loadMore={() => fetchData()}
			hasMore={isLoading ? false : currentPage <= totalPages}
			loader={<ReactLoading key={-1} type="bubbles" color="black" />}
			initialLoad={false}
		>
			<FilmsWrapper>{isLoading ? [...filmCards, ...Preloader] : filmCards}</FilmsWrapper>
		</InfiniteScroll>
	)
}
