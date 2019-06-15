import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import { FilmCard, Name, Description, StyledLink } from './style'

export default function Film(props) {
	const { preload } = props
	if (preload) {
		return (
			<StyledLink to={'/'}>
				<FilmCard>
					<Skeleton height={533} />
				</FilmCard>
			</StyledLink>
		)
	}
	const { id, overview, title, posterUrl } = props.film
	return (
		<StyledLink to={`/film/${id}`}>
			<FilmCard
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/w500${posterUrl})`,
				}}
			>
				<Name>{title}</Name>
				<Description>{overview}</Description>
			</FilmCard>
		</StyledLink>
	)
}

Film.propTypes = {
	film: PropTypes.shape({
		posterUrl: PropTypes.string,
		title: PropTypes.string.isRequired,
		overview: PropTypes.string.isRequired,
		id: PropTypes.number,
	}),
	preload: PropTypes.bool,
}
