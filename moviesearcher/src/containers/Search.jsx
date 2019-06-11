import { connect } from 'react-redux'
import fetchSearchFilms from '../actions/fetchSearchFilms.js'
import FilmList from '../components/FilmList.jsx'

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
	const { dispatch } = dispatchProps
	const { searchFilms } = stateProps
	const { query, currentPage } = searchFilms
	const fetchData = () => {
		dispatch(fetchSearchFilms(currentPage, query))
	}
	return {
		...ownProps,
		fetchData,
		films: searchFilms,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FilmList)
