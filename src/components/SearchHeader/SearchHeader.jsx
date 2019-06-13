import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import genres from '../../constants/genres.js'
import sorts from '../../constants/sorts.js'
import {
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
} from './style.js'

export default function SearchHeader(props) {
	const [isOpen, setOpen] = useState(false)
	const {
		handleQuerySearch,
		query,
		handleToggleGenre,
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
				onChange={() => handleToggleGenre(genre.id)}
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
				onChange={handleQuerySearch}
				onKeyDown={e => {
					if (e.keyCode === 13) {
						handleQuerySearch(e)
					}
				}}
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

SearchHeader.propTypes = {
	handleQuerySearch: PropTypes.func.isRequired,
	query: PropTypes.string,
	handleToggleGenre: PropTypes.func.isRequired,
	doesContainGenre: PropTypes.func.isRequired,
	handleChangeSort: PropTypes.func.isRequired,
	isAsc: PropTypes.bool.isRequired,
	handleSortDirection: PropTypes.func.isRequired,
	doesThisSort: PropTypes.func.isRequired,
}
