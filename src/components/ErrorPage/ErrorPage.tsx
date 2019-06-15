import React from 'react'
import PropTypes from 'prop-types'
import { ErrorWrapper, ErrorTitle, ErrorText, ErrorInfo } from './style'

export default function ErrorPage(props) {
	return (
		<ErrorWrapper>
			<ErrorTitle>Sorry</ErrorTitle>
			<ErrorText>Something gone wrong</ErrorText>
			<ErrorInfo>{props.error}</ErrorInfo>
		</ErrorWrapper>
	)
}

ErrorPage.propTypes = {
	error: PropTypes.string,
}
