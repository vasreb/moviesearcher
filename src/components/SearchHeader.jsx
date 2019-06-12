import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import PropTypes from 'prop-types'
import genres from './../constants/genres.js'
import sorts from './../constants/sorts.js'

const SearchInput = styled.input`
	width: 300px;
	height: 25px;
	background-color: #4871a0;
	color: Snow;
	border-radius: 20px;
	border: 2px solid #334860;
	@media (max-width: 800px) {
		flex-shrink: 1;
		width: auto;
	}
`
const SearchWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
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
`
const ClickCatcher = styled.div`
	position: fixed;
	width: 9999px;
	height: 9999px;
	top: -3000px;
	left: -3000px;
	background: rgb(0, 0, 0, 0.2);
`
const Genres = styled.form`
	display: flex;
	flex-direction: column;
	text-align: left;
	font-size: 20px;
	border: 1px solid black;
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
	border: 1px solid black;
	border-left: none;
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

export default function SearchHeader(props) {
	const [isOpen, setOpen] = useState(false)
	const {
		handleSearch,
		query,
		toggleGenre,
		doesContainGenre,
		handleChangeSort,
		isAsc,
		handleSortDirection,
		doesThisSort,
	} = props
	const genresInputs = genres.map(genre => (
		<div key={genre.id}>
			<Genre
				id={genre.id}
				type="checkbox"
				value={genre.id}
				onChange={() => toggleGenre(genre.id)}
				checked={doesContainGenre(genre.id)}
			/>
			<GenreLabel htmlFor={genre.id}>{genre.name}</GenreLabel>
		</div>
	))
	const sortsRadio = sorts.map(sort => (
		<div key={sort.id}>
			<Sort
				type="radio"
				onChange={handleChangeSort}
				value={sort.id}
				id={sort.id}
				name="sort"
				checked={doesThisSort(sort.id)}
			/>
			<SortLabel htmlFor={sort.id}>{sort.name}</SortLabel>
		</div>
	))
	return (
		<SearchWrapper>
			<SearchInput
				onChange={handleSearch}
				onKeyDown={handleSearch}
				value={query}
			/>
			<ToggleOpen
				onClick={() => {
					setOpen(!isOpen)
				}}
			>
				{isOpen ? '△' : '▽'}
			</ToggleOpen>
			<ClickCatcher
				onClick={() => {
					setOpen(false)
				}}
				style={{ display: isOpen ? 'block' : 'none' }}
			/>
			<SearchOptionsWrap style={{ display: isOpen ? 'flex' : 'none' }}>
				<Genres>{genresInputs}</Genres>
				<Sorts>
					{sortsRadio}
					<Direction
						type="checkbox"
						onChange={handleSortDirection}
						id="changeDirection"
					/>
					<DirectionLabel htmlFor="changeDirection">
						Direction {isAsc ? '△' : '▽'}
					</DirectionLabel>
				</Sorts>
			</SearchOptionsWrap>
		</SearchWrapper>
	)
}
