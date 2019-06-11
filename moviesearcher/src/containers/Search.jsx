import { connect } from 'react-redux'
import fetchSearchFilms from '../actions/fetchSearchFilms.js'
import FilmList from '../components/FilmList.jsx'

const mapStateToProps = state => {
	const { filmsSearch } = state
	return {
		filmsSearch,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { dispatch } = dispatchProps
	const { filmsSearch } = stateProps
	const { query, currentPage } = filmsSearch
	const fetchData = () => {
		dispatch(fetchSearchFilms(currentPage, query))
	}
	return {
		...ownProps,
		fetchData,
		films: filmsSearch,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FilmList)
