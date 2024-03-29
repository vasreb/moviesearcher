import React from 'react'
import { Component } from 'react'
import ErrorPage from '../ErrorPage/ErrorPage'
import styled from 'styled-components'

const MainWrapper = styled.main`
	position: relative;
	width: 100%;
	height: 100%;
`

interface Props {
	children: any;
}

interface Error {
	message: string;
}

interface BoundaryState {
	isError: boolean;
	error: any;
}

export default class MainWrapperBoundary extends Component<Props, BoundaryState> {
	public state = {
		isError: false,
		error: null,
	}
	public static getDerivedStateFromError(error: Error) {
		return { isError: true, error: error.message }
	}

	public render() {
		if (this.state.isError) {
			return <ErrorPage error={this.state.error} />
		}

		// eslint-disable-next-line react/prop-types
		return <MainWrapper>{this.props.children}</MainWrapper>
	}
}

