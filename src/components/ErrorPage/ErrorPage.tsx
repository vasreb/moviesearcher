import React from 'react'
import { ErrorWrapper, ErrorTitle, ErrorText, ErrorInfo } from './style'

interface ErrorPageProps {
	error: string | null;
}

export default function ErrorPage(props: ErrorPageProps) {
	return (
		<ErrorWrapper>
			<ErrorTitle>Sorry</ErrorTitle>
			<ErrorText>Something gone wrong</ErrorText>
			<ErrorInfo>{props.error}</ErrorInfo>
		</ErrorWrapper>
	)
}
