import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FilmCardWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: #f1f3f4;
	width: 355px;
	height: 533px;
	margin: 0;
	background-size: cover;
	box-shadow: 0px 0px 10px -4px black;
	@media (max-width: 500px) {
		width: 225px;
		height: 337px;
	}
`

const Name = styled.h2`
	padding: 5px;
	box-sizing: border-box;
	display: block;
	min-height: 17%;
	background-color: rgb(0, 0, 0, 0.4);
	word-wrap: break-word;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	margin: 0;
	color: rgba(255, 255, 255, 0.87);
	font-size: 30px;
	font-family: Tahoma, Sedona;
	opacity: 0;
	transition: opacity 0.1s ease-in;
	${FilmCardWrapper}:hover & {
		opacity: 1;
	}
	@media (max-width: 1100px) {
		opacity: 1;
	}
`

const Description = styled.ul`
	padding: 5px;
	box-sizing: border-box;
	display: block;
	min-height: 17%;
	background-color: rgb(0, 0, 0, 0.4);
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	margin: 0;
	opacity: 0;
	color: rgba(255, 255, 255, 0.87);
	font-size: 14px;
	font-family: Tahoma, Sedona;
	transition: opacity 0.1s ease-in;
	${FilmCardWrapper}:hover & {
		opacity: 1;
	}
	@media (max-width: 1100px) {
		opacity: 1;
	}
`

const StyledLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
`

export { FilmCardWrapper, Name, Description, StyledLink }
