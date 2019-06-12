import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
	font-size: 40px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const SoLittle404 = styled(Little404)`
	font-size: 15px;
	font-style: italic;
`

export default function ErrorPage(props) {
	return (
		<Wrapper404>
			<Big404>Sorry</Big404>
			<Little404>Something gone wrong</Little404>
			<SoLittle404>{props.error}</SoLittle404>
		</Wrapper404>
	)
}

ErrorPage.propTypes = {
	error: PropTypes.string,
}
