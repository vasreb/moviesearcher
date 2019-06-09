import React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import fetchSearchFilms from '../actions/fetchSearchFilms'
import changeSearchQuery from './../actions/changeSearchQuery'
import newSearchRequest from './../actions/newSearchRequest'

import { withRouter } from 'react-router-dom'

const HeaderWrapper = styled.header`
	position: sticky;
	top: 0;
	background-color: #4a76a8;
	height: 50px;
	border-bottom: 2px solid #446e99;
	box-shadow: 0px 0px 10px 0px black;
	z-index: 9999;
`

const Logo = styled.p`
	color: #edeef0;
	margin: auto 0;
	text-shadow: 0px 0px 10px #edeef0;
	background-size: contain;
	font-size: 30px;
	align-self: center;
	font-family: Lucida Sans Unicode, Lucida Grande, sans-serif;
	@media (max-width: 800px) {
		font-size: 20px;
	}
	@media (max-width: 500px) {
		display: none;
	}
`

const HeaderList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin: 0;
	padding: 0 5px;
	@media (max-width: 800px) {
		justify-content: space-between;
	}
`

const HeaderItem = styled.li`
	color: #fff;
	height: 50px;
	text-align: center;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-bottom: 5px solid #161732;
`
const StyledLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: bold;
	font-size: 20px;
	display: flex;
`

const HeaderItemSearch = styled(HeaderItem)`
	border-bottom: none;
	margin-right: 200px;
	@media (max-width: 1200px) {
		margin-right: 0;
	}
`

const Search = styled.input`
	width: 300px;
	height: 50%;
	background-color: #4871a0;
	color: Snow;
	border-radius: 20px;
	border: 2px solid #334860;
	@media (max-width: 800px) {
		flex-shrink: 1;
		width: auto;
	}
`

function Header(props) {
	let timer = useRef()
	const { dispatch, isLoading } = props
	const handleSearch = async e => {
		clearTimeout(timer.current)
		e.persist()
		if (window.location.pathname !== '/search') {
			props.history.push('/search')
		}
		const LoadData = async () => {
			if (isLoading) {
				timer.current = setTimeout(LoadData, 1000)
			}
			if (e.target.value.length > 0) {
				await dispatch(newSearchRequest())
				await dispatch(fetchSearchFilms())
			}
		}
		await dispatch(changeSearchQuery(e.target.value))
		timer.current = setTimeout(LoadData, 1000)
	}
	return (
		<HeaderWrapper>
			<HeaderList>
				<StyledLink to="/best">
					<Logo>MovieSearcher</Logo>
				</StyledLink>
				<HeaderItemSearch>
					<Search onChange={handleSearch} />
				</HeaderItemSearch>
				<HeaderItem>
					<StyledLink to="/best">Best</StyledLink>
				</HeaderItem>
				<HeaderItem>
					<StyledLink to="/favorites">Favorites</StyledLink>
				</HeaderItem>
			</HeaderList>
		</HeaderWrapper>
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
	const { searchFilms } = stateProps
	const { isLoading } = searchFilms
	return {
		...stateProps,
		...dispatchProps,
		...ownProps,
		isLoading,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(withRouter(Header))
