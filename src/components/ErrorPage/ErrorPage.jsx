import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper404, Big404, Little404, SoLittle404 } from './style.js'

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
