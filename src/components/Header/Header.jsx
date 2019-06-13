import React from 'react'
import HeaderSearchContainer from '../../containers/HeaderSearchContainer.jsx'
import {
	HeaderWrapper,
	Logo,
	HeaderList,
	HeaderItem,
	StyledLink,
	HeaderItemSearch,
} from './style'

export default function Header() {
	return (
		<HeaderWrapper>
			<HeaderList>
				<StyledLink to="/best">
					<Logo>JustMovieSearcher</Logo>
				</StyledLink>
				<HeaderItemSearch>
					<HeaderSearchContainer />
				</HeaderItemSearch>
				<HeaderItem>
					<StyledLink to="/best">Best</StyledLink>
				</HeaderItem>
				<HeaderItem>
					<StyledLink to="/favorites">Favorites</StyledLink>
				</HeaderItem>
			</HeaderList>
		</HeaderWrapper>
	)
}
