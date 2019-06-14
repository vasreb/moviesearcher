import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchMovie from '../../actions/fetchMovie.js'
import FavoriteButton from '../FavoriteButton/FavoriteButton.jsx'
import Skeleton from 'react-loading-skeleton'
import PropTypes from 'prop-types'
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
} from './style.js'

function FilmPage(props) {
	const { error, fetchData } = props
	const { data, isLoading } = props.movie
	const { id: urlId } = props.match.params
	if (error.isError) {
		throw Error(error.error)
	}
	useEffect(() => fetchData(urlId), [urlId]) //eslint-disable-line
	if (isLoading) {
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
							<Skeleton count={15} width={400} />
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
		status,
		id,
	} = data
	const genresLinks = genres.map(genre => (
		<li key={genre.id}>
			<Genre to="/search">{genre.name}</Genre>
		</li>
	))
	return (
		<FilmWrapper>
			<Primary>
				<Poster
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
							props.movie.data.poster_path
						})`,
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
					<FavoriteButton id={id} />
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

FilmPage.propTypes = {
	movie: PropTypes.shape({
		data: PropTypes.object.isRequired,
		isLoading: PropTypes.bool.isRequired,
		error: PropTypes.shape({
			error: PropTypes.any,
			isError: PropTypes.bool.isRequired,
		}),
	}),
}

const mapStateToProps = state => {
	const { movie, error } = state
	return {
		movie,
		error,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { dispatch } = dispatchProps
	const fetchData = id => {
		dispatch(fetchMovie(id))
	}
	return {
		...stateProps,
		fetchData,
		...ownProps,
		dispatch,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FilmPage)
