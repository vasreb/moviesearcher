import styled from 'styled-components'
const FilmsWrapper = styled.ul`
	list-style: none;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(355px, 1fr));
	grid-gap: 20px;
	align-items: center;
	padding: 25px 0;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`
const EmptyListPlaceholder = styled.h2`
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 30px;
`
export { FilmsWrapper, EmptyListPlaceholder }
