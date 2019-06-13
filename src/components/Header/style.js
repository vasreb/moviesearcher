import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.header`
	position: sticky;
	top: 0;
	background-color: #4a76a8;
	height: 50px;
	border-bottom: 2px solid #446e99;
	box-shadow: 0px 0px 10px 0px black;
	z-index: 9999;
	@media (max-width: 400px) {
		height: 100px;
	}
	@media (max-width: 400px) {
		top: 100px;
		left: 0px;
		position: static;
		padding: 0px 20px;
	}
`

const Logo = styled.p`
	color: #edeef0;
	margin: auto 0;
	text-shadow: 0px 0px 10px #edeef0;
	background-size: contain;
	font-size: 30px;
	align-self: center;
	font-family: Lucida Sans Unicode, Lucida Grande, sans-serif;
	@media (max-width: 800px) {
		font-size: 20px;
	}
	@media (max-width: 600px) {
		display: none;
	}
`

const HeaderList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin: 0;
	padding: 0 5px;
	@media (max-width: 800px) {
		justify-content: space-between;
	}
	@media (max-width: 400px) {
		flex-wrap: wrap;
		align-content: center;
	}
`

const HeaderItem = styled.li`
	color: #fff;
	height: 50px;
	text-align: center;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-bottom: 5px solid #161732;
	@media (max-width: 400px) {
		flex-wrap: wrap;
		align-content: center;
		flex-grow: 1;
	}
`
const StyledLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: bold;
	font-size: 20px;
	display: flex;
`

const HeaderItemSearch = styled(HeaderItem)`
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: none;
	margin-right: 200px;
	@media (max-width: 1200px) {
		margin-right: 0;
	}
	@media (max-width: 400px) {
		min-width: 300px;
		order: 3;
	}
`

export {
	HeaderWrapper,
	Logo,
	HeaderList,
	HeaderItem,
	StyledLink,
	HeaderItemSearch,
}
