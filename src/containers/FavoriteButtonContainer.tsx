import { connect } from 'react-redux'
import AddFav from '../actions/addFav'
import delFav from '../actions/delFav'
import FavoriteButton from '../components/FavoriteButton/FavoriteButton'
import { AppState } from '../reducers/main'
import * as State from '../reducers/State'
import { Dispatch } from 'redux'

interface StateFromProps {
	favoriteIds: State.FavoriteIds;
}

interface DispatchFromProps {
	dispatch: Dispatch;
}

export interface MergeProps {
	AddToFavorite: () => void;
	DelFromFav: () => void;
	isFavorite: boolean;
}

interface OwnProps {
	id: number;
}

const mapStateToProps = (state: AppState) => {
	const { favoriteIds } = state
	return {
		favoriteIds,
	}
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps: StateFromProps, dispatchProps: DispatchFromProps, ownProps: OwnProps): MergeProps => {
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
