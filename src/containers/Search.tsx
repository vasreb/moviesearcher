import { connect } from 'react-redux'
import fetchSearchFilms from '../actions/fetchSearchFilms'
import FilmList from '../components/FilmList/FilmList'

const mapStateToProps = state => {
	const { filmsSearch, error } = state
	return {
		filmsSearch,
		error,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		dispatch,
	}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const { dispatch } = dispatchProps
	const { filmsSearch, error } = stateProps
	const fetchData = () => {
		dispatch(fetchSearchFilms())
	}
	const placeholder = "Let's search something!"
	return {
		...ownProps,
		fetchData,
		films: filmsSearch,
		placeholder,
		error,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FilmList)
