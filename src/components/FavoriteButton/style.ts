import styled from 'styled-components'

const AddToFav = styled.div`
	box-shadow: 0px 0px 4px 0px black;
	padding: 10px;
	box-sizing: border-box;
	max-width: 200px;
	transition: transform 0.1s ease-in;
	&:hover {
		transform: scale(1.05);
	}
	text-align: center;
`
const RemoveFromFav = styled(AddToFav)``

export { AddToFav, RemoveFromFav }
