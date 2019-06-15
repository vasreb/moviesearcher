import styled from 'styled-components'
const SearchInput = styled.input`
	width: 300px;
	height: 25px;
	background-color: #4871a0;
	color: Snow;
	border-radius: 20px;
	border: 2px solid #334860;
	font-family: Roboto, Open Sans, Helvetica Neue, sans-serif;
	@media (max-width: 800px) {
		flex-shrink: 1;
		width: auto;
	}
	padding-left: 10px;
`
const SearchWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	@media (max-width: 400px) {
		position: static;
	}
`
const ToggleOpen = styled.div`
	position: relative;
	top: 5px;
	right: -5px;
`
const SearchOptionsWrap = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 500px;
	padding: 10px;
	position: absolute;
	top: 32px;
	left: 10px;
	background-color: #4a76a8;
	border: 3px solid #446e99;
	box-shadow: 0px 0px 10px -2px #000;
	border-radius: 10px;
	display: block;
	z-index: 9999999;
	@media (max-width: 800px) {
		width: auto;
	}
	@media (max-width: 400px) {
		top: 100px;
		left: 0px;
	}
`
const ClickCatcher = styled.div`
	position: fixed;
	width: 9999px;
	height: 9999px;
	top: -3000px;
	left: -3000px;
	background: rgb(0, 0, 0, 0.2);
	z-index: 99999;
`
const Genres = styled.form`
	display: flex;
	flex-direction: column;
	text-align: left;
	font-size: 20px;
	padding: 5px;
`

const GenreLabel = styled.label`
	margin-left: 20px;
	position: relative;
	width: 150px;
	&::before {
		content: '';
		position: absolute;
		left: -20px;
		top: 7px;
		width: 10px;
		height: 10px;
		border: 2px solid #c9d8d8;
	}
	&::after {
		content: '';
		display: none;
		position: absolute;
		left: -18px;
		top: 9px;
		width: 10px;
		height: 10px;
		background-color: #98d6d6;
	}
`
const Genre = styled.input`
	display: none;
	&:checked + ${GenreLabel}::after {
		display: block;
	}
`

const Sorts = styled.div`
	padding: 5px;
	text-align: left;
	font-size: 20px;
`
const SortLabel = styled(GenreLabel)`
	&::before {
		border-radius: 10px;
	}
	&::after {
		border-radius: 10px;
	}
`
const Sort = styled(Genre)`
	&:checked + ${SortLabel}::after {
		display: block;
	}
`
const DirectionLabel = styled(GenreLabel)`
	margin-left: 0;
	&::before {
		display: none;
	}
	&::after {
		display: none;
	}
`
const Direction = styled(Genre)`
	&:checked + ${DirectionLabel}::after {
		display: none;
	}
`

export {
	SearchInput,
	SearchWrapper,
	ToggleOpen,
	SearchOptionsWrap,
	ClickCatcher,
	Genres,
	GenreLabel,
	Genre,
	Sorts,
	SortLabel,
	Sort,
	DirectionLabel,
	Direction,
}
