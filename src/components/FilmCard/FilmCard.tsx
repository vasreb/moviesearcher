import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { FilmCardWrapper, Name, Description, StyledLink } from './style'
import FilmCard from '../../models/FilmCard'

interface FilmCardProps {
	film?: FilmCard;
}

export default function Film(props: FilmCardProps) {
	const { film } = props
	if (film === undefined) {
		return (
			<StyledLink to={'/'}>
				<FilmCardWrapper>
					<Skeleton height={533} />
				</FilmCardWrapper>
			</StyledLink>
		)
	}
	const { id, overview, title, posterUrl } = film
	return (
		<StyledLink to={`/film/${id}`}>
			<FilmCardWrapper
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/w500${posterUrl})`,
				}}
			>
				<Name>{title}</Name>
				<Description>{overview}</Description>
			</FilmCardWrapper>
		</StyledLink>
	)
}
