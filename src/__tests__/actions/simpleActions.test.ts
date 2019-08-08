import { ActionTypeKeys } from '../../actions/ActionTypeKeys'
//addFav
import addFav from '../../actions/addFav'
import { AddFavoriteAction } from '../../actions/IAction'
//addGenre
import addGenre from '../../actions/addGenre'
import { AddGenreAction } from '../../actions/IAction'
//changeSearchQuery
import changeSearchQuery from '../../actions/changeSearchQuery'
import { ChangeSearchQueryAction } from '../../actions/IAction'
//changeSort
import changeSort from '../../actions/changeSort'
import { ChangeSortAction } from '../../actions/IAction'
import { SearchSort } from '../../constants/FilterConstants'
//changeSortDirection
import changeSortDirection from '../../actions/changeSortDirection'
import { ChangeSortDirectionAction } from '../../actions/IAction'
//clearFavorites
import clearFavorites from '../../actions/clearFavorites'
import { ClearFavoritesAction } from '../../actions/IAction'
//delFav
import delFav from '../../actions/delFav'
import { DelFavoriteAction } from '../../actions/IAction'
//delGenre
import delGenre from '../../actions/delGenre'
import { DelGenreAction } from '../../actions/IAction'
//newBestRequest
import newBestRequest from '../../actions/newBestRequest'
import { NewBestRequestAction } from '../../actions/IAction'
//newSearchRequest
import newSearchRequest from '../../actions/newSearchRequest'
import { NewSearchRequestAction } from '../../actions/IAction'

describe('Simple Action Creators', () => {
	let random
	beforeEach(() => {
		random = Math.floor(Math.random() * (1000 - -1000)) + 1000
	})
	test('Add Favorite Id', () => {
		const result: AddFavoriteAction = {
			type: ActionTypeKeys.ADD_FAV_ID,
			payload: random,
		}
		expect(addFav(random)).toEqual(result)
	})
	test('Add Genre Id', () => {
		const result: AddGenreAction = {
			type: ActionTypeKeys.ADD_GENRE_ID,
			payload: random,
		}
		expect(addGenre(random)).toEqual(result)
	})
	test('Change Search Query', () => {
		const someString = 'someSeachQuery'
		const result: ChangeSearchQueryAction = {
			type: ActionTypeKeys.CHANGE_SEARCH_QUERY,
			payload: someString,
		}
		expect(changeSearchQuery(someString)).toEqual(result)
	})
	test('Change Sort', () => {
		const sortString: SearchSort = 'popularity'
		const result: ChangeSortAction = {
			type: ActionTypeKeys.CHANGE_SORT,
			payload: sortString,
		}
		expect(changeSort(sortString)).toEqual(result)
	})
	test('Change Sort Direction', () => {
		const result: ChangeSortDirectionAction = {
			type: ActionTypeKeys.CHANGE_SORT_DIRECTION,
		}
		expect(changeSortDirection()).toEqual(result)
	})
	test('Clear Favorites', () => {
		const result: ClearFavoritesAction = {
			type: ActionTypeKeys.CLEAR_FAVS,
		}
		expect(clearFavorites()).toEqual(result)
	})
	test('Delete Favorite Id', () => {
		const result: DelFavoriteAction = {
			type: ActionTypeKeys.DEL_FAV_ID,
			payload: random,
		}
		expect(delFav(random)).toEqual(result)
	})
	test('Delete Genre Id', () => {
		const result: DelGenreAction = {
			type: ActionTypeKeys.DEL_GENRE_ID,
			payload: random,
		}
		expect(delGenre(random)).toEqual(result)
	})
	test('New Best Request', () => {
		const result: NewBestRequestAction = {
			type: ActionTypeKeys.NEW_BEST_REQUEST,
		}
		expect(newBestRequest(random)).toEqual(result)
	})
	test('New Search Request', () => {
		const result: NewSearchRequestAction = {
			type: ActionTypeKeys.NEW_SEARCH_REQUEST,
		}
		expect(newSearchRequest(random)).toEqual(result)
	})
})
