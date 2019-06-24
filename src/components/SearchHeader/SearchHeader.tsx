import React from 'react'
import { useState } from 'react'
import genres from '../../constants/genres'
import { sorts } from '../../constants/FilterConstants'
import { MergeProps as Props } from '../../containers/HeaderSearchContainer'

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
} from './style'

export default function SearchHeader(props: Props) {
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
		error,
	} = props
	const genresInputs = genres.map(genre => (
		<div key={genre.id}>
			<Genre
				id={genre.id.toString()}
				type="checkbox"
				value={genre.id}
				onChange={() => handleToggleGenre(genre.id)}
				checked={doesContainGenre(genre.id)}
			/>
			<GenreLabel htmlFor={genre.id.toString()}>{genre.name}</GenreLabel>
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
	const handleOpen = () => {
		if (error.isError) return
		setOpen(!isOpen)
	}
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
			<ToggleOpen onClick={handleOpen}>{isOpen ? '△' : '▽'}</ToggleOpen>
			<ClickCatcher onClick={handleOpen} style={{ display: isOpen ? 'block' : 'none' }} />
			<SearchOptionsWrap style={{ display: isOpen ? 'flex' : 'none' }}>
				<Genres>{genresInputs}</Genres>
				<Sorts>
					{sortsRadio}
					<Direction type="checkbox" onChange={handleSortDirection} id="changeDirection" />
					<DirectionLabel htmlFor="changeDirection">Direction {isAsc ? '△' : '▽'}</DirectionLabel>
				</Sorts>
			</SearchOptionsWrap>
		</SearchWrapper>
	)
}
