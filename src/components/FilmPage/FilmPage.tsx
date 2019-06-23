import React from 'react'
import { useEffect } from 'react'
import FavoriteButtonContainer from '../../containers/FavoriteButtonContainer'
import Skeleton from 'react-loading-skeleton'
import { MergeProps as Props } from '../../containers/FilmPageContainer'

import {
	FilmWrapper,
	Name,
	Poster,
	Overview,
	Description,
	Genres,
	Genre,
	Primary,
	Secondary,
	Rating,
	InfoColumn,
	InfoRow,
} from './style'

export default function FilmPage(props: Props) {
	const { error, fetchData } = props
	const { isLoading, data } = props.movie
	const { id: urlId } = props.match.params
	if (error.isError) {
		throw Error(error.error)
	}
	if (!urlId) {
		throw Error('Film ID is undefined')
	}
	useEffect(() => {
		fetchData(+urlId)
		window.scrollTo(0, 0)
	}, [urlId]) //eslint-disable-line
	if (isLoading || data === null) {
		return (
			<FilmWrapper>
				<Primary>
					<Poster>
						<Skeleton height={533} />
					</Poster>
					<Description>
						<Name>
							<Skeleton height={30} width={200} />
						</Name>
						<Overview>
							<Skeleton count={15} width={300} />
						</Overview>
					</Description>
				</Primary>
			</FilmWrapper>
		)
	}
	const {
		title,
		overview,
		genres,
		vote_average,
		vote_count,
		release_date,
		tagline,
		revenue,
		budget,
		poster_path,
		status,
		id,
	} = data
	const genresLinks = genres.map(genre => (
		<li key={genre.id}>
			<Genre>{genre.name}</Genre>
		</li>
	))
	return (
		<FilmWrapper>
			<Primary>
				<Poster
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
					}}
				/>
				<Description>
					<Name>{title}</Name>
					<Overview>{overview}</Overview>
					<Rating>
						Rating: {vote_average}
						<br />
						Vote count: {vote_count}
					</Rating>
					<FavoriteButtonContainer id={id} />
					<Genres>
						Genres:
						{genresLinks}
					</Genres>
				</Description>
			</Primary>
			<Secondary>
				<InfoColumn>
					<InfoRow>Release date: {release_date || '-'}</InfoRow>
					<InfoRow>Status: {status || '-'}</InfoRow>
					<InfoRow>Tagline: {tagline || '-'}</InfoRow>
				</InfoColumn>
				<InfoColumn>
					<InfoRow>Budget: ${budget || '-'}</InfoRow>
					<InfoRow>Revenue: ${revenue || '-'}</InfoRow>
				</InfoColumn>
			</Secondary>
		</FilmWrapper>
	)
}
