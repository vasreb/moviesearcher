import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import fetchMovie from './../actions/fetchMovie.js'
import FavoriteButton from './FavoriteButton'

const FilmWrapper = styled.div`
	margin: 0 auto;
	padding: 20px;
	box-sizing: border-box;
	width: 80%;
	background-color: #f2f4f4;
	@media (max-width: 500px) {
		width: 100%;
		padding: 0px;
	}
`
const Name = styled.h2`
	margin: 0;
	font-family: Geneva, Tahoma, Sedona, sans-serif;
	color: rgba(0, 0, 0, 0.87);
	font-size: 1.22em;
	line-height: 1.03em;
	margin-bottom: 1.03em;
	margin-top: 1.03em;
	word-wrap: break-word;
`
const Poster = styled.div`
	width: 355px;
	height: 533px;
	box-shadow: 0px 0px 20px -5px rgb(0, 0, 0, 0.85);
	background-size: cover;
	flex-shrink: 0;
	@media (max-width: 500px) {
		width: 225px;
		height: 337px;
	}
`

const Overview = styled.p`
	margin: 0;
	font-size: 1em;
	font-family: Geneva, Tahoma, Verdana, sans-serif;
	line-height: 1.18em;
	word-wrap: break-word;
`

const Description = styled.div`
	font-size: 24px;
	padding-left: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	@media (max-width: 500px) {
		font-size: 15px;
		padding-left: 0px;
	}
`

const Genres = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: auto;
	margin-bottom: 20px;
`

const Genre = styled(Link)`
	text-decoration: none;
	color: rgba(0, 0, 0, 0.87);
	border-radius: 10px;
	box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 0.85);
	padding: 5px;
	margin: 0 10px;
	box-sizing: border-box;
`

const Primary = styled.div`
	display: flex;
	flex-direction: row;
	box-shadow: 0px 0px 20px 0px black;
	@media (max-width: 950px) {
		flex-direction: column;
		align-items: center;
	}
	@media (max-width: 950px) {
		padding: 10px;
	}
`

const Secondary = styled(Primary)`
	margin-top: 24px;
	font-size: 20px;
	display: flex;
	flex-direction: row;
`

const Rating = styled.h3`
	margin: 0;
	padding: 0;
	margin-top: auto;
	margin-bottom: 20px;
`
const InfoColumn = styled.div`
	width: 50%;
	font-family: Geneva, Tahoma, Verdana, sans-serif;
	font-size: 1.22em;
	word-wrap: break-word;
	> :nth-child(2n + 1) {
		background-color: #c9d8d8;
	}
`

const InfoRow = styled.div`
	min-height: 1.5em;
	width: 100%;
	padding: 5px;
	box-sizing: border-box;
`

function FilmPage(props) {
	const { data, isLoading, error } = props.movie
	useEffect(() => props.fetchData(props.match.params.id), []) // eslint-disable-line react-hooks/exhaustive-deps
	if (error.isError) {
		return <Redirect to="/404" />
	}
	if (isLoading) {
		return <h2>Loading...</h2>
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
			<Genre to="/genre">{genre.name}</Genre>
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

const mapStateToProps = state => {
	const { movie } = state
	return {
		movie,
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
