import styled from 'styled-components'
const FilmWrapper = styled.div`
	margin: 0 auto;
	margin-top: 70px;
	padding: 20px;
	box-sizing: border-box;
	width: 80%;
	background-color: #f2f4f4;
	@media (max-width: 500px) {
		width: 100%;
		padding: 0px;
	}
`
const Name = styled.h2`
	margin: 0;
	font-family: Geneva, Tahoma, Sedona, sans-serif;
	color: rgba(0, 0, 0, 0.87);
	font-size: 1.22em;
	line-height: 1.03em;
	margin-bottom: 1.03em;
	margin-top: 1.03em;
	word-wrap: break-word;
`
const Poster = styled.div`
	width: 355px;
	height: 533px;
	box-shadow: 0px 0px 20px -5px rgb(0, 0, 0, 0.85);
	background-size: cover;
	flex-shrink: 0;
	@media (max-width: 500px) {
		width: 225px;
		height: 337px;
	}
`

const Overview = styled.p`
	margin: 0;
	font-size: 1em;
	font-family: Geneva, Tahoma, Verdana, sans-serif;
	line-height: 1.18em;
	word-wrap: break-word;
`

const Description = styled.div`
	font-size: 24px;
	padding-left: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	@media (max-width: 500px) {
		font-size: 15px;
		padding-left: 0px;
	}
`

const Genres = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: auto;
	margin-bottom: 20px;
`

const Genre = styled.div`
	text-decoration: none;
	color: rgba(0, 0, 0, 0.87);
	border-radius: 10px;
	box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 0.85);
	padding: 5px;
	margin: 0 10px;
	box-sizing: border-box;
`

const Primary = styled.div`
	display: flex;
	flex-direction: row;
	box-shadow: 0px 0px 20px 0px black;
	@media (max-width: 950px) {
		flex-direction: column;
		align-items: center;
	}
	@media (max-width: 950px) {
		padding: 10px;
	}
`

const Secondary = styled(Primary)`
	margin-top: 24px;
	font-size: 20px;
	display: flex;
	flex-direction: row;
`

const Rating = styled.h3`
	margin: 0;
	padding: 0;
	margin-top: auto;
	margin-bottom: 20px;
`
const InfoColumn = styled.div`
	width: 50%;
	font-family: Geneva, Tahoma, Verdana, sans-serif;
	font-size: 1.22em;
	word-wrap: break-word;
	> :nth-child(2n + 1) {
		background-color: #c9d8d8;
	}
`

const InfoRow = styled.div`
	min-height: 1.5em;
	width: 100%;
	padding: 5px;
	box-sizing: border-box;
`

export {
	FilmWrapper,
	Name,
	Poster,
	Overview,
	Description,
	Genres,
	Genre,
	Primary,
	Secondary,
	Rating,
	InfoColumn,
	InfoRow,
}
