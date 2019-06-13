import { connect } from 'react-redux'
import fetchSearchFilms from '../actions/fetchSearchFilms.js'
import FilmList from '../components/FilmList/FilmList.jsx'

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
	const fetchData = () => {
		dispatch(fetchSearchFilms())
	}
	const placeholder = "Let's search something!"
	return {
		...ownProps,
		fetchData,
		films: filmsSearch,
		placeholder,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(FilmList)
