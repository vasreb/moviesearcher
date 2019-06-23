import React from 'react'
import { AddToFav, RemoveFromFav } from './style'
import { MergeProps as Props } from '../../containers/FavoriteButtonContainer'

export default function FavoriteButton(props: Props) {
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
