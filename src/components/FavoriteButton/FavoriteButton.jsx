import React from 'react'
import { connect } from 'react-redux'
import AddFav from '../../actions/addFav'
import delFav from '../../actions/delFav'
import { AddToFav, RemoveFromFav } from './style'

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
	const { favoriteIds } = state
	return {
		favoriteIds,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { dispatch } = dispatchProps
	const { favoriteIds } = stateProps
	const { id } = ownProps

	const AddToFavorite = () => {
		dispatch(AddFav(id))
	}

	const DelFromFav = () => {
		dispatch(delFav(id))
	}

	const isFavorite = favoriteIds.data.includes(id)

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
