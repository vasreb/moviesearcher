import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AddFav from './../actions/addFav'
import delFav from './../actions/delFav'

const AddToFav = styled.div`
	box-shadow: 0px 0px 4px 0px black;
	padding: 10px;
	box-sizing: border-box;
	max-width: 200px;
	transition: transform 0.1s ease-in;
	&:hover {
		transform: scale(1.05);
	}
	text-align: center;
`
const RemoveFromFav = styled(AddToFav)``

function FavoriteButton(props) {
	const { AddToFavorite, DelFromFav, isFavorite } = props
	return (
		<>
			{isFavorite ? (
				<RemoveFromFav onClick={DelFromFav}>Remove favorite</RemoveFromFav>
			) : (
				<AddToFav onClick={AddToFavorite}>Add to favorite</AddToFav>
			)}
		</>
	)
}

const mapStateToProps = state => {
	const { favorites } = state
	return {
		favorites,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { dispatch } = dispatchProps
	const { favorites } = stateProps
	const { id } = ownProps

	const AddToFavorite = () => {
		dispatch(AddFav(id))
	}

	const DelFromFav = () => {
		dispatch(delFav(id))
	}

	const isFavorite = favorites.data.includes(id)

	return {
		AddToFavorite,
		DelFromFav,
		isFavorite,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FavoriteButton)
