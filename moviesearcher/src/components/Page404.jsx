import React from 'react'
import styled from 'styled-components'

const Wrapper404 = styled.div`
	margin: 0 auto;
	text-align: center;
`

const Big404 = styled.h2`
	margin: 0;
	font-size: 200px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Little404 = styled.p`
	font-size: 20px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export default function Page404(props) {
	return (
		<Wrapper404>
			<Big404>404</Big404>
			<Little404>Sorry, this page doesn't exist</Little404>
		</Wrapper404>
	)
}
