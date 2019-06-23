import React, { SyntheticEvent } from 'react'
import { connect } from 'react-redux'
import addGenre from './../actions/addGenre'
import delGenre from './../actions/delGenre'
import changeSort from './../actions/changeSort'
import changeSortDirection from './../actions/changeSortDirection'
import { useRef } from 'react'
import fetchSearchFilms from '../actions/fetchSearchFilms'
import changeSearchQuery from './../actions/changeSearchQuery'
import newSearchRequest from './../actions/newSearchRequest'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import SearchHeader from '../components/SearchHeader/SearchHeader'
import { AppState } from '../reducers/main'
import * as State from '../reducers/State'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

interface StateFromProps {
	genres: number[];
	isAsc: boolean;
	query: string;
	isLoading: boolean;
	sort: string;
	error: State.Error;
}

interface DispatchFromProps {
	dispatch: ThunkDispatch<AppState, null, Action<string>>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps extends RouteComponentProps {
}

type DispatchFnArg = number & SyntheticEvent & undefined

type DispatchFn = ToggleId | EventHandler | Void 

type ToggleId = (id: number) => Promise<void>;
type EventHandler = (e: SyntheticEvent) => Promise<void>;
type Void = () => Promise<void>;

interface Handles {
	handleToggleGenre: ToggleId;
	handleQuerySearch: EventHandler;
	handleSortDirection: Void;
	handleChangeSort: EventHandler;
}

export interface MergeProps extends Handles {
	doesContainGenre: (id: number) => boolean;
	doesThisSort: (value: string) => boolean;
	isAsc: boolean;
	query: string;
	error: State.Error;
	isLoading: boolean;
	startSearch: () => void;
}

interface TimerRef {
	current: undefined | ReturnType<typeof setTimeout>;
}

const mapStateToProps = (state: AppState): StateFromProps => {
	const { error } = state
	const { genres, isAsc, query, sort } = state.filters
	const { isLoading } = state.filmsSearch
	return { genres, isAsc, query, isLoading, sort, error }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, null, Action<string>>): DispatchFromProps => {
	return { dispatch }
}
const mergeProps = (stateProps: StateFromProps, dispatchProps: DispatchFromProps, ownProps: OwnProps): MergeProps => {
	const { genres, isAsc, isLoading, query, sort, error } = stateProps
	const { dispatch } = dispatchProps

	const doesContainGenre = (id: number) => {
		return genres.includes(id)
	}

	const doesThisSort = (value: string) => {
		return sort === value
	}

	const startSearch = async () => {
		if (window.location.pathname !== '/search') {
			ownProps.history.push('/search')
		}
		await dispatch(newSearchRequest())
		window.scrollTo(0,0)
		await dispatch(fetchSearchFilms(1))
	}

	const handleToggleGenre = async (id: number) => {
		if (genres.includes(id)) {
			dispatch(delGenre(id))
		} else {
			dispatch(addGenre(id))
		}
	}

	const handleChangeSort = async (e:SyntheticEvent) => {
		await dispatch(changeSort((e.target as HTMLInputElement).value))
	}

	const handleSortDirection = async () => {
		await dispatch(changeSortDirection())
	}

	const handleQuerySearch = async (e: SyntheticEvent) => {
		e.persist()
		await dispatch(changeSearchQuery((e.target as HTMLInputElement).value))
	}
	return {
		doesContainGenre,
		doesThisSort,
		isAsc,
		query,
		error,
		handleToggleGenre,
		handleQuerySearch,
		handleSortDirection,
		handleChangeSort,
		isLoading,
		startSearch
	}
}
// (e.target as HTMLInputElement).value.length > 0

function HeaderSearchContainer(props: MergeProps) {
	const { isLoading, startSearch } = props
	let timer: TimerRef = useRef() //storage for search timer

	function DelayWrapper (dispatchFn: DispatchFn) {
		const StartTimer = () => {
			timer.current = setTimeout(async () => {
				await startSearch()
				clearTimeout(timer.current)
			}, 1500)
		}
		return async (value: DispatchFnArg) => {
			await dispatchFn(value)
			clearTimeout(timer.current)
			StartTimer()
			if (isLoading) {
				StartTimer()
			}
		}
	}
	const handles: Handles = {
		handleQuerySearch: DelayWrapper(props.handleQuerySearch) as EventHandler,
		handleToggleGenre: DelayWrapper(props.handleToggleGenre) as ToggleId,
		handleSortDirection: DelayWrapper(props.handleSortDirection) as Void,
		handleChangeSort: DelayWrapper(props.handleChangeSort) as EventHandler,
}
	return <SearchHeader {...{...props, ...handles}} />
}

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
		mergeProps
	)(HeaderSearchContainer)
)
